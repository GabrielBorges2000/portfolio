import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export type NavKey = 'projects' | 'contact' | 'curriculum'
export type SocialKey = 'github' | 'linkedin' | 'email' | 'whatsapp'

export interface NavItem {
  key: NavKey
  href: string
}

export interface Social {
  icon: React.ReactNode
  href: string
  key: SocialKey
  handle: string
}

export const navigation: NavItem[] = [
  { key: 'projects', href: '/projects' },
  { key: 'contact', href: '/contact' },
  { key: 'curriculum', href: '/curriculum' },
]

export const socials: Social[] = [
  {
    icon: <Github size={20} />,
    href: 'https://github.com/GabrielBorges2000',
    key: 'github',
    handle: 'GabrielBorges2000',
  },
  {
    icon: <Linkedin size={20} />,
    href: 'https://www.linkedin.com/in/GabrielBorges2000',
    key: 'linkedin',
    handle: '@GabrielBorges2000',
  },
  {
    icon: <Mail size={20} />,
    href: 'mailto:gabriel.vscode@gmail.com',
    key: 'email',
    handle: 'gabriel.vscode@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    href: 'http://api.whatsapp.com/send?phone=5511986237504',
    key: 'whatsapp',
    handle: '+5511986237504',
  },
]
