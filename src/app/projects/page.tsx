import { Navigation } from '@/components/nav'
import Particles from '@/components/particles'
import { ProjectsList } from '@/components/project-list'
import { getUserGitHub } from '@/util/get-user'
import Image from 'next/image'
import React from 'react'

export default async function ProjectsPage() {
    const {
        repositorios: { repositories, initialRepositories },
    } = await getUserGitHub()

    return (
        <div className='pb-16'>
            <Navigation />
            <Image
                alt='Mountains'
                src={'/hero-background.svg'}
                fill
                sizes='(min-width: 1920px) 50vw, 100vw'
                style={{
                    objectFit: 'cover',
                }}
                className='absolute top-0'
            />

            <Particles
                className='absolute inset-0 -z-10 animate-fade-in'
                quantity={100}
            />
            <div className='px-6 pt-20 mx-auto space-y-8 md:space-y-16 max-w-7xl lg:px-8 md:pt-24 lg:pt-32'>
                <div className='max-w-2xl mx-auto lg:mx-0'>
                    <h2 className='z-10 text-3xl text-transparent cursor-default text-edge-outline font-display sm:text-4xl md:text-8xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow'>
                        Projetos
                    </h2>
                    <p className='mt-4 text-zinc-400'>
                        Uma seleção dos meus melhores projetos. Cada um mostra a
                        minha habilidade em desenvolvimento de software em
                        vários níveis e ferramentas.
                    </p>
                </div>

                <div className='space-y-4'>
                    <h2 className='z-10 text-lg text-transparent cursor-default text-edge-outline font-display sm:text-2xl md:text-3xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow tracking-wider'>
                        Destaques
                    </h2>
                    <div className='w-full h-px bg-zinc-800' />
                    <ProjectsList projects={initialRepositories} />
                </div>

                <div className='space-y-4'>
                    <h2 className='z-10 text-lg text-transparent cursor-default text-edge-outline font-display sm:text-2xl md:text-3xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow tracking-wider'>
                        Outros projetos
                    </h2>
                    <div className='hidden w-full h-px md:block bg-zinc-800' />
                    <ProjectsList projects={repositories} />
                </div>
            </div>
        </div>
    )
}
