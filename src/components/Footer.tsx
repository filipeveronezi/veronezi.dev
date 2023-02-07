import Link from 'next/link'
import { ExternalLinks } from './ExternalLinks'

export function Footer() {
  return (
    <footer className="col-start-2 row-start-2 mx-auto flex w-full max-w-screen-sm flex-col items-start justify-end gap-12 py-16 px-6 lg:px-0">
      <ExternalLinks />

      <p className="font-bold lg:text-zinc-400 lg:saturate-50 lg:transition-all lg:hover:text-violet-100 lg:hover:saturate-150">
        ⚡ Built with{' '}
        <Link
          className="underline-offset-2 hover:underline"
          href="https://nextjs.org"
          target="_blank"
          rel="noreferrer noopener">
          Next.js
        </Link>
        ,{' '}
        <Link
          className="underline-offset-2 hover:underline"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer noopener">
          Tailwind
        </Link>{' '}
        and{' '}
        <Link
          className="underline-offset-2 hover:underline"
          href="https://outstatic.com"
          target="_blank"
          rel="noreferrer noopener">
          Outstatic
        </Link>
      </p>
    </footer>
  )
}
