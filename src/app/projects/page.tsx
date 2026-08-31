import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Navigation } from '@/components/nav'
import Particles from '@/components/particles'
import { ProjectsList } from '@/components/project-list'
import { getUserGitHub } from '@/utils/get-user'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata')
  return {
    title: t('projects.title'),
    description: t('projects.description'),
  }
}

export default async function ProjectsPage() {
  const t = await getTranslations('projects')
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
            {t('title')}
          </h2>
          <p className='mt-4 text-zinc-400'>{t('subtitle')}</p>
        </div>

        <div className='space-y-4'>
          <h2 className='z-10 text-lg text-transparent cursor-default text-edge-outline font-display sm:text-2xl md:text-3xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow tracking-wider'>
            {t('featured')}
          </h2>
          <div className='w-full h-px bg-zinc-800' />
          <ProjectsList projects={initialRepositories} />
        </div>

        <div className='space-y-4'>
          <h2 className='z-10 text-lg text-transparent cursor-default text-edge-outline font-display sm:text-2xl md:text-3xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow tracking-wider'>
            {t('others')}
          </h2>
          <div className='hidden w-full h-px md:block bg-zinc-800' />
          <ProjectsList projects={repositories} />
        </div>
      </div>
    </div>
  )
}
