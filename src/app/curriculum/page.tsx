import type { Metadata } from 'next'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { CoursesList } from '@/components/courses-list'
import { ExperiencesList } from '@/components/experiences-list'
import { FormationList } from '@/components/formation-list'
import { LanguageList } from '@/components/language-list'
import { Navigation } from '@/components/nav'
import Particles from '@/components/particles'
import { Badge } from '@/components/ui/badge'
import { getUserGitHub } from '@/utils/get-user'
import { hardSkillIcons, softSkillIcons } from '@/utils/user-information'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata')
  return {
    title: t('curriculum.title'),
    description: t('curriculum.description'),
  }
}

export default async function CurriculumPage() {
  const t = await getTranslations('curriculum')
  const about = t.raw('about') as string[]
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
          {about.map((paragraph) => (
            <p key={paragraph} className='mt-4 text-zinc-400'>
              {paragraph}
            </p>
          ))}
        </section>

        <section className='space-y-4'>
          <h2 className='z-10 text-lg text-transparent cursor-default text-edge-outline font-display sm:text-2xl md:text-3xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow tracking-wider'>
            {t('sections.hardSkills')}
          </h2>
          <div className='w-full h-px bg-zinc-800' />
          <div className='flex flex-wrap gap-2'>
            {hardSkillIcons.map(({ key, icon }) => (
              <Badge
                key={key}
                className='p-2 border-2 bg-gray-400/50 text-white rounded-xl flex flex-row gap-1'>
                {<span className=' rounded-full p-1'> {icon}</span>}
                {t(`hardSkills.${key}`).toLocaleUpperCase()}
              </Badge>
            ))}
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='z-10 text-lg text-transparent cursor-default text-edge-outline font-display sm:text-2xl md:text-3xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow tracking-wider'>
            {t('sections.softSkills')}
          </h2>
          <div className='w-full h-px bg-zinc-800' />
          <div className='flex flex-wrap gap-2'>
            {softSkillIcons.map(({ key, icon }) => (
              <Badge
                key={key}
                className='p-2 border-2 bg-gray-400/50 text-white rounded-xl flex flex-row gap-1'>
                {<span className=' rounded-full p-1'> {icon}</span>}
                {t(`softSkills.${key}`).toLocaleUpperCase()}
              </Badge>
            ))}
          </div>
        </section>

        <FormationList />
        <ExperiencesList />
        <LanguageList />
        <CoursesList />
      </div>
    </div>
  )
}
