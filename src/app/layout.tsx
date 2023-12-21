import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import 'simplebar-react/dist/simplebar.min.css';
import { Toaster } from 'react-hot-toast';
import { useMemo } from 'react';

// const roboto = Roboto({ subsets: ['cyrillic'] })
const roboto = Roboto({ subsets: ['cyrillic'], weight: '400' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <head>
        <title>Japa Prize</title>
      </head>
      <body className={roboto.className}>{children}
      <div id="myportal" />
      <div id="modals" />
      <Toaster />

      </body>
    </html>
  )
}