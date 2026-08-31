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

export interface Skill {
  name: string
  icon: ReactNode
}

export interface FormationEntry {
  name: string
  degree: string
  period: string
  describe: string
  icon: ReactNode
}

export interface Course {
  name: string
  institution: string
  describe: string
  icon: ReactNode
}

export interface Experience {
  name: string
  position: string
  period: string
  describe: string[]
  icon: ReactNode
  stack: ReactNode[]
}

export interface Language {
  name: string
  level: string
  icon: ReactNode
}

export const hardSkills: Skill[] = [
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
    name: 'TypeScript',
    icon: <BiLogoTypescript color={color.blue[500]} className='h-5 w-5' />,
  },
  {
    name: 'NestJS',
    icon: <SiNestjs color={color.red[500]} className='h-4 w-4' />,
  },
  {
    name: 'API REST',
    icon: <Database color={color.rose[500]} className='h-4 w-4' />,
  },
  {
    name: 'PostgreSQL',
    icon: (
      <SiPostgresql
        color={color.white}
        fill={color.blue[300]}
        className='h-4 w-4'
      />
    ),
  },
  {
    name: 'Prisma',
    icon: <SiPrisma color={color.emerald[500]} className='h-4 w-4' />,
  },
  {
    name: 'RabbitMQ',
    icon: <SiRabbitmq color={color.orange[500]} className='h-4 w-4' />,
  },
  {
    name: 'Java',
    icon: <FaJava color={color.red[500]} className='h-4 w-4' />,
  },
  {
    name: 'Spring Boot',
    icon: <SiSpring color={color.green[500]} className='h-4 w-4' />,
  },
  {
    name: 'MySQL',
    icon: <GrMysql color={color.blue[300]} className='h-4 w-4' />,
  },
  {
    name: 'OracleDB',
    icon: <GrOracle color={color.orange[600]} className='h-4 w-4' />,
  },
  {
    name: 'Micro Serviços',
    icon: <Code2 color={color.indigo[500]} className='h-4 w-4' />,
  },
  {
    name: 'Multi Tenant',
    icon: <IoCloudOutline color={color.violet[500]} className='h-4 w-4' />,
  },
  {
    name: 'AWS',
    icon: <FaAws color={color.yellow[600]} className='h-4 w-4' />,
  },
  {
    name: 'Docker',
    icon: <FaDocker className='h-4 w-4' fill={color.blue[500]} />,
  },
  {
    name: 'Kubernetes',
    icon: <SiKubernetes color={color.blue[500]} className='h-4 w-4' />,
  },
  {
    name: 'CI/CD',
    icon: <SiGithubactions color={color.blue[500]} className='h-4 w-4' />,
  },
  {
    name: 'GitOps',
    icon: <SiAwesomelists color={color.teal[500]} className='h-4 w-4' />,
  },
  {
    name: 'DevOps',
    icon: <RiTerminalBoxFill color={color.cyan[500]} className='h-4 w-4' />,
  },
  {
    name: 'Terraform',
    icon: <SiTerraform color={color.violet[500]} className='h-4 w-4' />,
  },
  {
    name: 'Cloudflare',
    icon: <SiCloudflare color={color.orange[500]} className='h-4 w-4' />,
  },
  {
    name: 'GCP',
    icon: <SiGooglegemini color={color.blue[500]} className='h-4 w-4' />,
  },
  {
    name: 'Azure',
    icon: <VscAzure color={color.blue[500]} className='h-4 w-4' />,
  },
  {
    name: 'Linux',
    icon: <FaLinux color={color.zinc[200]} className='h-4 w-4' />,
  },
  {
    name: 'Jenkins',
    icon: <SiJenkins color={color.red[500]} className='h-4 w-4' />,
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare color={color.yellow[400]} className='h-4 w-4' />,
  },
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
    name: 'Vite',
    icon: <SiVite color={color.yellow[500]} className='h-4 w-4' />,
  },
  {
    name: 'Express.js',
    icon: <SiExpress color={color.gray[300]} className='h-4 w-4' />,
  },
  {
    name: 'Fastify',
    icon: <SiFastify color={color.zinc[800]} className='h-4 w-4' />,
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
    name: 'Testes Automatizados',
    icon: <SiVitest color={color.lime[500]} className='h-4 w-4' />,
  },
  {
    name: 'Zod',
    icon: <SiZod color={color.violet[800]} className='h-4 w-4' />,
  },
  {
    name: 'JWT',
    icon: <SiJsonwebtokens color={color.green[500]} className='h-4 w-4' />,
  },
  {
    name: 'SailPoint Connector',
    icon: <FaShieldAlt color={color.amber[500]} className='h-4 w-4' />,
  },
  {
    name: 'Cybersecurity',
    icon: <FaShieldAlt color={color.red[500]} className='h-4 w-4' />,
  },
  {
    name: 'Inteligência Artificial',
    icon: <FaRobot color={color.gray[300]} className='h-4 w-4' />,
  },
  {
    name: 'TailwindCSS',
    icon: <RiTailwindCssFill color={color.blue[500]} className='h-4 w-4' />,
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
    name: 'Kanban',
    icon: <LuKanban color={color.sky[400]} className='h-4 w-4' />,
  },
  {
    name: 'Scrum',
    icon: <SiAwesomelists color={color.green[500]} className='h-4 w-4' />,
  },
  {
    name: 'Design Sprint',
    icon: (
      <MdOutlineDesignServices color={color.pink[500]} className='h-4 w-4' />
    ),
  },
  {
    name: 'Design Thinking',
    icon: <MdDesignServices color={color.purple[500]} className='h-4 w-4' />,
  },
]

