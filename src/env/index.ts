import { z } from 'zod'

const repositoryArray = z.string().transform((str) =>
  str
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
)

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  NEXT_PUBLIC_GITHUB_USERNAME: z.string().min(1),
  NEXT_PUBLIC_GITHUB_API_TOKEN: z.string().min(1),
  NEXT_PUBLIC_REPOSITORIES_EMPHASIS_ARRAY: repositoryArray,
  NEXT_PUBLIC_REPOSITORIES_ARRAY: repositoryArray,
})

export type Env = z.infer<typeof envSchema>

function splitCsv(value: string | undefined): string[] {
  if (!value) return []
  return value
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

function getClientEnv(): Env {
  // No browser, as NEXT_PUBLIC_* são injetadas no build. Validamos o mínimo.
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? ''
  const token = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN ?? ''

  if (!username || !token) {
    throw new Error(
      'Variáveis NEXT_PUBLIC_GITHUB_USERNAME e NEXT_PUBLIC_GITHUB_API_TOKEN são obrigatórias.'
    )
  }

  return {
    NODE_ENV: (process.env.NODE_ENV as Env['NODE_ENV']) ?? 'development',
    NEXT_PUBLIC_GITHUB_USERNAME: username,
    NEXT_PUBLIC_GITHUB_API_TOKEN: token,
    NEXT_PUBLIC_REPOSITORIES_EMPHASIS_ARRAY: splitCsv(
      process.env.NEXT_PUBLIC_REPOSITORIES_EMPHASIS_ARRAY
    ),
    NEXT_PUBLIC_REPOSITORIES_ARRAY: splitCsv(
      process.env.NEXT_PUBLIC_REPOSITORIES_ARRAY
    ),
  }
}

let env: Env

if (typeof window === 'undefined') {
  const parsed = envSchema.safeParse(process.env)

  if (!parsed.success) {
    console.error('❌ Invalid environment variables', parsed.error.format())
    throw new Error('Invalid environment variables.')
  }

  env = parsed.data
} else {
  env = getClientEnv()
}

export { env }
