import { Footer } from '@/components/Footer'
import { GradientPattern } from '@/components/GradientPattern'
import { Navigation } from '@/components/Navigation'
import { NoiseTexture } from '@/components/NoiseTexture'
import Head from 'next/head'

interface Props {
  children: React.ReactElement
}

export function DefaultLayout({ children }: Props) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <NoiseTexture />
        <GradientPattern />
        <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-neutral-900 pt-28 lg:grid lg:grid-cols-[1fr,640px,1fr] lg:grid-rows-[1fr,300px] lg:gap-6 lg:pt-44">
          <Navigation />
          <div className="h-full">{children}</div>
          <Footer />
        </div>
      </>
    </>
  )
}
