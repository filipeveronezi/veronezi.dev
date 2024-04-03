import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'F. Veronezi — About Me',
  description: 'Design Engineer. Building for the web.'
}

export default function AboutMe() {
  return (
    <main className="h-screen w-full bg-zinc-50 px-4">
      <div className="mx-auto flex h-full max-w-[375px] flex-col gap-4 border-x px-4 py-10">
        <Link className="w-max" href="/">
          <Image
            className="size-10"
            src="/logo.svg"
            alt="FV Logo"
            width={50}
            height={50}
          ></Image>
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
          <p>
            &quot;What <em>problems</em> am I <em>solving</em> by{' '}
            <em>building software</em>?&quot;
          </p>
          <p>
            I&apos;m driven by the <em>challenge</em> of creating{' '}
            <em>useful</em> and <em>enjoyable</em> software.
          </p>
        </section>
      </div>
    </main>
  )
}
