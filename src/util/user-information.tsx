import color from 'tailwindcss/colors'

import { Code2, Database } from 'lucide-react'
import { BiLogoTypescript } from 'react-icons/bi'
import { DiJqueryLogo } from 'react-icons/di'
import {
    FaBookOpen,
    FaBootstrap,
    FaBrain,
    FaClock,
    FaCode,
    FaCommentDots,
    FaCss3,
    FaDocker,
    FaFigma,
    FaGithub,
    FaHandHoldingHeart,
    FaHandshake,
    FaHtml5,
    FaJsSquare,
    FaLaptopCode,
    FaLightbulb,
    FaNodeJs,
    FaPuzzlePiece,
    FaReact,
    FaRobot,
    FaSchool,
    FaSmile,
    FaSyncAlt,
    FaUsers,
} from 'react-icons/fa'
import { FaGitAlt, FaLanguage } from 'react-icons/fa6'
import { GrMysql, GrOracle } from 'react-icons/gr'
import { IoHardwareChip, IoLogoElectron, IoLogoVercel } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import {
    SiAdobe,
    SiAdobephotoshop,
    SiBootstrap,
    SiCss3,
    SiDocker,
    SiExpress,
    SiFastify,
    SiHtml5,
    SiJavascript,
    SiJquery,
    SiJsonwebtokens,
    SiKnexdotjs,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiReacthookform,
    SiReactos,
    SiReactquery,
    SiRedux,
    SiShadcnui,
    SiStorybook,
    SiStrapi,
    SiStyledcomponents,
    SiTypescript,
    SiVite,
    SiVitest,
    SiZod,
} from 'react-icons/si'

import { GiTeacher } from 'react-icons/gi'

export const hardSkills = [
    {
        name: 'React',
        icon: <FaReact color={color.sky[300]} className='h-4 w-4' />,
    },
    {
        name: 'React Native',
        icon: <FaReact color={color.blue[500]} className='h-4 w-4' />,
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs color={color.gray[300]} className='h-4 w-4' />,
    },
    {
        name: 'HTML5',
        icon: <FaHtml5 color={color.orange[500]} className='h-4 w-4' />,
    },
    {
        name: 'CSS3',
        icon: <FaCss3 color={color.blue[500]} className='h-4 w-4' />,
    },
    {
        name: 'JavaScript',
        icon: <FaJsSquare color={color.yellow[400]} className='h-4 w-4' />,
    },
    {
        name: 'TypeScript',
        icon: <BiLogoTypescript color={color.blue[500]} className='h-5 w-5' />,
    },
    {
        name: 'Node.js',
        icon: (
            <FaNodeJs
                className='h-4 w-4'
                fill={color.lime[500]}
                color={color.lime[500]}
            />
        ),
    },
    {
        name: 'Inteligência Artificial',
        icon: <FaRobot color={color.gray[300]} className='h-4 w-4' />,
    },
    {
        name: 'Electron',
        icon: <IoLogoElectron color={color.sky[300]} className='h-4 w-4' />,
    },
    {
        name: 'Git',
        icon: (
            <FaGitAlt
                className='h-4 w-4'
                fill={color.orange[600]}
                color={color.zinc[400]}
            />
        ),
    },
    {
        name: 'GitHub',
        icon: (
            <FaGithub
                className='h-4 w-4'
                fill={color.zinc[800]}
                color={color.zinc[400]}
            />
        ),
    },
    {
        name: 'Styled Components',
        icon: (
            <SiStyledcomponents color={color.yellow[500]} className='h-6 w-6' />
        ),
    },
    {
        name: 'TailwindCSS',
        icon: <RiTailwindCssFill color={color.blue[500]} className='h-4 w-4' />,
    },
    {
        name: 'Material UI',
        icon: <Code2 color={color.blue[500]} className='h-4 w-4' />,
    },
    {
        name: 'API Rest',
        icon: <Database color={color.rose[500]} className='h-4 w-4' />,
    },
    {
        name: 'Figma',
        icon: <FaFigma color={color.gray[300]} className='h-4 w-4' />,
    },
    {
        name: 'Vite',
        icon: <SiVite color={color.yellow[500]} className='h-4 w-4' />,
    },
    {
        name: 'Express',
        icon: <SiExpress color={color.gray[300]} className='h-4 w-4' />,
    },
    {
        name: 'Jquery',
        icon: <DiJqueryLogo color={color.blue[500]} className='h-4 w-4' />,
    },
    {
        name: 'Knex',
        icon: <SiKnexdotjs color={color.orange[500]} className='h-4 w-4' />,
    },
    {
        name: 'Prisma',
        icon: <SiPrisma color={color.emerald[500]} className='h-4 w-4' />,
    },
    {
        name: 'Bootstrap',
        icon: <FaBootstrap color={color.violet[400]} className='h-4 w-4' />,
    },
    {
        name: 'EJS',
        icon: <Code2 color={color.yellow[500]} className='h-4 w-4' />,
    },
    {
        name: 'MYSQL',
        icon: <GrMysql color={color.blue[300]} className='h-4 w-4' />,
    },
    {
        name: 'PostgressSQL',
        icon: (
            <SiPostgresql
                color={color.white}
                fill={color.blue[300]}
                className='h-4 w-4'
            />
        ),
    },
    {
        name: 'OracleDB',
        icon: <GrOracle color={color.orange[600]} className='h-4 w-4' />,
    },
    {
        name: 'Fastify',
        icon: <SiFastify color={color.zinc[800]} className='h-4 w-4' />,
    },
    {
        name: 'Vitest',
        icon: <SiVitest color={color.lime[500]} className='h-4 w-4' />,
    },
    {
        name: 'Shadcn/ui',
        icon: <SiShadcnui color={color.zinc[900]} className='h-4 w-4' />,
    },
    {
        name: 'React Query',
        icon: <SiReactquery color={color.rose[500]} className='h-4 w-4' />,
    },
    {
        name: 'Docker',
        icon: <FaDocker className='h-4 w-4' fill={color.blue[500]} />,
    },
    {
        name: 'JWT',
        icon: <SiJsonwebtokens color={color.green[500]} className='h-4 w-4' />,
    },
    {
        name: 'Vercel',
        icon: <IoLogoVercel color={color.zinc[800]} className='h-4 w-4' />,
    },
    {
        name: 'StoryBook',
        icon: <SiStorybook color={color.rose[500]} className='h-4 w-4' />,
    },
    {
        name: 'Redux',
        icon: <SiRedux color={color.rose[500]} className='h-4 w-4' />,
    },
    {
        name: 'Rect Hook Form',
        icon: <SiReacthookform color={color.rose[600]} className='h-4 w-4' />,
    },
    {
        name: 'Zod',
        icon: <SiZod color={color.violet[800]} className='h-4 w-4' />,
    },
]

