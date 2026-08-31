export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
      <output
        className='flex items-center gap-2 text-zinc-300'
        aria-label='Carregando'>
        <span className='h-3 w-3 rounded-full bg-zinc-300 animate-bounce [animation-delay:-0.3s]' />
        <span className='h-3 w-3 rounded-full bg-zinc-300 animate-bounce [animation-delay:-0.15s]' />
        <span className='h-3 w-3 rounded-full bg-zinc-300 animate-bounce' />
      </output>
      <span className='sr-only'>Carregando conteúdo…</span>
    </div>
  )
}