export const softSkills: Skill[] = [
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
    name: 'Colaboração entre Equipes Multidisciplinares',
    icon: <FaHandshake color={color.sky[300]} className='h-4 w-4' />,
  },
  {
    name: 'Compartilhamento de Conhecimento',
    icon: <FaBookOpen color={color.sky[300]} className='h-4 w-4' />,
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
]

export const formation: FormationEntry[] = [
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
  {
    name: 'FIAP - CENTRO UNIVERSITÁRIO',
    degree: 'Engenharia de Software (Nano Course)',
    period: 'Concluído',
    describe:
      'Nano course focado em Engenharia de Software, abordando conceitos de arquitetura, padrões de projeto e boas práticas de desenvolvimento.',
    icon: <IoHardwareChip size={40} color={color.white} />,
  },
]

export const courses: Course[] = [
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
    icon: <FaLaptopCode size={40} color={color.white} />,
  },
  {
    name: 'Adobe Photoshop',
    institution: 'Arquitettar',
    describe:
      'Curso de manipulação e edição de imagens utilizando Adobe Photoshop.',
    icon: <DiPhotoshop size={40} color={color.red[500]} />,
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
  {
    name: 'Desenvolvimento Fullstack',
    institution: 'Rocketseat, DNC, DIO, Faculdade Descomplica Digital, FIAP',
    describe:
      'Formação completa em desenvolvimento fullstack, cobrindo front-end, back-end, bancos de dados, DevOps e boas práticas de engenharia de software.',
    icon: <FaLaptopCode size={40} color={color.cyan[400]} />,
  },
  {
    name: 'UX Designer',
    institution: 'DNC, FIAP, Faculdade Descomplica Digital',
    describe:
      'Formação em UX Design cobrindo pesquisa, prototipagem, testes de usabilidade, design centrado no usuário e ferramentas como Figma.',
    icon: <FaLaptopCode size={40} color={color.pink[400]} />,
  },
  {
    name: 'Cybersecurity (Nano Course)',
    institution: 'FIAP - CENTRO UNIVERSITÁRIO',
    describe:
      'Nano course focado em conceitos de cibersegurança, identificação de vulnerabilidades, boas práticas de segurança em aplicações e infraestrutura.',
    icon: <FaShieldAlt size={40} color={color.red[500]} />,
  },
  {
    name: 'DevOps, Linux e Testes Automatizados',
    institution: 'Rocketseat, 4Linux, FIAP',
    describe:
      'Trilha completa sobre práticas de DevOps, administração de ambientes Linux e implementação de testes automatizados para garantir qualidade e confiabilidade em pipelines de entrega contínua.',
    icon: <RiTerminalBoxFill size={40} color={color.cyan[400]} />,
  },
  {
    name: 'Inteligência Artificial, Chatbots e LLMs',
    institution: 'Rocketseat, FIAP - CENTRO UNIVERSITÁRIO',
    describe:
      'Cursos sobre inteligência artificial, construção de chatbots e uso de Large Language Models (LLMs) aplicados a produtos e soluções reais.',
    icon: <FaRobot size={40} color={color.emerald[400]} />,
  },
]