export const softSkills = [
    {
        name: 'Comunicação Eficaz',
        icon: <FaCommentDots color={color.sky[300]} className='h-4 w-4' />,
    },
    {
        name: 'Resolução de Problemas',
        icon: <FaPuzzlePiece color={color.sky[300]} className='h-4 w-4' />,
    },
    {
        name: 'Trabalho em Equipe',
        icon: <FaUsers color={color.sky[300]} className='h-4 w-4' />,
    },
    {
        name: 'Gestão de Tempo',
        icon: <FaClock color={color.sky[300]} className='h-4 w-4' />,
    },
    {
        name: 'Adaptabilidade',
        icon: <FaSyncAlt color={color.sky[300]} className='h-4 w-4' />,
    },
    {
        name: 'Pensamento Crítico',
        icon: <FaBrain color={color.sky[300]} className='h-4 w-4' />,
    },
    {
        name: 'Autogestão e Proatividade',
        icon: <FaLightbulb color={color.sky[300]} className='h-4 w-4' />,
    },
    {
        name: 'Empatia',
        icon: <FaSmile color={color.sky[300]} className='h-4 w-4' />,
    },
    {
        name: 'Resiliência',
        icon: <FaHandHoldingHeart color={color.sky[300]} className='h-4 w-4' />,
    },
    {
        name: 'Curiosidade e Aprendizado Contínuo',
        icon: <FaBookOpen color={color.sky[300]} className='h-4 w-4' />,
    },
    {
        name: 'Desenvolvimento Ágil',
        icon: <Code2 color={color.sky[300]} className='h-4 w-4' />,
    },
]

