export interface Repositorios {
	id: number;
	name: string;
	description: string;
	project_url: string;
	project_api_url: string;
	views: number;
	created_at: string;
	homepage: string;
	html_url?: string;
	url?: string;
	watchers_count?: number;
}
export interface User {
	name: string;
	bio: string;
	avatar_url: string;
	repos_url: string;
}

export interface GithubUser {
	user: User | null;
	repositorios: Repositorios[] | [];
}

export const getUserGitHub = async (): Promise<GithubUser> => {
    const githubURL = "https://api.github.com/users/GabrielBorges2000";

        const userDataResponse = await fetch(githubURL, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
            }
        });

        if (!userDataResponse.ok) {
            throw new Error('Failed to fetch user data');
        }

        const userData = await userDataResponse.json();
        const repos_url = userData.repos_url;

        const repositoriosPage1Response = await fetch(repos_url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`
            }
        });

        const repositoriosPage2Response = await fetch(`${repos_url}?page=2`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`
            },
        });

        if (!repositoriosPage1Response.ok || !repositoriosPage2Response.ok) {
            throw new Error('Failed to fetch repositories data');
        }

        const repositoriosPage1 = await repositoriosPage1Response.json();
        const repositoriosPage2 = await repositoriosPage2Response.json();

        const formatRepo = (repo: Repositorios) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            project_url: repo.html_url,
            project_api_url: repo.url,
            views: repo.watchers_count,
            created_at: repo.created_at,
            homepage: repo.homepage
        });

        const repositorios1 = await Promise.all(repositoriosPage1.map(formatRepo));
        const repositorios2 = await Promise.all(repositoriosPage2.map(formatRepo));

        const repositorios = [...repositorios1, ...repositorios2];

        const user = {
            name: userData.name,
            bio: userData.bio,
            avatar_url: userData.avatar_url,
            repos_url
        };

        return {
            user,
            repositorios,
        }
}
