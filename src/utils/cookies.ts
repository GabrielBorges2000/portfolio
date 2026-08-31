import {
  type CookieValueTypes,
  deleteCookie as deleteCookieClient,
  getCookie as getCookieClient,
  setCookie as setCookieClient,
} from 'cookies-next'

/**
 * Retrieves a cookie value by name, supporting both client and server environments.
 *
 * - On the server, uses `next/headers` to access cookies.
 * - On the client, uses `cookies-next`.
 *
 * @param name - The name of the cookie to retrieve.
 * @returns The cookie value, or `undefined` if not found.
 */
export async function getCookie(name: string): Promise<CookieValueTypes> {
  if (typeof window === 'undefined') {
    const { cookies } = await import('next/headers')
    const cookieStore = await cookies()

    const raw = cookieStore.get(name)?.value

    return raw ?? undefined
  }

  const raw = getCookieClient(name)

  return raw ?? undefined
}

/**
 * Sets a cookie with the given name and value, supporting both client and server environments.
 *
 * - On the server, uses `next/headers` to set cookies.
 * - On the client, uses `cookies-next`.
 * - Cookie is set with `path: '/'` and `sameSite: 'lax'`.
 *
 * @param name - The name of the cookie to set.
 * @param value - The value of the cookie. If `null`, no cookie is set.
 */
export async function setCookie(
  name: string,
  value: string | null
): Promise<void> {
  if (typeof window === 'undefined') {
    const { cookies } = await import('next/headers')
    const cookieStore = await cookies()

    if (value) {
      cookieStore.set(name, value, {
        path: '/',
        sameSite: 'lax',
      })
    }

    return
  }

  setCookieClient(name, value ?? '', {
    path: '/',
    sameSite: 'lax',
  })
}

/**
 * Deletes a cookie by name, supporting both client and server environments.
 *
 * - On the server, uses `next/headers` to delete cookies.
 * - On the client, uses `cookies-next`.
 *
 * @param name - The name of the cookie to delete.
 */
export async function deleteCookie(name: string): Promise<void> {
  if (typeof window === 'undefined') {
    const { cookies } = await import('next/headers')
    const cookieStore = await cookies()
    cookieStore.delete(name)

    return
  }

  deleteCookieClient(name)
}
