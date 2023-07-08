'use client'

import './globals.css'
import { useEffect } from 'react'
import { Inter } from 'next/font/google'

import { startViewTransition } from '@/utils/view-transition'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Postcast Mundial',
//   description: 'Postcast Mundial',
// }


export default function RootLayout({ children }) {
  useEffect(() => {
    startViewTransition()
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
