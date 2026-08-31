import { Code2, Database } from 'lucide-react'
import type { ReactNode } from 'react'
import { BiLogoTypescript } from 'react-icons/bi'
import { DiCss3Full, DiPhotoshop } from 'react-icons/di'
import {
  FaAws,
  FaBookOpen,
  FaBrain,
  FaClock,
  FaCode,
  FaCommentDots,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHandHoldingHeart,
  FaHandshake,
  FaJava,
  FaJsSquare,
  FaLanguage,
  FaLaptopCode,
  FaLightbulb,
  FaLinux,
  FaNodeJs,
  FaPuzzlePiece,
  FaReact,
  FaRobot,
  FaShieldAlt,
  FaSmile,
  FaSyncAlt,
  FaUsers,
} from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import { GrMysql, GrOracle } from 'react-icons/gr'
import { IoCloudOutline, IoHardwareChip } from 'react-icons/io5'
import { LuKanban } from 'react-icons/lu'
import { MdDesignServices, MdOutlineDesignServices } from 'react-icons/md'
import { RiTailwindCssFill, RiTerminalBoxFill } from 'react-icons/ri'
import {
  SiAwesomelists,
  SiBootstrap,
  SiCloudflare,
  SiDocker,
  SiEjs,
  SiExpress,
  SiFastify,
  SiGithubactions,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiJquery,
  SiJsonwebtokens,
  SiKubernetes,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRabbitmq,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiSpring,
  SiTerraform,
  SiTypescript,
  SiVite,
  SiVitest,
  SiZod,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import color from 'tailwindcss/colors'
import type messages from '@/i18n/en.json'

type Curriculum = (typeof messages)['curriculum']

export type HardSkillKey = keyof Curriculum['hardSkills']
export type SoftSkillKey = keyof Curriculum['softSkills']
export type FormationEntry = Curriculum['formation'][number]
export type Course = Curriculum['courses'][number]
export type Experience = Curriculum['experiences'][number]
export type Language = Curriculum['languages'][number]

export const hardSkillIcons: { key: HardSkillKey; icon: ReactNode }[] = [
  {
    key: 'nodejs',
    icon: (
      <FaNodeJs
        className='h-4 w-4'
        fill={color.lime[500]}
        color={color.lime[500]}
      />
    ),
  },
  {
    key: 'typescript',
    icon: <BiLogoTypescript color={color.blue[500]} className='h-5 w-5' />,
  },
  {
    key: 'nestjs',
    icon: <SiNestjs color={color.red[500]} className='h-4 w-4' />,
  },
  {
    key: 'apiRest',
    icon: <Database color={color.rose[500]} className='h-4 w-4' />,
  },
  {
    key: 'postgresql',
    icon: (
      <SiPostgresql
        color={color.white}
        fill={color.blue[300]}
        className='h-4 w-4'
      />
    ),
  },
  {
    key: 'prisma',
    icon: <SiPrisma color={color.emerald[500]} className='h-4 w-4' />,
  },
  {
    key: 'rabbitmq',
    icon: <SiRabbitmq color={color.orange[500]} className='h-4 w-4' />,
  },
  {
    key: 'java',
    icon: <FaJava color={color.red[500]} className='h-4 w-4' />,
  },
  {
    key: 'springBoot',
    icon: <SiSpring color={color.green[500]} className='h-4 w-4' />,
  },
  {
    key: 'mysql',
    icon: <GrMysql color={color.blue[300]} className='h-4 w-4' />,
  },
  {
    key: 'oracleDb',
    icon: <GrOracle color={color.orange[600]} className='h-4 w-4' />,
  },
  {
    key: 'microservices',
    icon: <Code2 color={color.indigo[500]} className='h-4 w-4' />,
  },
  {
    key: 'multiTenant',
    icon: <IoCloudOutline color={color.violet[500]} className='h-4 w-4' />,
  },
  {
    key: 'aws',
    icon: <FaAws color={color.yellow[600]} className='h-4 w-4' />,
  },
  {
    key: 'docker',
    icon: <FaDocker className='h-4 w-4' fill={color.blue[500]} />,
  },
  {
    key: 'kubernetes',
    icon: <SiKubernetes color={color.blue[500]} className='h-4 w-4' />,
  },
  {
    key: 'cicd',
    icon: <SiGithubactions color={color.blue[500]} className='h-4 w-4' />,
  },
  {
    key: 'gitops',
    icon: <SiAwesomelists color={color.teal[500]} className='h-4 w-4' />,
  },
  {
    key: 'devops',
    icon: <RiTerminalBoxFill color={color.cyan[500]} className='h-4 w-4' />,
  },
  {
    key: 'terraform',
    icon: <SiTerraform color={color.violet[500]} className='h-4 w-4' />,
  },
  {
    key: 'cloudflare',
    icon: <SiCloudflare color={color.orange[500]} className='h-4 w-4' />,
  },
  {
    key: 'gcp',
    icon: <SiGooglegemini color={color.blue[500]} className='h-4 w-4' />,
  },
  {
    key: 'azure',
    icon: <VscAzure color={color.blue[500]} className='h-4 w-4' />,
  },
  {
    key: 'linux',
    icon: <FaLinux color={color.zinc[200]} className='h-4 w-4' />,
  },
  {
    key: 'jenkins',
    icon: <SiJenkins color={color.red[500]} className='h-4 w-4' />,
  },
  {
    key: 'javascript',
    icon: <FaJsSquare color={color.yellow[400]} className='h-4 w-4' />,
  },
  {
    key: 'react',
    icon: <FaReact color={color.sky[300]} className='h-4 w-4' />,
  },
  {
    key: 'reactNative',
    icon: <FaReact color={color.blue[500]} className='h-4 w-4' />,
  },
  {
    key: 'nextjs',
    icon: <SiNextdotjs color={color.gray[300]} className='h-4 w-4' />,
  },
  {
    key: 'vite',
    icon: <SiVite color={color.yellow[500]} className='h-4 w-4' />,
  },
  {
    key: 'express',
    icon: <SiExpress color={color.gray[300]} className='h-4 w-4' />,
  },
  {
    key: 'fastify',
    icon: <SiFastify color={color.zinc[800]} className='h-4 w-4' />,
  },
  {
    key: 'git',
    icon: (
      <FaGitAlt
        className='h-4 w-4'
        fill={color.orange[600]}
        color={color.zinc[400]}
      />
    ),
  },
  {
    key: 'github',
    icon: (
      <FaGithub
        className='h-4 w-4'
        fill={color.zinc[800]}
        color={color.zinc[400]}
      />
    ),
  },
  {
    key: 'automatedTesting',
    icon: <SiVitest color={color.lime[500]} className='h-4 w-4' />,
  },
  {
    key: 'zod',
    icon: <SiZod color={color.violet[800]} className='h-4 w-4' />,
  },
  {
    key: 'jwt',
    icon: <SiJsonwebtokens color={color.green[500]} className='h-4 w-4' />,
  },
  {
    key: 'sailpoint',
    icon: <FaShieldAlt color={color.amber[500]} className='h-4 w-4' />,
  },
  {
    key: 'cybersecurity',
    icon: <FaShieldAlt color={color.red[500]} className='h-4 w-4' />,
  },
  {
    key: 'artificialIntelligence',
    icon: <FaRobot color={color.gray[300]} className='h-4 w-4' />,
  },
  {
    key: 'tailwindcss',
    icon: <RiTailwindCssFill color={color.blue[500]} className='h-4 w-4' />,
  },
  {
    key: 'shadcn',
    icon: <SiShadcnui color={color.zinc[900]} className='h-4 w-4' />,
  },
  {
    key: 'reactQuery',
    icon: <SiReactquery color={color.rose[500]} className='h-4 w-4' />,
  },
  {
    key: 'kanban',
    icon: <LuKanban color={color.sky[400]} className='h-4 w-4' />,
  },
  {
    key: 'scrum',
    icon: <SiAwesomelists color={color.green[500]} className='h-4 w-4' />,
  },
  {
    key: 'designSprint',
    icon: (
      <MdOutlineDesignServices color={color.pink[500]} className='h-4 w-4' />
    ),
  },
  {
    key: 'designThinking',
    icon: <MdDesignServices color={color.purple[500]} className='h-4 w-4' />,
  },
]

export const softSkillIcons: { key: SoftSkillKey; icon: ReactNode }[] = [
  {
    key: 'communication',
    icon: <FaCommentDots color={color.sky[300]} className='h-4 w-4' />,
  },
  {
    key: 'problemSolving',
    icon: <FaPuzzlePiece color={color.sky[300]} className='h-4 w-4' />,
  },
  {
    key: 'teamwork',
    icon: <FaUsers color={color.sky[300]} className='h-4 w-4' />,
  },
  {
    key: 'collaboration',
    icon: <FaHandshake color={color.sky[300]} className='h-4 w-4' />,
  },
  {
    key: 'knowledgeSharing',
    icon: <FaBookOpen color={color.sky[300]} className='h-4 w-4' />,
  },
  {
    key: 'timeManagement',
    icon: <FaClock color={color.sky[300]} className='h-4 w-4' />,
  },
  {
    key: 'adaptability',
    icon: <FaSyncAlt color={color.sky[300]} className='h-4 w-4' />,
  },
  {
    key: 'criticalThinking',
    icon: <FaBrain color={color.sky[300]} className='h-4 w-4' />,
  },
  {
    key: 'proactivity',
    icon: <FaLightbulb color={color.sky[300]} className='h-4 w-4' />,
  },
  {
    key: 'empathy',
    icon: <FaSmile color={color.sky[300]} className='h-4 w-4' />,
  },
  {
    key: 'resilience',
    icon: <FaHandHoldingHeart color={color.sky[300]} className='h-4 w-4' />,
  },
]

export const formationIcons: Record<FormationEntry['id'], ReactNode> = {
  cc50: <IoHardwareChip size={40} color={color.white} />,
  ads: <IoHardwareChip size={40} color={color.white} />,
  'fiap-eng': <IoHardwareChip size={40} color={color.white} />,
}

export const courseIcons: Record<Course['id'], ReactNode> = {
  logica: <SiJavascript size={40} color={color.yellow[400]} />,
  'html-css-js': <SiHtml5 size={40} color={color.orange[500]} />,
  typescript: <SiTypescript size={40} color={color.blue[500]} />,
  'react-next': <SiReact size={40} color={color.sky[400]} />,
  'node-java-python': <FaNodeJs size={40} color={color.lime[400]} />,
  databases: <SiPostgresql size={40} color={color.blue[400]} />,
  testing: <SiVitest size={40} color={color.lime[400]} />,
  'devops-docker': <SiDocker size={40} color={color.blue[400]} />,
  'ux-foundations': <FaLaptopCode size={40} color={color.white} />,
  photoshop: <DiPhotoshop size={40} color={color.red[500]} />,
  'ai-openai': <FaRobot size={40} color={color.sky[400]} />,
  'lider-coach': <FaUsers size={40} color={color.amber[500]} />,
  fullstack: <FaLaptopCode size={40} color={color.cyan[400]} />,
  'ux-designer': <FaLaptopCode size={40} color={color.pink[400]} />,
  cybersecurity: <FaShieldAlt size={40} color={color.red[500]} />,
  'devops-linux-testing': (
    <RiTerminalBoxFill size={40} color={color.cyan[400]} />
  ),
  'ai-llms': <FaRobot size={40} color={color.emerald[400]} />,
}

export const languageIcons: Record<Language['id'], ReactNode> = {
  portuguese: <FaLanguage size={40} color={color.white} />,
  english: <FaLanguage size={40} color={color.white} />,
}

export const experienceMeta: Record<
  Experience['id'],
  { icon: ReactNode; stack: ReactNode[] }
> = {
  contractlabs: {
    icon: <FaCode size={40} color={color.white} />,
    stack: [
      <SiNodedotjs key='node' />,
      <SiNestjs key='nest' />,
      <SiTypescript key='ts' />,
      <SiPostgresql key='postgres' />,
      <SiPrisma key='prisma' />,
      <SiRabbitmq key='rabbit' />,
      <SiDocker key='docker' />,
      <SiKubernetes key='k8s' />,
      <FaAws key='aws' />,
      <SiGithubactions key='gha' />,
      <SiVitest key='vitest' />,
    ],
  },
  codeborges: {
    icon: <FaLaptopCode size={40} color={color.white} />,
    stack: [
      <SiNodedotjs key='node' />,
      <SiTypescript key='ts' />,
      <SiNestjs key='nest' />,
      <SiPostgresql key='postgres' />,
      <SiPrisma key='prisma' />,
      <SiDocker key='docker' />,
      <SiGithubactions key='gha' />,
    ],
  },
  arcos: {
    icon: <FaLaptopCode size={40} color={color.white} />,
    stack: [
      <SiNodedotjs key='node' />,
      <SiEjs key='ejs' />,
      <FaReact key='react-native' />,
      <SiJavascript key='js' />,
      <GrOracle key='oracle' />,
      <SiMysql key='mysql' />,
      <SiJquery key='jquery' />,
      <SiBootstrap key='bootstrap' />,
    ],
  },
  xpoint: {
    icon: <FaHandshake size={40} color={color.white} />,
    stack: [
      <FaReact key='react' />,
      <SiJavascript key='js' />,
      <Database key='api' />,
    ],
  },
  cofam: {
    icon: <GiTeacher size={40} color={color.white} />,
    stack: [
      <SiHtml5 key='html' />,
      <DiCss3Full key='css' />,
      <SiJavascript key='js' />,
    ],
  },
}
