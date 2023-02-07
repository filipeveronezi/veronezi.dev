import { DefaultLayout } from '@/layout/Default'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Document } from 'outstatic'
import { getDocumentBySlug, getDocumentPaths } from 'outstatic/server'
import { ParsedUrlQuery } from 'querystring'
import ReactMarkdown from 'react-markdown'
import { NextPageWithLayout } from '../_app'

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params

  const post = getDocumentBySlug('blog-posts', slug, [
    'title',
    'publishedAt',
    'slug',
    'author',
    'content',
    'coverImage'
  ])

  return {
    props: {
      post
    }
  }
}

export const getStaticPaths = () => {
  return {
    paths: getDocumentPaths('blog-posts'),
    fallback: false
  }
}

interface Props {
  post: Document
}

const BlogPost: NextPageWithLayout<Props> = ({ post }: Props) => {
  return (
    <>
      <Head>
        <title>F. Veronezi — {post.title}</title>
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
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <section className="flex flex-col gap-5 text-xl">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </section>
      </main>
    </>
  )
}

BlogPost.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default BlogPost
