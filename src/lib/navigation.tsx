import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export interface NavItem {
  name: string
  href: string
}

export interface Social {
  icon: React.ReactNode
  href: string
  label: string
  handle: string
}

export const navigation: NavItem[] = [
  { name: 'Projetos', href: '/projects' },
  { name: 'Contato', href: '/contact' },
  { name: 'Currículo', href: '/curriculum' },
]

export const socials: Social[] = [
  {
    icon: <Github size={20} />,
    href: 'https://github.com/GabrielBorges2000',
    label: 'Github',
    handle: 'GabrielBorges2000',
  },
  {
    icon: <Linkedin size={20} />,
    href: 'https://www.linkedin.com/in/GabrielBorges2000',
    label: 'Linkedin',
    handle: '@GabrielBorges2000',
  },
  {
    icon: <Mail size={20} />,
    href: 'mailto:gabriel.vscode@gmail.com',
    label: 'Email',
    handle: 'gabriel.vscode@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    href: 'http://api.whatsapp.com/send?phone=5511986237504',
    label: 'Contato',
    handle: '+5511986237504',
  },
]
