import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Italiana, Allura } from 'next/font/google'
import Script from 'next/script'
import Providers from './providers'

export const roboto = Roboto(
  {
    subsets: ['latin'], 
    weight: ["300", "400", "700"] ,
    variable: "--font-roboto"
  })

export const italiana = Italiana({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--font-italiana"
})

export const allura = Allura({
  weight: "400",
  subsets: ['latin'],
  variable: "--font-allura"
})

export const metadata: Metadata = {
  title: 'Tavola Redonda',
  description: 'TBD',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${italiana.variable} ${allura.variable} font-sans`}>
          <Providers>
            {children}
          </Providers>
      </body>
      <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" />
    </html>
  )
}