export const experiences: Experience[] = [
  {
    name: 'CONTRACTLABS SISTEMAS LTDA / RAISE IT',
    position: 'Backend Engineer',
    period: '01/2025 - 08/2026',
    describe: [
      'Atuei no desenvolvimento do ecossistema SaaS multi-tenant para gestão de terceiros e identidade, com dois sistemas em Node.js/TypeScript/NestJS - ContractFlow (gestão de prestadores, fornecedores, alocações e contratos) e IAM (identidade, permissões, provedores de autenticação, API keys e auditoria). Cada cliente opera uma base dedicada por ambiente (dev/hml/prod).',
      '- Desenvolvi e evoluí APIs REST em Node.js/TypeScript/NestJS para os sistemas ContractFlow e IAM, com validação via Zod.',
      '- Estruturei a arquitetura multi-tenant e ajudei nas decisões de isolamento de schema, provisionamento de tenants e ciclo de vida das bases.',
      '- Fui responsável por três conectores SailPoint SaaS em produção (conector principal do ContractLabs e dois conectores para parceiros).',
      '- Modelei e mantive o banco com PostgreSQL + Prisma, incluindo uma lib interna de auditoria que registava ações originadas por HTTP ou por filas RabbitMQ.',
      '- Implementei o módulo de notificações, o frontend do IAM em Next.js e o mapeamento de grupos SAML para permissões (SSO corporativo por tenant).',
      '- Mantive o pipeline de release com GitHub Actions (semantic versioning, conventional commits) e o deploy via GitOps/FluxCD com imagens no ECR da AWS aplicadas ao cluster.',
      '- Investiguei e resolvi incidentes em produção, com participação em RCA e postmortem; escrevi testes automatizados (unitários e de integração) com Vitest/Jest.',
      '- Ajudei nas decisões de arquitetura, revisei PRs, defini padrões do time e orientei tecnicamente colegas.',
    ],
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
  {
    name: 'CODEBORGES',
    position: 'Backend Engineer (Freelancer)',
    period: '05/2022 - Atual',
    describe: [
      'Atuo como desenvolvedor autônomo desde 2022, com foco em backend Node.js/TypeScript e em produtos próprios de modelo SaaS. Entre os projetos, destaca-se o Nexus, plataforma em desenvolvimento para gestão de eventos, freelancers e participantes, com multi-tenancy, check-in geolocalizado e relatórios financeiros.',
      '- Desenvolvo APIs e aplicações backend em Node.js, TypeScript e NestJS, com modelagem de bancos relacionais e integração com serviços externos.',
      '- Estruturei e mantenho o Nexus, um SaaS em desenvolvimento para gestão de eventos, freelancers e participantes. O produto inclui multi-tenancy por empresa, gestão de locais, escala e repasse de freelancers com check-in/checkout geolocalizado (com foto), gestão de eventos, ingressos, palestrantes, participantes, emissão de certificados, relatório financeiro, envio de e-mails por template e auditoria de ações.',
      '- Implementação de ambientes com Docker e CI/CD para os projetos em produção, com deploy em servidor autohospedado.',
      '- Realizo também desenvolvimentos pontuais de sites institucionais e e-commerces, sob demanda.',
    ],
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
  {
    name: 'ARCOS - Associação Rede de Compras para Supermercados',
    position: 'Desenvolvedor Full Stack',
    period: '07/2023 - 01/2025',
    describe: [
      'A ARCOS é uma associação de compras para supermercados que mantinha um sistema legado em PL/SQL para gestão de vendas e pesquisa de preços. Atuei na migração para Node.js (EJS) e na construção de um sistema WMS para gestão de estoque (web + mobile).',
      '- Migrei o legado PL/SQL para Node.js, sendo responsável pela evolução do backend e pelas interfaces do sistema de vendas.',
      '- Construí, do início ao fim, um PWA offline para pesquisa de preços em supermercados, usado por funcionários em campo. O app designava o local da pesquisa, capturava foto do produto via câmera e anotava valor; precisava funcionar sem internet. IndexedDB (implementada por mim, decisão técnica avaliada dentro do time) garantiu armazenamento local com ampla compatibilidade. Publiquei uma lib utilitária no NPM para encapsular o acesso ao IndexedDB - sem dependências, segura e de fácil manutenção.',
      '- Evolvi os módulos de análise de pesquisa, precificação por categoria e o início do sistema WMS.',
      '- No WMS web: criei a base inicial de migração de dados, integrei com ERPs e implementei a tela de mapeamento visual do estoque (distribuidora → galpão → ruas → prédios → andares → células) com categorização por cor.',
      '- No WMS mobile (React Native): contatei o fabricante dos coletores, implementei login, recebimento de mercadorias com código de barras, depara cego, recontagem, impressão de etiquetas, armazenamento com base no mapeamento, movimentação/troca de lugar, auditoria de toda movimentação e ajuste de estoque com verificação física em caso de divergência.',
    ],
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
  {
    name: 'X-Point Soluções Tecnológicas',
    position: 'Desenvolvedor Front-End',
    period: '05/2022 - 01/2023',
    describe: [
      'A X-Point era uma softwarehouse regional com produtos consolidados - entre eles o DataDivas, PDV voltado para gestão de restaurantes já estabelecido na região - e novos projetos sob demanda para clientes externos, incluindo integração com a maquininha de cartão Stone.',
      '- Análise técnica de como integrar uma aplicação React Native à maquininha de cartão Stone (para o sistema de garçons). A análise foi minha; a implementação das features que usavam recursos da maquininha foi realizada pelo restante da equipe.',
      '- Desenvolvi o frontend de um sistema de pedidos de gás, consumindo o backend e permitindo ao usuário localizar a loja mais próxima e fazer o pedido pelo aplicativo.',
      '- Atuei no suporte do PDV DataDivas para clientes, exclusivamente via AnyDesk e TeamViewer.',
    ],
    icon: <FaHandshake size={40} color={color.white} />,
    stack: [
      <FaReact key='react' />,
      <SiJavascript key='js' />,
      <Database key='api' />,
    ],
  },
  {
    name: 'ONG COFAM',
    position: 'Professor de Desenvolvimento Web',
    period: '08/2024 - 01/2025',
    describe: [
      'Atuei como professor voluntário de desenvolvimento web aos domingos, conduzindo aulas práticas para os alunos.',
    ],
    icon: <GiTeacher size={40} color={color.white} />,
    stack: [
      <SiHtml5 key='html' />,
      <DiCss3Full key='css' />,
      <SiJavascript key='js' />,
    ],
  },
]

export const languages: Language[] = [
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
