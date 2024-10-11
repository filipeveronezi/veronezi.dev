import { Squircle } from '@squircle-js/react'
import Link from 'next/link'

interface LayoutProps {
  children?: React.ReactNode
}

export default function WritingsLayout({ children }: LayoutProps) {
  return (
    <main className="size-full min-h-screen bg-zinc-100 px-4">
      <div className="mx-auto flex h-full min-h-screen max-w-[375px] flex-col gap-4 border-x bg-zinc-100 px-4 pb-20 pt-10">
        <Squircle
          cornerRadius={12}
          cornerSmoothing={1}
          className="group mb-8 flex size-12 rotate-6 items-center justify-center rounded-xl border-4 border-white bg-zinc-50 transition-all hover:-rotate-6 hover:bg-purple-50"
        >
          <Link className="flex size-full items-center justify-center" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5 text-zinc-400 transition-colors group-hover:text-purple-400"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </Squircle>
        {children}
      </div>
    </main>
  )
}
