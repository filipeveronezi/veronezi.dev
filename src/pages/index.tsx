import { Cards } from '@/components/Cards'
import { Heading } from '@/components/Heading'
import { Introduction } from '@/components/Introduction'
import { DefaultLayout } from '@/layout/Default'
import Head from 'next/head'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>F. Veronezi — Home</title>
        <meta name="title" content="Filipe Veronezi — Front-end Developer" />
        <meta name="description" content="I'm a web developer from Brazil and this is my place on the web." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.veronezi.dev/" />
        <meta property="og:title" content="Filipe Veronezi — Front-end Developer" />
        <meta property="og:description" content="I'm a web developer from Brazil and this is my place on the web." />
        <meta property="og:image" itemProp="image" content="https://www.veronezi.dev/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.veronezi.dev/" />
        <meta property="twitter:title" content="Filipe Veronezi — Front-end Developer" />
        <meta
          property="twitter:description"
          content="I'm a web developer from Brazil and this is my place on the web."
        />
        <meta property="twitter:image" content="https://www.veronezi.dev/thumbnail.png" />
      </Head>
      <main className="mx-auto flex h-full w-full max-w-screen-sm flex-col gap-5 px-6 lg:px-0">
        <Heading />
        <Introduction />
        <Cards />
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
