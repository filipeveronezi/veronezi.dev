import Link from 'next/link'
import { Logo } from './Logo'
import { NavigationItem } from './NavigationItem'

export function Navigation() {
  return (
    <div className="mx-auto mb-5 flex h-full max-w-screen-sm flex-col px-6 lg:w-full lg:items-end lg:justify-self-end lg:px-0">
      <div className="flex max-h-max max-w-max flex-col gap-4 lg:sticky lg:top-20">
        <Link className="group max-w-max brightness-125 grayscale transition-all hover:grayscale-0" href="/">
          <Logo />
        </Link>
        <nav className="flex gap-2 text-lg lg:flex-col">
          <NavigationItem to="/">
            <span>Home</span>
          </NavigationItem>
          <NavigationItem to="/blog">
            <span>Blog</span>
          </NavigationItem>
        </nav>
      </div>
    </div>
  )
}
