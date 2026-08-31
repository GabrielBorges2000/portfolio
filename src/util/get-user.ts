import { env } from '../env'

export interface Repository {
  id: number
  name: string
  description: string
  project_url: string
  project_api_url: string
  views: number
  created_at: string
  homepage: string
  html_url?: string
  url?: string
  watchers_count?: number
}

export interface User {
  name: string
  bio: string
  avatar_url: string
  repos_url: string
}

export interface GithubUser {
  user: User
  repositorios: {
    initialRepositories: Repository[]
    repositories: Repository[]
  }
}

const EMPTY_USER: User = {
  name: '',
  bio: '',
  avatar_url: '',
  repos_url: '',
}

const FALLBACK: GithubUser = {
  user: EMPTY_USER,
  repositorios: {
    initialRepositories: [],
    repositories: [],
  },
}

const PER_PAGE = 100
// Limite duro para evitar loop infinito se a API retornar página vazia
// repetidamente sem erro (situação inesperada). 50 páginas × 100 = 5 000 repos.
const MAX_PAGES = 50

async function safeJson<T>(response: Response): Promise<T | null> {
  try {
    return (await response.json()) as T
  } catch {
    return null
  }
}

function formatRepo(repo: Repository) {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description,
    project_url: repo.html_url ?? '',
    project_api_url: repo.url ?? '',
    views: repo.watchers_count ?? 0,
    created_at: repo.created_at,
    homepage: repo.homepage ?? '',
  }
}

/**
 * Busca páginas de repositórios em paralelo, em grupos de `batchSize`,
 * parando quando uma página vem vazia ou quando atingimos `MAX_PAGES`.
 * Retorna a lista concatenada e deduplicada de todos os repositórios.
 */
async function fetchAllRepos(
  baseUrl: string,
  requestConfig: RequestInit,
  batchSize = 5
): Promise<Repository[]> {
  const seenIds = new Set<number>()
  const allRepos: Repository[] = []

  for (let startPage = 1; startPage <= MAX_PAGES; startPage += batchSize) {
    const pageNumbers = Array.from(
      { length: batchSize },
      (_, i) => startPage + i
    )

    const responses = await Promise.all(
      pageNumbers.map((page) =>
        fetch(`${baseUrl}?per_page=${PER_PAGE}&page=${page}`, requestConfig)
      )
    )

    let stoppedEarly = false
    let receivedAny = false

    for (let i = 0; i < responses.length; i++) {
      const page = pageNumbers[i]
      const response = responses[i]

      // 404/422 no GitHub = não há mais páginas.
      if (!response.ok) {
        if (response.status === 404 || response.status === 422) {
          stoppedEarly = true
          break
        }
        console.error(
          `[getUserGitHub] falha na página ${page}: ${response.status}`
        )
        continue
      }

      const repos = await safeJson<Repository[]>(response)
      if (!repos || repos.length === 0) {
        stoppedEarly = true
        break
      }

      receivedAny = true

      for (const repo of repos) {
        if (seenIds.has(repo.id)) continue
        seenIds.add(repo.id)
        allRepos.push(repo)
      }

      // Página parcial = chegamos no fim dos repositórios.
      if (repos.length < PER_PAGE) {
        stoppedEarly = true
        break
      }
    }

    if (stoppedEarly) break
    if (!receivedAny) break
  }

  return allRepos
}

export const getUserGitHub = async (): Promise<GithubUser> => {
  const requestConfig: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
    },
    next: {
      tags: ['github'],
      revalidate: 3600, // 1h — perfil/repos mudam pouco
    },
  }

  try {
    const githubURL = `https://api.github.com/users/${env.NEXT_PUBLIC_GITHUB_USERNAME}`

    const userDataResponse = await fetch(githubURL, requestConfig)

    if (!userDataResponse.ok) {
      return FALLBACK
    }

    const userData = await safeJson<{
      name: string | null
      bio: string | null
      avatar_url: string
      repos_url: string
    }>(userDataResponse)

    if (!userData) return FALLBACK

    const user: User = {
      name: userData.name ?? '',
      bio: userData.bio ?? '',
      avatar_url: userData.avatar_url,
      repos_url: userData.repos_url,
    }

    const rawRepos = await fetchAllRepos(userData.repos_url, requestConfig)
    const repositorios = rawRepos.map(formatRepo)

    const initialRepositories = repositorios.filter((repo) =>
      env.NEXT_PUBLIC_REPOSITORIES_EMPHASIS_ARRAY.some((padrao) =>
        repo.name.includes(padrao)
      )
    )
    const repositories = repositorios.filter((repo) =>
      env.NEXT_PUBLIC_REPOSITORIES_ARRAY.some((padrao) =>
        repo.name.includes(padrao)
      )
    )

    return {
      user,
      repositorios: {
        initialRepositories,
        repositories,
      },
    }
  } catch {
    return FALLBACK
  }
}
