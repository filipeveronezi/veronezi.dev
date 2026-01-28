import { cn } from '@/lib/utils'
import Link from 'next/link'

export function HomeLink({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <div
      className={cn(
        `
          group mb-8 flex size-12 rotate-6 items-center justify-center rounded-full border-4 border-white bg-zinc-50
          transition-all corner-squircle

          hover:-rotate-6 hover:bg-purple-50
        `,
        dark &&
          `
            border-none bg-zinc-900

            hover:bg-zinc-700
          `,
        className
      )}
    >
      <Link className="flex size-full items-center justify-center" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={cn(
            `
              size-5 text-zinc-400 transition-colors

              group-hover:text-purple-400
            `,
            dark &&
              `
                text-zinc-50

                group-hover:text-white
              `
          )}
        >
          <path
            fillRule="evenodd"
            d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  )
}