export const formation = [
    {
        name: 'Fundação Estudar - Harvard EAD',
        degree: 'Ciência da Computação CC50',
        period: 'Concluido em 2023',
        describe:
            'Curso introdutório em ciência da computação oferecido pela faculdade de Harvard através da Fundação Estudar.',
        icon: <IoHardwareChip size={40} color={color.white} />,
    },
    {
        name: 'Faculdade Descomplica Digital',
        degree: 'Análise e Desenvolvimento de Sistemas',
        period: 'Em andamento',
        describe:
            'Faculdade de analise e desenvolvimento de sistemas em modalidade EAD. com término em junho de 2026',
        icon: <IoHardwareChip size={40} color={color.white} />,
    },
]

export const courses = [
    {
        name: 'Lógica de Programação com JavaScript',
        institution: 'DNC, Rocketseat e DIO',
        describe:
            'Curso focado nos conceitos fundamentais de lógica de programação utilizando JavaScript.',
        icon: <SiJavascript size={40} color={color.yellow[400]} />,
    },
    {
        name: 'HTML5, CSS3, JavaScript',
        institution: 'DNC e Rocketseat',
        describe:
            'Curso sobre desenvolvimento web com as principais tecnologias e bibliotecas front-end.',
        icon: <SiHtml5 size={40} color={color.orange[500]} />,
    },
    {
        name: 'TypeScript',
        institution: 'Rocketseat',
        describe:
            'Especialização em TypeScript para garantir um desenvolvimento mais seguro e escalável, aproveitando os benefícios da tipagem estática.',
        icon: <SiTypescript size={40} color={color.blue[500]} />,
    },
    {
        name: 'React, React Native, Next.js, Electron.',
        institution: 'DIO, Rocketseat e Codecademy',
        describe:
            'Especialização completa sobre desenvolvimento de aplicações web e mobile com React, Next.js e Electron e as melhores bibliotecas e front-end.',
        icon: <SiReact size={40} color={color.sky[400]} />,
    },
    {
        name: 'Node.js, Java, Python, API Restfull',
        institution: ' Rocketseat',
        describe:
            'Cursos completos sobre desenvolvimento de aplicações back-end com Node.js, Java, Python',
        icon: <FaNodeJs size={40} color={color.lime[400]} />,
    },
    {
        name: 'PostgreSQL, MySQL, OracleDB, SQLite, Firebase',
        institution: 'Rocketseat',
        describe:
            'Curso completo sobre bancos de dados relacionais e não-relacionais, com foco em PostgreSQL, MySQL, OracleDB, SQLite e Firebase para desenvolvimento de aplicações back-end e realizar ações e consultas no banco.',
        icon: <SiPostgresql size={40} color={color.blue[400]} />,
    },
    {
        name: 'Testes Unitários, Testes E2E, Testes de Integração',
        institution: 'Rocketseat',
        describe:
            'Curso completo sobre a criação e execução de testes unitários, testes de integração e testes de ponta a ponta (E2E) para garantir a qualidade do código e a confiabilidade de aplicações.',
        icon: <SiVitest size={40} color={color.lime[400]} />,
    },
    {
        name: 'DevOps com Docker, Github Actions, CI/CD',
        institution: 'Rocketseat',
        describe:
            'Curso completo sobre conceitos de DevOps utilizando Docker para automação, escalabilidade e gerenciamento de containers em ambientes de desenvolvimento e produção. Além de criar workflows com Github Actions',
        icon: <SiDocker size={40} color={color.blue[400]} />,
    },
    {
        name: 'Fundamentos de UX Designer',
        institution: 'DNC e FIAP',
        describe:
            'Curso sobre design centrado no usuário e usabilidade de interfaces digitais.',
        icon: <FaFigma size={40} color={color.white} />,
    },
    {
        name: 'Adobe Photoshop',
        institution: 'Arquitettar',
        describe:
            'Curso de manipulação e edição de imagens utilizando Adobe Photoshop.',
        icon: <SiAdobe size={40} color={color.red[500]} />,
    },
    {
        name: 'Inteligência Artificial - OpenAI',
        institution: 'Rocketseat',
        describe:
            'Curso focado nos conceitos e aplicações de inteligência artificial em desenvolvimento, utilizando a API da OpenAI.',
        icon: <FaRobot size={40} color={color.sky[400]} />,
    },
    {
        name: 'Líder Coach',
        institution: 'Sebrae',
        describe:
            'Curso de liderança e desenvolvimento de habilidades de coaching focado em desenvolvimento e treinamento de pessoas.',
        icon: <FaUsers size={40} color={color.amber[500]} />,
    },
]

