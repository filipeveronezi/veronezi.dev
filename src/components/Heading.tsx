import Link from 'next/link'

export function Heading() {
  return (
    <div className="flex h-max w-max animate-fade-up flex-col justify-center gap-0">
      <h1 className="text-4xl font-bold">Filipe Veronezi</h1>
      <h2 className="relative flex gap-2 text-lg text-violet-100/50">Front-end Developer</h2>
      <div className="flex items-center gap-2">
        <Link
          href="https://www.intranetmall.com.br/br/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-violet-100/50 underline decoration-violet-100/50 underline-offset-2 transition-colors hover:underline lg:text-violet-100/50 lg:no-underline lg:decoration-blue-500/50 lg:hover:text-blue-400">
          @IntranetMall
        </Link>
        <Link
          href="https://thepilgrim.com.br"
          target="_blank"
          rel="noreferrer noopener"
          className="text-violet-100/50 underline decoration-violet-100/50 underline-offset-2 transition-colors hover:underline lg:text-violet-100/50 lg:no-underline lg:decoration-orange-500/50 lg:hover:text-orange-400">
          @Pilgrim
        </Link>
      </div>
    </div>
  )
}
