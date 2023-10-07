import './globals.css'
import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import clsx from 'clsx'

import { createClient } from '@/prismicio'


const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
 const client = createClient();
 const page= await client.getSingle("settings")
 
  return {
    title: page.data.site_title || "Prismic-Fallback",
    description: page.data.meta_description || "Page description fallback",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body >{children}</body>
    </html>
  )
}
