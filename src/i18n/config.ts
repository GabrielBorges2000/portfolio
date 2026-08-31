export const locales = ['en', 'pt-br'] as const
export const defaultLocale = 'en'

export type Locale = (typeof locales)[number]
