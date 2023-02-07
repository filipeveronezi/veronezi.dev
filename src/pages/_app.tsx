import '@/styles/globals.css'
import { Space_Grotesk } from '@next/font/google'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <style jsx global>
        {`
          :root {
            --space-grotesk-font: ${spaceGrotesk.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
