'use client'

import { ArrowLeft, Eye, Github } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState, type ReactNode } from 'react'

export function Extructure({ children }: { children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)
    const [isIntersecting, setIntersecting] = useState(true)

    useEffect(() => {
        if (!ref.current) return
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        )

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div className='bg-zinc-50 min-h-screen w-full flex flex-col'>
            <div
                ref={ref}
                className='min-h-screen bg-gradient-to-tl from-black via-zinc-900 to-black flex flex-col'>
                <div
                    className={`inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
                        isIntersecting
                            ? 'bg-zinc-900/0 border-transparent'
                            : 'bg-white/10 border-zinc-200 lg:border-transparent'
                    }`}>
                    <div className='container flex flex-row-reverse items-center justify-between p-6 mx-auto '>
                        <div className='flex justify-between gap-8'>
                            <span
                                title='View counter for this page'
                                className={`duration-200 hover:font-medium flex items-center gap-1 ${
                                    isIntersecting
                                        ? 'text-zinc-400 hover:text-zinc-100'
                                        : 'text-zinc-600 hover:text-zinc-900'
                                } `}>
                                <Eye className='w-5 h-5' /> views
                            </span>
                            <Link
                                target='_blank'
                                href='https://github.com/GabrielBorges2000'>
                                <Github
                                    className={`w-6 h-6 duration-200 hover:font-medium ${
                                        isIntersecting
                                            ? 'text-zinc-400 hover:text-zinc-100'
                                            : 'text-zinc-600 hover:text-zinc-900'
                                    } `}
                                />
                            </Link>
                        </div>

                        <Link
                            href='/projects'
                            className={`duration-200 hover:font-medium ${
                                isIntersecting
                                    ? 'text-zinc-400 hover:text-zinc-100'
                                    : 'text-zinc-600 hover:text-zinc-900'
                            } `}>
                            <ArrowLeft className='w-6 h-6 ' />
                        </Link>
                    </div>
                </div>
                <div className='mx-auto  overflow-hidden py-24 sm:py-32 flex flex-col justify-center items-center'>
                    {children}
                </div>
            </div>
        </div>
    )
}
