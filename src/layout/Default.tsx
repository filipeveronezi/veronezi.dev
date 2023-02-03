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
        <meta name="title" content="Filipe Veronezi — Front-end Developer" />
        <meta name="description" content="I'm a web developer from Brazil and this is my place on the web." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.veronezi.dev/" />
        <meta property="og:title" content="Filipe Veronezi — Front-end Developer" />
        <meta property="og:description" content="I'm a web developer from Brazil and this is my place on the web." />
        <meta property="og:image" content="/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.veronezi.dev/" />
        <meta property="twitter:title" content="Filipe Veronezi — Front-end Developer" />
        <meta
          property="twitter:description"
          content="I'm a web developer from Brazil and this is my place on the web."
        />
        <meta property="twitter:image" content="/thumbnail.png"></meta>
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
