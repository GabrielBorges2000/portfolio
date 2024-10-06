'use client'
import { Card } from '@/components/card'
import { Navigation } from '@/components/nav'
import Particles from '@/components/particles'
import { transformePhone } from '@/util/transforme-phone'
import Image from 'next/image'
import Link from 'next/link'
import { socials } from '../page'

export default function Contact() {
    return (
        <div className=' bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0'>
            <Navigation />
            <Image
                alt='Mountains'
                src={'/hero-background.svg'}
                fill
                sizes='(min-width: 1920px) 50vw, 100vw'
                style={{
                    objectFit: 'cover', // cover, contain, none
                }}
                className='absolute top-0'
            />
            <Particles
                className='absolute inset-0 -z-10 animate-fade-in'
                quantity={100}
            />
            <div className='w-full container flex items-center flex-col justify-center min-h-screen px-4 mx-auto pb-8 space-y-8'>
                <div className='mt-24 mb-8 md:mt-0 flex flex-col items-center justify-center '>
                    <h1 className='z-10 text-2xl text-transparent cursor-default text-edge-outline font-display sm:text-4xl md:text-8xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow'>
                        Contatos
                    </h1>
                    <h2 className='text-sm md:text-lg text-zinc-300 text-center w-3/4 md:w-full'>
                        Escolha uma das opções abaixo para entrar em contato.
                    </h2>
                </div>

                <div className='grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:gap-16'>
                    {socials.map((s) => (
                        <Card key={s.label.replaceAll(' ', '')}>
                            <Link
                                href={s.href}
                                target='_blank'
                                className='p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 lg:pb-32 md:p-16'>
                                <span
                                    className='absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent'
                                    aria-hidden='true'
                                />
                                <span className='relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange'>
                                    {s.icon}
                                </span>{' '}
                                <div className='z-10 flex flex-col items-center'>
                                    <span className='lg:text-md font-medium duration-150 xl:text-2xl text-zinc-200 group-hover:text-white font-display'>
                                        {transformePhone(s.handle)}
                                    </span>
                                    <span className='mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200'>
                                        {s.label}
                                    </span>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
