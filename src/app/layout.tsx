import clsx from 'clsx'
import type { Metadata } from 'next'
import { geist, libreCaslonCondensed } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'F. Veronezi — Home',
  description: 'Design Engineer. Building for the web.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          geist.variable,
          libreCaslonCondensed.variable,
          'font-sans antialiased'
        )}
      >
        {children}
      </body>
    </html>
  )
}
