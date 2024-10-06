import { z } from 'zod'

const envSchema = z.object({
    NODE_ENV: z
        .enum(['development', 'test', 'production'])
        .default('development'),
    NEXT_PUBLIC_GITHUB_USERNAME: z.string(),
    NEXT_PUBLIC_GITHUB_API_TOKEN: z.string(),
    NEXT_PUBLIC_REPOSITORIES_EMPHASIS_ARRAY: z
        .string()
        .transform((str) => str.split(',')),
    NEXT_PUBLIC_REPOSITORIES_ARRAY: z
        .string()
        .transform((str) => str.split(',')),
})

let env: any

if (typeof window === 'undefined') {
    const _env = envSchema.safeParse(process.env)

    if (!_env.success) {
        console.error('❌ Invalid environment variables', _env.error.format())
        throw new Error('Invalid environment variables.')
    }

    env = _env.data
} else {
    env = {
        NEXT_PUBLIC_GITHUB_USERNAME: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
        NEXT_PUBLIC_GITHUB_API_TOKEN: process.env.NEXT_PUBLIC_GITHUB_API_TOKEN,
        NEXT_PUBLIC_REPOSITORIES_EMPHASIS_ARRAY:
            process.env.NEXT_PUBLIC_REPOSITORIES_EMPHASIS_ARRAY?.split(','),
        NEXT_PUBLIC_REPOSITORIES_ARRAY:
            process.env.NEXT_PUBLIC_REPOSITORIES_ARRAY?.split(','),
    }
}

export { env }
