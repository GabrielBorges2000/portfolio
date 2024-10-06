'use client'

import * as userInfo from '@/util/user-information'
import React from 'react'
import { Card } from './card'
import { CardContent, CardHeader, CardTitle } from './ui/card'

export function CousesList() {
    return (
        <section className='space-y-4'>
            <h2 className='z-10 text-lg text-transparent cursor-default text-edge-outline font-display sm:text-2xl md:text-3xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow tracking-wider'>
                Cursos e Certificações
            </h2>
            <div className='hidden w-full h-px md:block bg-zinc-800' />
            <div className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2'>
                {userInfo.courses.map((couse) => (
                    <Card key={couse.name}>
                        <CardHeader className='flex flex-row items-center space-x-4 pb-2'>
                            {couse.icon}
                            <div>
                                <CardTitle className='text-2xl text-zinc-100 font-bold'>
                                    {couse.name}
                                </CardTitle>
                                <p className='text-sm text-muted-foreground'>
                                    {couse.institution}
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className='relative w-full h-full p-2 md:p-8'>
                            <p className='leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                                {couse.describe ?? ''}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
