import Link from 'next/link'

export function Heading() {
  return (
    <div className="flex h-max w-max animate-fade-up flex-col justify-center gap-0">
      <h1 className="text-4xl font-bold">Filipe Veronezi</h1>
      <h2 className="relative text-lg text-violet-100/50">
        Front-end Developer{' '}
        <Link
          href="https://thepilgrim.com.br"
          target="_blank"
          rel="noreferrer noopener"
          className="hover: peer text-violet-100/50 underline decoration-violet-100/50 underline-offset-2 transition-colors hover:underline lg:text-violet-100/50 lg:no-underline lg:decoration-orange-500/50 lg:hover:text-orange-400">
          @Pilgrim
        </Link>
        <span className="absolute -right-6 -translate-x-1 text-violet-500 opacity-0 transition-all peer-hover:translate-x-0 peer-hover:opacity-100">
          🧡
        </span>
      </h2>
    </div>
  )
}
