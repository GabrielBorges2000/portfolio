'use client'

import { ExternalLink, Eye } from 'lucide-react'
import Link from 'next/link'
import type { Repository } from '@/util/get-user'
import { Card } from './card'

function isValidHomepage(homepage: string): boolean {
  if (!homepage) return false
  try {
    const url = new URL(homepage)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

export function ProjectsList({ projects }: { projects: Array<Repository> }) {
  return (
    <div className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2'>
      {projects.map((project) => {
        const showHomepage = isValidHomepage(project.homepage)
        return (
          <Card key={project.id}>
            <article className='relative w-full h-full p-4 md:p-8'>
              <div className='flex items-center justify-between gap-2'>
                <div className='text-xs text-zinc-100'>
                  <time dateTime={new Date(project.created_at).toISOString()}>
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
              <div className='mt-6 flex items-center gap-2 flex-wrap'>
                {showHomepage ? (
                  <Link
                    href={project.homepage}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 px-3 py-2 rounded-md border border-zinc-500 text-sm text-zinc-200 hover:bg-zinc-800 transition-colors'>
                    <ExternalLink className='w-4 h-4' aria-hidden='true' />
                    Ver site
                    <span className='sr-only'>
                      de {project.name} (abre em nova aba)
                    </span>
                  </Link>
                ) : null}
                <Link
                  href={project.project_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm text-zinc-300 hover:text-zinc-100 transition-colors'>
                  ver no GitHub <span aria-hidden='true'>&rarr;</span>
                  <span className='sr-only'>
                    de {project.name} (abre em nova aba)
                  </span>
                </Link>
              </div>
            </article>
          </Card>
        )
      })}
    </div>
  )
}
