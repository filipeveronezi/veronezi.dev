import { ArrowLongRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { PilgrimLogo } from './PilgrimLogo'
import { TypescriptLogo } from './TypescriptLogo'
import { UnicampLogo } from './UnicampLogo'

export function Cards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <Link
        href="https://thepilgrim.com.br"
        target="_blank"
        rel="noreferrer noopener"
        className="group relative w-full animate-fade-up overflow-hidden rounded-lg bg-opacity-40 bg-gradient-pattern-4 bg-right-bottom bg-no-repeat px-10 py-6 saturate-50 transition-all animation-delay-200 lg:saturate-0 lg:hover:scale-[.97] lg:hover:saturate-50">
        <div className="flex h-full flex-col items-center justify-center gap-4 transition-all">
          <ArrowUpRightIcon className="absolute top-5 right-5 h-5 w-5 -translate-x-3 translate-y-3 text-white opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
          <PilgrimLogo />
          <p className="z-10 text-center font-medium text-white">
            I work for <strong className="font-bold underline-offset-2 group-hover:underline">Pilgrim</strong>, where
            we&apos;re building a content based platform to serve the church through technology.
          </p>
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-orange-900 bg-opacity-60 transition-all group-hover:bg-opacity-0" />
      </Link>
      <div className="group row-span-2 flex h-full w-full animate-fade-up flex-col justify-center gap-4 rounded-lg bg-opacity-40 bg-gradient-pattern-3 bg-top bg-no-repeat py-20 px-10 font-medium saturate-50 transition-all animation-delay-300 lg:saturate-0 lg:hover:scale-[.97] lg:hover:saturate-50">
        <TypescriptLogo />
        <div className="flex cursor-default flex-col gap-2">
          <p>
            A programmer&apos;s greatest tool is their{' '}
            <strong className="font-bold underline-offset-2 group-hover:underline">versatility</strong>.
          </p>
          <p>
            I love the fact that every day I get the chance to{' '}
            <strong className="font-bold underline-offset-2 group-hover:underline">learn something new</strong>.
            <span className="opacity-0 transition-opacity group-hover:opacity-100"> 💡</span>
          </p>
          <p>
            <strong className="font-bold underline-offset-2 group-hover:underline">Typescript</strong> is my current
            choice to solve real life problems efficiently.
          </p>
        </div>
      </div>
      <Link
        href="/blog"
        className="group relative w-full animate-fade-up rounded-lg bg-opacity-40 bg-gradient-pattern-2 bg-right-top bg-no-repeat py-6 px-10 saturate-50 transition-all animation-delay-400 lg:saturate-0 lg:hover:scale-[.97] lg:hover:saturate-50">
        <ArrowUpRightIcon className="absolute top-5 right-5 h-5 w-5 -translate-x-3 translate-y-3 text-white opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
        <div className="flex h-full flex-col items-center justify-center gap-2">
          <Image src="/pencil.png" width={75} height={75} alt="Pencil 3D icon" />
          <p className="text-center font-medium text-white">
            I started to share a bit of my journey on my{' '}
            <strong className="font-bold underline-offset-2 group-hover:underline">Blog</strong>.
            <span className="opacity-0 transition-opacity group-hover:opacity-100"> 🎉</span>
          </p>
        </div>
      </Link>
      <Link
        href="https://github.com/filipeveronezi"
        target="_blank"
        rel="noreferrer noopener"
        className="group relative row-span-2 flex w-full animate-fade-up flex-col items-end justify-center gap-2 overflow-hidden rounded-lg bg-opacity-40 bg-gradient-pattern-5 bg-top bg-no-repeat py-20 px-10 saturate-50 transition-all animation-delay-500 lg:saturate-0 lg:hover:scale-[.97] lg:hover:saturate-50">
        <Image src="/rocket.png" width={100} height={100} alt="Rocket 3D icon" />
        <p className="text-right text-2xl font-bold text-white">
          Check out some <strong className="font-bold underline-offset-2 group-hover:underline">projects</strong>{' '}
          I&apos;ve been working on
        </p>
      </Link>
      <Link
        href="mailto:filipeseidi@hotmail.com"
        target="_blank"
        rel="noreferrer noopener"
        className="group flex w-full animate-fade-up items-center justify-between rounded-lg bg-opacity-40 bg-gradient-pattern-6 bg-left-top bg-no-repeat py-6 px-10 saturate-50 transition-all animation-delay-600 lg:saturate-0 lg:hover:scale-[.97] lg:hover:saturate-50">
        <p className="flex items-center justify-center font-bold lg:text-lg">
          Let&apos;s work together?<span className="opacity-0 transition-opacity group-hover:opacity-100">👀</span>
        </p>
        <ArrowLongRightIcon className="h-6 w-6 text-white transition-transform group-hover:translate-x-2" />
      </Link>
      <div className="group w-full animate-fade-up rounded-lg bg-opacity-40 bg-gradient-pattern-7 bg-bottom bg-no-repeat py-6 px-10 saturate-50 transition-all animation-delay-700 lg:saturate-0 lg:hover:scale-[.97] lg:hover:saturate-50">
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <UnicampLogo />
          <div className="flex flex-col gap-2">
            <p className="cursor-default text-center font-medium text-white">
              In 2021 I graduated as a{' '}
              <strong className="font-bold underline-offset-2 group-hover:underline">software engineer</strong> for
              UNICAMP.
            </p>
            <p className="cursor-default text-center text-sm italic text-white">
              One of the 5 best public universities of Latin America.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
