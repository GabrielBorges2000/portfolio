import './global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getTranslations } from 'next-intl/server'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const calSans = LocalFont({
  src: '../../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
})

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata')
  return {
    title: {
      default: t('siteTitle'),
      template: `%s`,
    },
    icons: {
      shortcut: '/favicon.png',
    },
    authors: {
      name: 'Gabriel Borges Oliveira',
      url: 'https://github.com/GabrielBorges2000',
    },
    robots: 'index, follow',
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = (await import(`@/i18n/${locale}.json`)).default

  return (
    <html
      lang={locale === 'pt-br' ? 'pt-BR' : 'en'}
      className={['dark', inter.variable, calSans.variable].join(' ')}>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
