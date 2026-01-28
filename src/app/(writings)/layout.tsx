import { HomeLink } from '@/components/home-link'

interface LayoutProps {
  children?: React.ReactNode
}

export default function WritingsLayout({ children }: LayoutProps) {
  return (
    <main className="size-full min-h-screen bg-zinc-100 px-4">
      <div className="mx-auto flex h-full min-h-screen max-w-[375px] flex-col gap-4 border-x bg-zinc-100 px-4 pb-20 pt-10">
        <HomeLink />
        {children}
      </div>
    </main>
  )
}
