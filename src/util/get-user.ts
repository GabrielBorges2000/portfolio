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
    user: User | null
    repositorios: {
        initialRepositories: Repository[] | []
        repositories: Repository[] | []
    }
}

export const getUserGitHub = async (): Promise<GithubUser> => {
    const githubURL = `https://api.github.com/users/${env.NEXT_PUBLIC_GITHUB_USERNAME}`

    const requestConfig: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
        },
        next: {
            tags: ['github'],
        },
        cache: 'no-store',
    }

    const userDataResponse = await fetch(githubURL, requestConfig)

    if (!userDataResponse.ok) {
        throw new Error('Failed to fetch user data')
    }

    const userData = await userDataResponse.json()
    const repos_url = userData.repos_url

    const [
        repositoriosPage1Response,
        repositoriosPage2Response,
        repositoriosPage3Response,
    ] = await Promise.all([
        fetch(repos_url, requestConfig),
        fetch(`${repos_url}?page=2`, requestConfig),
        fetch(`${repos_url}?page=3`, requestConfig),
    ])

    if (
        !repositoriosPage1Response.ok ||
        !repositoriosPage2Response.ok ||
        !repositoriosPage3Response.ok
    ) {
        throw new Error('Failed to fetch repositories data')
    }

    const [repositoriosPage1, repositoriosPage2, repositoriosPage3] =
        await Promise.all([
            repositoriosPage1Response.json(),
            repositoriosPage2Response.json(),
            repositoriosPage3Response.json(),
        ])

    const formatRepo = (repo: Repository) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        project_url: repo.html_url,
        project_api_url: repo.url,
        views: repo.watchers_count,
        created_at: repo.created_at,
        homepage: repo.homepage,
    })

    const repositorios1 = await Promise.all(repositoriosPage1.map(formatRepo))
    const repositorios2 = await Promise.all(repositoriosPage2.map(formatRepo))
    const repositorios3 = await Promise.all(repositoriosPage3.map(formatRepo))

    const repositorios = [...repositorios1, ...repositorios2, ...repositorios3]

    const user = {
        name: userData.name,
        bio: userData.bio,
        avatar_url: userData.avatar_url,
        repos_url,
    }

    const initialRepositories = env.NEXT_PUBLIC_REPOSITORIES_EMPHASIS_ARRAY
    const repositories = env.NEXT_PUBLIC_REPOSITORIES_ARRAY

    const projectsInitials = repositorios.filter((repo) =>
        initialRepositories.some((padrao: Repository) =>
            repo.name.includes(padrao)
        )
    )
    const projects = repositorios.filter((repo) =>
        repositories.some((padrao: Repository) => repo.name.includes(padrao))
    )

    return {
        user,
        repositorios: {
            initialRepositories: projectsInitials,
            repositories: projects,
        },
    }
}
