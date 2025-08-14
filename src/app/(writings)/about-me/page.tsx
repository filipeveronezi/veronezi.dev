import { Squircle } from '@squircle-js/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'F. Veronezi — About Me',
  description: 'Design Engineer. Building for the web.'
}

export default function AboutMe() {
  return (
    <>
      <h1 className="font-serif text-4xl">About Me</h1>
      <section className="flex flex-col gap-2 text-sm text-zinc-500 [&>p>em]:not-italic [&>p>em]:text-zinc-950">
        <p>
          Today, I&apos;m a <em>self-taught builder</em>.
        </p>
        <p>
          But I once was an <em>average developer</em>.
        </p>
        <p>What does this mean?</p>
        <p>
          For me, this was the <em>turning point</em> of my carreer.
        </p>
        <p>I&apos;ll explain.</p>
        <p>
          I&apos;ve studied programming for many years (I started when I was 15)
          and I was a <em>great student</em> who apparently would become a{' '}
          <em>great developer</em>. But even though my grades were good, I
          always felt something was <em>off</em>. I was trying hard to be a
          developer by making <span className="line-through">nonsensical</span>{' '}
          software with deep abstractions, complex architechtures, and logic.
        </p>
        <p>
          What I didn&apos;t realize at that time was that I just wasn&apos;t{' '}
          <em>building</em> something. Something that was <em>truly useful</em>.
        </p>
        <p>
          A developer doesn&apos;t exist to be a logic nerd who creates
          beautiful code only. A developer should actually be a <em>builder</em>
          . A builder of software that solves <em>real-life problems</em> and
          helps people in the most diversified ways.
        </p>
        <p>
          My <em>framework/language/stack</em> of choice doesn&apos;t matter
          that much. It&apos;s just a tool.
        </p>
        <p>
          My code quality has to be good, though. But it will never be perfect.
          So what matters the most then?
        </p>
        <Squircle
          cornerRadius={20}
          cornerSmoothing={1}
          className="my-2 h-max w-[120%] -rotate-1 self-center text-balance border-4 border-white bg-zinc-50 px-4 py-2 text-center text-base font-medium transition-all hover:rotate-1 hover:bg-cyan-50 hover:text-cyan-500"
        >
          &quot;What problems am I solving by building software?&quot;
        </Squircle>
        <p>
          I&apos;m driven by the <em>challenge</em> of creating <em>useful</em>{' '}
          and <em>enjoyable</em> software.
        </p>
      </section>
    </>
  )
}
