'use client'

import type { Repository } from '@/util/get-user'
import { Eye } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Card } from './card'

export function ProjectsList({ projects }: { projects: Array<Repository> }) {
    return (
        <div className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2'>
            {projects.map((project) => (
                <Card key={project.id}>
                    <Link href={project.project_url} target='_blank'>
                        <article className='relative w-full h-full p-4 md:p-8'>
                            <div className='flex items-center justify-between gap-2'>
                                <div className='text-xs text-zinc-100'>
                                    <time
                                        dateTime={new Date(
                                            project.created_at
                                        ).toISOString()}>
                                        {Intl.DateTimeFormat('pt-BR', {
                                            dateStyle: 'medium',
                                        }).format(new Date(project.created_at))}
                                    </time>
                                </div>
                                <span className='flex items-center gap-1 text-xs text-zinc-500'>
                                    <Eye className='w-4 h-4' />{' '}
                                    {Intl.NumberFormat('pt-BR', {
                                        notation: 'compact',
                                    }).format(project.views ?? 0)}
                                </span>
                            </div>
                            <h2
                                id='featured-post'
                                className='mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display'>
                                {project.name}
                            </h2>
                            <p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                                {project.description ?? ''}
                            </p>
                            <div className=' bottom-4 md:bottom-8'>
                                <p className=' text-zinc-200 hover:text-zinc-50 lg:block mt-2 '>
                                    ver mais{' '}
                                    <span aria-hidden='true'>&rarr;</span>
                                </p>
                            </div>
                        </article>
                    </Link>
                </Card>
            ))}
        </div>
    )
}
