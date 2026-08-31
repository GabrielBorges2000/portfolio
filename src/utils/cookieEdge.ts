import type { NextRequest, NextResponse } from 'next/server'

/**
 * Helpers de cookie para uso em **Edge runtime** (proxy/middleware).
 *
 * NÃO usa `next/headers` porque essa API não funciona em Edge.
 * Usa `request.cookies` (leitura) e `NextResponse.cookies` (escrita) do
 * `next/server`, que são as APIs corretas para esse ambiente.
 *
 * Importante: cookies SET aqui só persistem na response se ela for a
 * mesma que vai ser retornada. Se você criar um `NextResponse.redirect()`
 * depois, precisa passar esses cookies pra ele.
 */

const COOKIE_OPTIONS = {
  path: '/',
  sameSite: 'lax' as const,
}

export function getEdgeCookie(
  request: NextRequest,
  name: string
): string | undefined {
  return request.cookies.get(name)?.value
}

export function setEdgeCookie(
  response: NextResponse,
  name: string,
  value: string
): void {
  response.cookies.set(name, value, COOKIE_OPTIONS)
}

export function deleteEdgeCookie(response: NextResponse, name: string): void {
  response.cookies.set({
    ...COOKIE_OPTIONS,
    name,
    value: '',
    maxAge: 0,
  })
}
