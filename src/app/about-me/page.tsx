import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'F. Veronezi — About Me',
  description: 'Design Engineer. Building for the web.'
}

export default function AboutMe() {
  return (
    <main className="size-full min-h-screen bg-zinc-100 px-4">
      <div className="mx-auto flex h-full min-h-screen max-w-[375px] flex-col gap-4 border-x bg-zinc-100 px-4 pb-20 pt-10">
        <Link
          className="group flex size-12 rotate-6 items-center justify-center rounded-xl border-4 border-white bg-zinc-50 transition-all hover:-rotate-6 hover:bg-purple-50"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5 text-zinc-400 transition-colors group-hover:text-purple-400"
          >
            <path
              fillRule="evenodd"
              d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <h1 className="pt-8 font-serif text-4xl">About Me</h1>
        <section className="space-y-2 text-sm text-zinc-500 [&>p>em]:not-italic [&>p>em]:text-zinc-950">
          <p>
            Today, I&apos;m a <em>self-taught builder</em>.
          </p>
          <p>
            But I once was an <em>average developer</em>.
          </p>
          <p>What does this mean?</p>
          <p>
            For me, this was the <em>flip switch</em> of my carreer.
          </p>
          <p>I&apos;ll explain.</p>
          <p>
            I&apos;ve studied programming for many years (started when I was 15)
            and I was a <em>great student</em> that apparently would become a{' '}
            <em>great developer</em>. But even though my grades were good, I
            always felt something was <em>off</em>. I was trying hard to be a
            developer by making <span className="line-through">nonsense</span>{' '}
            software with deep abstractions, complex architechtures and logic.
          </p>
          <p>
            What I didn&apos;t realize at that time is I just wasn&apos;t{' '}
            <em>building</em> something. Something that was{' '}
            <em>truly useful</em>.
          </p>
          <p>
            A developer doesn&apos;t exist to be a logic nerd that creates
            beautiful code only. A developer should actually be a{' '}
            <em>builder</em>. A builder of software that solves{' '}
            <em>real life problems</em> and helps people in the most diversified
            ways.
          </p>
          <p>
            My <em>framework</em> of choice doesn&apos;t matter that much. My{' '}
            <em>language</em> of choice matters a little more. My code quality
            has to be good. But it will never be perfect. So what matters the
            most is…
          </p>
          <br />
          <p className="-rotate-1 rounded-2xl border-4 border-white bg-zinc-50 p-4 text-base transition-all hover:rotate-1 hover:bg-cyan-50 hover:text-cyan-500">
            &quot;What problems am I solving by building software?&quot;
          </p>
          <br />
          <p>
            I&apos;m driven by the <em>challenge</em> of creating{' '}
            <em>useful</em> and <em>enjoyable</em> software.
          </p>
        </section>
      </div>
    </main>
  )
}
