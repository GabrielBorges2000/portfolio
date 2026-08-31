import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black px-6 text-center'>
      <h1 className='z-10 text-6xl sm:text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display whitespace-nowrap bg-clip-text bg-gradient-radial-yellow'>
        404
      </h1>
      <p className='mt-6 max-w-md text-zinc-300'>
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        href='/'
        className='mt-8 px-4 py-2 rounded-md border border-zinc-500 text-zinc-200 hover:bg-zinc-800 transition-colors'>
        Voltar ao início
      </Link>
    </div>
  )
}
