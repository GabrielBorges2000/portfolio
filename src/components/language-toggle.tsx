'use client'

import { Languages } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { enImage, ptBRImage } from '@/i18n/icons'
import { cn } from '@/lib/utils'
import { setCookie } from '@/utils/cookies'

const locales = [
  { label: 'English', value: 'en', icon: enImage },
  { label: 'Português', value: 'pt-br', icon: ptBRImage },
]

export function LanguageToggle() {
  const [, startTransition] = useTransition()
  const route = useRouter()
  const locale = useLocale()
  const t = useTranslations('layout.language')

  async function setLocale(value: string) {
    if (value === locale) return

    await setCookie('next_locale', value)
    startTransition(() => {
      route.refresh()
    })
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='text-zinc-400 hover:text-zinc-100'>
          <Languages className='size-4' />
          <span className='sr-only'>{t('toggle')}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align='end'
        defaultValue={locale}
        className='space-y-1'>
        {locales.map(({ label, value, icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={async () => setLocale(value)}
            className={cn(
              value === locale ? 'bg-accent text-accent-foreground border' : ''
            )}>
            <Image src={icon as any} alt={label} width={16} />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
