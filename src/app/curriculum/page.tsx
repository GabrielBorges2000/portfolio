import { CousesList } from '@/components/couses-list'
import { ExperiencesList } from '@/components/experiences-list'
import { FormationList } from '@/components/formation-list'
import { LanguageList } from '@/components/language-list'
import { Navigation } from '@/components/nav'
import Particles from '@/components/particles'
import { ProjectsList } from '@/components/project-list'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getUserGitHub } from '@/util/get-user'
import * as userInfo from '@/util/user-information'
import { Eye } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default async function ProjectsPage() {
    const { user } = await getUserGitHub()

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
                <section className='max-w-2xl mx-auto lg:mx-0'>
                    <h2 className='z-10 text-3xl text-transparent cursor-default text-edge-outline font-display whitespace-nowrap bg-clip-text bg-gradient-radial-yellow tracking-wider'>
                        {user?.name}
                    </h2>
                    <p className='mt-4 text-zinc-400'>
                        Full-Stack, UX Designer e CTO da CODE BORGES.
                    </p>
                    <p className='mt-4 text-zinc-400'>
                        Minha paixão está em usar as melhores ferramentas e
                        tecnologias inovadoras para criar soluções que impactem
                        positivamente a vida das pessoas.
                    </p>
                    <p className='mt-4 text-zinc-400'>
                        Estou constantemente buscando desafios que me permitam
                        aplicar meu conhecimento em prol do bem-estar e da
                        comodidade dos usuários. Meu desejo construir algo
                        incrível e fazer a diferença no mundo da tecnologia!
                    </p>
                    <p className='mt-4 text-zinc-400'>
                        Veja uma breve descrição das minhas habilidades,
                        conhecimento, formações e experiências que tive ao longo
                        dos anos.
                    </p>
                </section>

                <section className='space-y-4'>
                    <h2 className='z-10 text-lg text-transparent cursor-default text-edge-outline font-display sm:text-2xl md:text-3xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow tracking-wider'>
                        Hard Skills
                    </h2>
                    <div className='w-full h-px bg-zinc-800' />
                    <div className='flex flex-wrap gap-2'>
                        {userInfo.hardSkills.map((skill) => (
                            <Badge
                                key={skill.name}
                                className='p-2 border-2 bg-gray-400/50 text-white rounded-xl flex flex-row gap-1'>
                                {
                                    <span className=' rounded-full p-1'>
                                        {' '}
                                        {skill.icon}
                                    </span>
                                }
                                {skill.name.toLocaleUpperCase()}
                            </Badge>
                        ))}
                    </div>
                </section>

                <section className='space-y-4'>
                    <h2 className='z-10 text-lg text-transparent cursor-default text-edge-outline font-display sm:text-2xl md:text-3xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow tracking-wider'>
                        Soft Skills
                    </h2>
                    <div className='w-full h-px bg-zinc-800' />
                    <div className='flex flex-wrap gap-2'>
                        {userInfo.softSkills.map((skill) => (
                            <Badge
                                key={skill.name}
                                className='p-2 border-2 bg-gray-400/50 text-white rounded-xl flex flex-row gap-1'>
                                {
                                    <span className=' rounded-full p-1'>
                                        {' '}
                                        {skill.icon}
                                    </span>
                                }
                                {skill.name.toLocaleUpperCase()}
                            </Badge>
                        ))}
                    </div>
                </section>

                <FormationList />
                <CousesList />
                <ExperiencesList />
                <LanguageList />
            </div>
        </div>
    )
}
