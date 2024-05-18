export interface Repositorios{
    id: number
    name: string
    description: string
    project_url: string
    project_api_url: string
    views: number
    created_at: string
    homepage: string,
    html_url?: string,
    url?: string,
    watchers_count?: number,
}
export interface User{
    name: string
    bio: string
    avatar_url: string
    repos_url: string
}

export interface GithubUser {
    user: User | null
    repositorios: Repositorios[] | []
 }

export async function getUserGitHub(): Promise<GithubUser> {
    const githubURL = "https://api.github.com/users/GabrielBorges2000";

    try {
        const userDataResponse = await fetch(githubURL, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
            }
        });

        const userData = await userDataResponse.json();

        const repos_url = userData.repos_url;

        const repositoriosResponse = await fetch(repos_url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`
            }
        });

        const repositorios = await repositoriosResponse.json();

        const repositoriosComReadme = await Promise.all(repositorios.map(async (repo: Repositorios) => {
                return {
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    project_url: repo.html_url,
                    project_api_url: repo.url,
                    views: repo.watchers_count,
                    created_at: repo.created_at,
                    homepage: repo.homepage
                }
        }))

        const user = {
            name: userData.name,
            bio: userData.bio,
            avatar_url: userData.avatar_url,
            repos_url
        }

        return {
            user,
            repositorios: repositoriosComReadme
        }

    } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
        return {
            user: null,
            repositorios: []
        }
    }
}
