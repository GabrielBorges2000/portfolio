import type { Metadata } from 'next'
import Image from 'next/image'
import { CoursesList } from '@/components/courses-list'
import { ExperiencesList } from '@/components/experiences-list'
import { FormationList } from '@/components/formation-list'
import { LanguageList } from '@/components/language-list'
import { Navigation } from '@/components/nav'
import Particles from '@/components/particles'
import { Badge } from '@/components/ui/badge'
import { getUserGitHub } from '@/util/get-user'
import * as userInfo from '@/util/user-information'

export const metadata: Metadata = {
  title: 'Currículo | Portfólio de Gabriel Borges',
  description:
    'Backend Engineer — hard skills, soft skills, formação acadêmica, cursos, experiências profissionais e idiomas de Gabriel Borges.',
}

export default async function CurriculumPage() {
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
            Backend Engineer com atuação prática em Node.js, TypeScript e
            NestJS, focado no desenvolvimento e evolução de APIs REST,
            integrações entre sistemas e plataformas corporativas. Nos últimos
            anos meu trabalho se concentrou em ambientes multi-tenant com
            PostgreSQL, Prisma e RabbitMQ, e em desenvolvimento e manutenção de
            conectores SailPoint para provisionamento de identidades.
          </p>
          <p className='mt-4 text-zinc-400'>
            Tenho exposição consistente a AWS (EKS, EC2, ECR, S3, Aurora, SQS,
            IAM), Docker, Kubernetes, pipelines de CI/CD no GitHub Actions e
            deploy via GitOps com FluxCD. Atuei com release engineering
            (semantic versioning, conventional commits) e em investigação de
            incidentes em produção, com participação em RCA e postmortem. Minha
            visão full stack com React e Next.js é uma competência
            complementar, utilizada quando a entrega pede frente no frontend.
          </p>
          <p className='mt-4 text-zinc-400'>
            Procuro aprofundar continuamente arquitetura distribuída,
            observabilidade, segurança e tomada de decisão técnica para crescer
            em responsabilidade técnica sobre sistemas backend.
          </p>
          <p className='mt-4 text-zinc-400'>
            Veja uma breve descrição das minhas habilidades, conhecimento,
            formações e experiências que tive ao longo dos anos.
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
                {<span className=' rounded-full p-1'> {skill.icon}</span>}
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
                {<span className=' rounded-full p-1'> {skill.icon}</span>}
                {skill.name.toLocaleUpperCase()}
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
