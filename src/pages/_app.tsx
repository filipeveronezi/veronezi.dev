import { DefaultLayout } from '@/layout/Default'
import '@/styles/globals.css'
import { Space_Grotesk } from '@next/font/google'
import type { AppProps } from 'next/app'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --space-grotesk-font: ${spaceGrotesk.style.fontFamily};
          }
        `}
      </style>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}
