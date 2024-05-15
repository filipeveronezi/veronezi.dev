import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'F. Veronezi — Craft',
  description: 'Design Engineer. Building for the web.'
}

export default function Craft() {
  return (
    <main className="size-full min-h-screen bg-zinc-100 px-4">
      <div className="mx-auto flex h-full min-h-screen flex-col items-center gap-4 bg-zinc-100 py-4 lg:px-4 lg:py-8">
        <Link
          className="group fixed top-5 flex size-12 rotate-6 items-center justify-center rounded-xl border-4 border-white bg-zinc-50 shadow-xl transition-all hover:-rotate-6 hover:bg-purple-50"
          href="/"
        >
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
        <Image
          className="rounded-sm border"
          src="/craft-1.png"
          alt="Craft 1"
          width={1600}
          height={900}
          quality={100}
          priority
        />
        <Image
          className="rounded-sm border"
          src="/craft-2.png"
          alt="Craft 2"
          width={1600}
          height={900}
          quality={100}
        />
        <Image
          className="rounded-sm border"
          src="/craft-3.png"
          alt="Craft 3"
          width={1600}
          height={900}
          quality={100}
        />
        <Image
          className="rounded-sm border"
          src="/craft-4.png"
          alt="Craft 4"
          width={1600}
          height={900}
          quality={100}
        />
        <Image
          className="rounded-sm border"
          src="/craft-5.png"
          alt="Craft 5"
          width={1600}
          height={900}
          quality={100}
        />
        <Image
          className="rounded-sm border"
          src="/craft-6.png"
          alt="Craft 6"
          width={1600}
          height={900}
          quality={100}
        />
        <Image
          className="rounded-sm border"
          src="/craft-7.png"
          alt="Craft 7"
          width={1600}
          height={900}
          quality={100}
        />
      </div>
    </main>
  )
}
