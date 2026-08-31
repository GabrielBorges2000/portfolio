'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[portfolio] erro de renderização:', error)
  }, [error])

  return (
    <div className='flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black px-6 text-center'>
      <h1 className='z-10 text-3xl sm:text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display whitespace-nowrap bg-clip-text bg-gradient-radial-yellow'>
        Algo deu errado
      </h1>
      <p className='mt-6 max-w-md text-zinc-300'>
        Tivemos um problema ao renderizar esta página. Você pode tentar
        novamente ou voltar para a página inicial.
      </p>
      <div className='mt-8 flex gap-4'>
        <button
          type='button'
          onClick={reset}
          className='px-4 py-2 rounded-md border border-zinc-500 text-zinc-200 hover:bg-zinc-800 transition-colors'>
          Tentar novamente
        </button>
        <a
          href='/'
          className='px-4 py-2 rounded-md border border-zinc-500 text-zinc-200 hover:bg-zinc-800 transition-colors'>
          Voltar ao início
        </a>
      </div>
      {error.digest ? (
        <p className='mt-6 text-xs text-zinc-500'>
          Código do erro: {error.digest}
        </p>
      ) : null}
    </div>
  )
}
