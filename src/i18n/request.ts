import { cookies } from 'next/headers'
import { getRequestConfig } from 'next-intl/server'

import { defaultLocale } from './config'

export default getRequestConfig(async () => {
  const COOKIE_NAME = 'next_locale'
  const cookieLocale = (await cookies()).get(COOKIE_NAME)?.value
  const locale = cookieLocale || defaultLocale

  return {
    locale,
    messages: (await import(`./${locale}.json`)).default,
  }
})
