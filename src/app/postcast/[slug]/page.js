import Link from 'next/link'
import Image from 'next/image'
import { Title } from '@/components/Title'

export default function Postcast({ params }) {
  return (
    <main className="flex min-h-screen p-24 flex-col items-center">
      <Link href='/'>BACK</Link>
      <Title className='text-3xl' style={{ viewTransitionName: `postcast-title-${params.slug}` }}>Con los más sueltos Jowell y Randy. Las Historias que nunca se contaron.</Title>
      <Image style={{ viewTransitionName: `postcast-poster-${params.slug}` }} src='/thumbnail.jpg' alt="thumbnail" width="200" height="300" className="flex-none rounded-md bg-slate-100" />
    </main>
  )
}
