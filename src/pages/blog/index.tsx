import { DefaultLayout } from '@/layout/Default'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Head from 'next/head'
import Link from 'next/link'
import { Document } from 'outstatic'
import { getDocuments } from 'outstatic/server'
import { NextPageWithLayout } from '../_app'

export const getStaticProps = async () => {
  const allPosts = getDocuments('blog-posts', ['title', 'publishedAt', 'slug', 'coverImage', 'description', 'author'])

  return {
    props: { allPosts }
  }
}

interface Props {
  allPosts: Document[]
}

const Blog: NextPageWithLayout<Props> = ({ allPosts }: Props) => {
  return (
    <>
      <Head>
        <title>F. Veronezi — Blog</title>
        <meta name="title" content="Filipe Veronezi — Blog" />
        <meta name="description" content="Sharing a bit of my journey as a web developer." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.veronezi.dev/blog" />
        <meta property="og:title" content="Filipe Veronezi — Blog" />
        <meta property="og:description" content="Sharing a bit of my journey as a web developer." />
        <meta property="og:image" itemProp="image" content="https://www.veronezi.dev/thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.veronezi.dev/blog" />
        <meta property="twitter:title" content="Filipe Veronezi — Blog" />
        <meta property="twitter:description" content="Sharing a bit of my journey as a web developer." />
        <meta property="twitter:image" content="https://www.veronezi.dev/thumbnail.png" />
      </Head>
      <main className="mx-auto flex w-full max-w-screen-sm flex-col gap-5 px-6 lg:px-0">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-lg">
            ✨ This blog exists to share my journey as a web developer. Sometimes{' '}
            <strong className="font-bold">technically</strong>, sometimes{' '}
            <strong className="font-bold">thoughtfully</strong>. Most of the times,{' '}
            <strong className="font-bold">both</strong>.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">Posts</h2>
          {allPosts.map((post) => {
            return (
              <Link
                className="text-lg text-violet-100 decoration-violet-300 underline-offset-2 hover:text-white hover:underline"
                href={`/blog/${post.slug}`}
                key={post.slug}>
                <span className="flex items-center gap-1">
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  <span>{post.title}</span>
                </span>
              </Link>
            )
          })}
        </div>
      </main>
    </>
  )
}

Blog.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Blog
