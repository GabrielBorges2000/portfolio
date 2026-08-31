'use client'
import { motion, useMotionTemplate, useSpring } from 'framer-motion'

import type { PropsWithChildren } from 'react'

// `framer-motion@10` ainda não expõe `HTMLMotionProps` com os tipos do React 19
// de forma estável. Tipamos manualmente o que usamos aqui.
const MotionDiv = motion.div as unknown as React.FC<
  React.HTMLAttributes<HTMLDivElement> & { style?: React.CSSProperties }
>

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 })

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = event
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`
  const style: React.CSSProperties = {
    maskImage: maskImage as unknown as string,
    WebkitMaskImage: maskImage as unknown as string,
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: card é puramente visual — `onMouseMove` é usado apenas para o efeito de máscara, sem interatividade semântica.
    <div
      onMouseMove={onMouseMove}
      role='presentation'
      className='overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 '>
      <div className='pointer-events-none'>
        <div className='absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]' />
        <MotionDiv
          className='absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 '
          style={style}
        />
        <MotionDiv
          className='absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100'
          style={style}
        />
      </div>

      {children}
    </div>
  )
}
