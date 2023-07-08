'use client'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { Title } from '@/components/Title'

export default function Home() {
  return (
    <main className='flex min-h-screen p-24 flex-wrap justify-center'>
      <div className='flex basis-[100%] justify-center items-center'>
        <Title className='text-2xl'>
          Postcast Mundial
        </Title>
      </div>
      <div className='flex flex-col max-w-[500px] gap-4'>
        <Link href='postcast/1'>
          <Card id={1} />
        </Link>
        <Link href='postcast/2'>
          <Card id={2} />
        </Link>
      </div>
    </main>
  )
}
