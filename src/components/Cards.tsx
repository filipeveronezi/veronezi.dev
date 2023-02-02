import Link from 'next/link'
import { PilgrimLogo } from './PilgrimLogo'

export function Cards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Link
        href="https://thepilgrim.com.br"
        target="_blank"
        rel="noreferrer noopener"
        className="w-full rounded-lg bg-opacity-40 bg-gradient-pattern-4 bg-right-bottom bg-no-repeat px-10 py-6 saturate-0 transition-all hover:saturate-50">
        <div className="flex flex-col items-center justify-center gap-4 transition-all">
          <PilgrimLogo />
          <p className="text-center font-medium text-white">
            I work for <strong className="font-bold underline">Pilgrim</strong>, where we&apos;re building a content
            based platform to serve the church through technology.
          </p>
        </div>
      </Link>
      <div className="row-span-2 w-full rounded-lg bg-opacity-40 bg-gradient-pattern-3 bg-top bg-no-repeat py-20 px-10 saturate-0 transition-all hover:saturate-50">
        <p className="text-xl font-bold text-white">Filipe Pilgrim</p>
      </div>
      <div className="w-full rounded-lg bg-opacity-40 bg-gradient-pattern-2 bg-right-top bg-no-repeat py-20 px-10 saturate-0 transition-all hover:saturate-50">
        <p className="text-xl font-bold text-white">Filipe Pilgrim</p>
      </div>
      <div className="row-span-2 w-full rounded-lg bg-opacity-40 bg-gradient-pattern-5 bg-top bg-no-repeat py-20 px-10 saturate-0 transition-all hover:saturate-50">
        <p className="text-xl font-bold text-white">Filipe Pilgrim</p>
      </div>
      <div className="w-full rounded-lg bg-opacity-40 bg-gradient-pattern-6 bg-left-top bg-no-repeat py-20 px-10 saturate-0 transition-all hover:saturate-50">
        <p className="text-xl font-bold text-white">Filipe Pilgrim</p>
      </div>
      <div className="w-full rounded-lg bg-opacity-40 bg-gradient-pattern-7 bg-bottom bg-no-repeat py-20 px-10 saturate-0 transition-all hover:saturate-50">
        <p className="text-xl font-bold text-white">Filipe Pilgrim</p>
      </div>
    </div>
  )
}
