import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  to: string
  children: React.ReactElement
}

export function NavigationItem({ to, children }: Props) {
  const router = useRouter()

  return (
    <Link
      href={to}
      className={`w-max rounded-lg bg-zinc-700 bg-opacity-0 px-3 py-1 font-medium transition-all hover:bg-opacity-20 ${
        router.asPath === to
          ? 'bg-opacity-100 text-violet-100/90 hover:bg-opacity-80'
          : 'text-violet-100/50 hover:text-violet-100/90'
      }`}>
      {children}
    </Link>
  )
}
