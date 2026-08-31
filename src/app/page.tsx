import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Particles from '@/components/particles'
import { navigation, socials } from '@/lib/navigation'
import { getUserGitHub } from '@/util/get-user'
import { transformePhone } from '@/util/transforme-phone'

export const metadata: Metadata = {
  title: 'Início',
  description:
    'Portfólio de Gabriel Borges — Full-Stack, UX Designer e CTO da CODE BORGES.',
}

export default async function Home() {
  const { user } = await getUserGitHub()

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen max-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
      <Image
        alt='Mountains'
        src={'/hero-background.svg'}
        fill
        sizes='(min-width: 120rem) 50vw, 100vw'
        style={{
          objectFit: 'cover',
        }}
        quality={100}
        priority
        className='absolute top-0'
      />
      <nav className='my-16 animate-fade-in'>
        <div className='flex items-center justify-center gap-4'>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-bold duration-500 text-zinc-400 hover:text-zinc-300'>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={100}
      />
      <h1 className='z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow'>
        {user?.name}
      </h1>

      <div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
      <div className='my-16 text-center animate-fade-in'>
        <h2 className='text-sm md:text-lg text-zinc-300 '>{user?.bio}</h2>
      </div>
      <div className='flex flex-row gap-8 text-center animate-fade-in'>
        {socials.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-col items-center text-zinc-300'
            title={transformePhone(s.handle)}>
            <span className='hover:shadow-sm hover:shadow-zinc-100 relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-300 border rounded-full text-zinc-200 border-zinc-500 bg-zinc-900 drop-shadow-orange'>
              {s.icon}
            </span>
            {s.label}
            <span className='sr-only'>(abre em nova aba)</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