export const experiences = [
    {
        name: 'Arcos',
        position: 'Desenvolvedor FullStack PJ',
        period: 'Atual',
        describe:
            'Desenvolvimento do novo sistema da empresa que estava em PL/SQL para tecnologias modernas como Node.js, JQuery, Bootstrap, EJS, Express, HTML, CSS, JavaScript e SQL. Inovações com React Native e AI.',
        icon: <FaLaptopCode size={40} color={color.white} />,
        stack: [
            <SiNodedotjs />,
            <SiJquery />,
            <SiBootstrap />,
            <SiExpress />,
            <SiHtml5 />,
            <SiCss3 />,
            <SiJavascript />,
            <SiMysql />,
            <SiReact />,
        ],
    },
    {
        name: 'Code Borges',
        position: 'CTO e Desenvolvedor FullStack PJ',
        period: 'Atual',
        describe:
            'Responsável pela direção técnica e desenvolvimento de sistemas para diversos clientes, utilizando tecnologias modernas como Node.js, React, React Native, Bootstrap, Express, JavaScript, SQL, e AI. Especialização em soluções escaláveis e inovadoras para web, mobile e desktop.',
        icon: <FaLaptopCode size={40} color={color.white} />,
        stack: [
            <SiNodedotjs />,
            <SiJquery />,
            <SiBootstrap />,
            <SiExpress />,
            <SiHtml5 />,
            <SiCss3 />,
            <SiJavascript />,
            <SiMysql />,
            <SiReact />,
            <SiReactos />,
        ],
    },
    {
        name: 'COFAM',
        position: 'Professor de Desenvolvimento Web - Voluntário',
        period: 'Atual aos Domingos',
        describe:
            'Atuando como professor voluntário de desenvolvimento web, ministrando aulas sobre tecnologias como  HTML, CSS, JavaScript. O foco é ensinar boas práticas de desenvolvimento e inovação para criação de soluções escaláveis para web e criação sites para freelancer gerando novas oportunidades de trabalho aos jovens.',
        icon: <GiTeacher size={40} color={color.white} />,
        stack: [
            <SiNodedotjs />,
            <SiJquery />,
            <SiBootstrap />,
            <SiExpress />,
            <SiHtml5 />,
            <SiCss3 />,
            <SiJavascript />,
            <SiMysql />,
            <SiReact />,
        ],
    },
    {
        name: 'Pirovani Magazine',
        position: 'Desenvolvedor FullStack PJ',
        period: 'Março/2023 – Agosto/2023',
        describe:
            'Desenvolvimento de site e CMS, sistemas internos, manutenção de computadores, atendimento ao cliente e design gráfico com Photoshop. Utilizando tecnologias como Next.js, React, Sanity, Node.js e API Rest.',
        icon: <FaCode size={40} color={color.white} />,
        stack: [
            <SiNextdotjs />,
            <SiReact />,
            <SiNodedotjs />,
            <SiStrapi />,
            <SiAdobephotoshop />,
        ],
    },
    {
        name: 'X-Point Soluções Tecnológicas',
        position: 'Programador Front-End',
        period: 'Dezembro/2022 – Janeiro/2023',
        describe:
            'Desenvolvimento de aplicações web e mobile utilizando React, React Native, Next.js.',
        icon: <FaHandshake size={40} color={color.white} />,
        stack: [<SiReact />, <SiNextdotjs />, <SiNodedotjs />],
    },
    {
        name: 'X-Point Soluções Tecnológicas',
        position: 'Estágio Programador Front-End Júnior',
        period: 'Setembro/2022 – Novembro/2022',
        describe:
            'Desenvolvimento de aplicações web e mobile utilizando React, React Native, Next.js.',
        icon: <FaHandshake size={40} color={color.white} />,
        stack: [<SiReact />, <SiNextdotjs />, <SiNodedotjs />],
    },
]

export const languages = [
    {
        name: 'Português',
        level: 'Nativo',
        icon: <FaLanguage size={40} color={color.white} />,
    },
    {
        name: 'Inglês',
        level: 'Básico / Têcnico',
        icon: <FaLanguage size={40} color={color.white} />,
    },
]
