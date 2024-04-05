import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'F. Veronezi — Tailwind Application',
  description: 'Design Engineer. Building for the web.'
}

export default function TailwindApplication() {
  return (
    <>
      <h1 className="group relative font-serif text-4xl">
        <div className="absolute -left-14 -top-2 hidden translate-x-10 rotate-12 rounded-xl border-4 border-white bg-zinc-50 p-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:-rotate-12 group-hover:opacity-100 lg:block">
          <svg
            className="size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 54 33"
          >
            <g clipPath="url(#prefix__clip0)">
              <path
                fill="#38bdf8"
                fillRule="evenodd"
                d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                clipRule="evenodd"
              />
            </g>
            <defs>
              <clipPath id="prefix__clip0">
                <path fill="#fff" d="M0 0h54v32.4H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span className="transition-colors group-hover:text-tailwind">
          Tailwind
        </span>{' '}
        application — Design Engineer
      </h1>
      <section className="space-y-2 text-sm text-zinc-500 [&>p>em]:not-italic [&>p>em]:text-zinc-950">
        <h2 className="pt-4 font-serif text-lg text-zinc-900">Introduction</h2>
        <p>Hello, Tailwind Team.</p>
        <p>
          I&apos;m Filipe, a 23-year-old, happily married, Design Engineer based
          in Sao Paulo, Brazil.
        </p>
        <div className="group grid w-full grid-cols-3 place-items-center">
          <Image
            className="col-span-2 rotate-2 justify-self-start rounded-xl border-4 border-white grayscale transition-all group-hover:-rotate-1 group-hover:grayscale-0"
            src="/filipe-valentina-1.jpg"
            alt="Filipe and his wife close look"
            width={200}
            height={200}
          />
          <Image
            className="-rotate-1 rounded-xl border-4 border-white grayscale transition-all group-hover:rotate-1 group-hover:grayscale-0"
            src="/filipe-valentina-2.jpg"
            alt="Filipe and his wife wider look"
            width={200}
            height={200}
          />
        </div>
        <p>
          I&apos;m reaching out to you for the Design Engineer position, which I
          couldn&apos;t be more thrilled about.
        </p>
        <p>Here&apos;s why I&apos;m the perfect fit for this role:</p>
        <h2 className="pt-4 font-serif text-lg text-zinc-900">
          1. Successful <span className="line-through">Projects</span> Products
        </h2>
        <p>
          a. I created an open-source Bible Reader in one weekend. It&apos;s
          called{' '}
          <Link
            className="underline decoration-1 underline-offset-4 transition-colors hover:text-zinc-900"
            href="https://www.holybible.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Holy Bible
          </Link>
          . Initially, it served a simple purpose of personally exploring
          Next.js version 13, but it became a useful product that I use
          frequently.
        </p>
        <Link
          href="https://www.holybible.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="my-4 aspect-[16_/_8] w-full rotate-1 rounded-xl border-4 border-white object-cover object-top  grayscale transition-all hover:-rotate-1 hover:grayscale-0"
            src="https://www.holybible.dev/thumbnail.png"
            alt="Holy Bible homepage"
            width={200}
            height={200}
          />
        </Link>
        <p>
          b. I&apos;ve built the website of the local church I serve as a
          christian:{' '}
          <Link
            className="underline decoration-1 underline-offset-4 transition-colors hover:text-zinc-900"
            href="https://www.batistatrindade.org.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Igreja Batista da Trindade
          </Link>
          .
        </p>
        <Link
          href="https://www.batistatrindade.org.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="my-4 aspect-[16_/_8] w-full -rotate-1 rounded-xl border-4 border-white object-cover object-top  grayscale transition-all hover:rotate-1 hover:grayscale-0"
            src="https://www.batistatrindade.org.br/opengraph-image.png"
            alt="Igreja Batista da Trindade homepage"
            width={200}
            height={200}
          />
        </Link>
        <p>
          c. Most recently, at Pilgrim, I&apos;ve built an internal AI assisted
          tool for book translation, handling everything from UI/UX design to
          code implementation.
        </p>
        <Link
          href="/ai-translation.gif"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="mb-2 mt-4 aspect-[16_/_5] w-full rotate-1 rounded-xl border-4 border-white object-cover object-top  grayscale transition-all hover:-rotate-1 hover:grayscale-0"
            src="/ai-translation.png"
            alt="AI Translation tool"
            width={200}
            height={200}
          />
        </Link>
        <span className="block w-full text-center text-xs">
          (Click on the image to view a quick demo of the UI.)
        </span>
        <h2 className="pt-4 font-serif text-lg text-zinc-900">
          2. Code is my favorite design tool
        </h2>
        <p>
          I see code as my favorite design tool and believe the Design Engineer
          role embodies the future of product development. As Steve Jobs once
          said,
        </p>
        <blockquote className="-rotate-1 rounded-xl border-4 border-white bg-zinc-50 p-4 italic transition-all hover:rotate-1 hover:bg-violet-50 hover:text-violet-600">
          &quot;Design is not just what it looks like and feels like. Design is
          how it works.&quot;
        </blockquote>
        <p>
          My current personal choice to build great web products is Next.js,
          React, Tailwind CSS, and TypeScript.
        </p>
        <p>
          I want to make it clear that these are just tools. What really matters
          to me is to build great, relevant, and enjoyable products.
        </p>
        <h2 className="pt-4 font-serif text-lg text-zinc-900">
          3. Open source contributions
        </h2>
        <p>
          While I&apos;m not a frequent contributor to numerous open-source
          projects, my philosophy is to contribute where it matters the most -
          to the tools and projects that I use daily. This approach ensures that
          my contributions have a real, meaningful impact.
        </p>
        <p>
          An example of this approach can be found in my{' '}
          <Link
            className="underline decoration-1 underline-offset-4 transition-colors hover:text-zinc-900"
            href="https://github.com/tremorlabs/tremor/issues/916"
            target="_blank"
            rel="noopener noreferrer"
          >
            most recent issue
          </Link>{' '}
          in the Tremor project, a library of pre-made dashboard components that
          I love and often leverage in my work.
        </p>
        <h2 className="pt-4 font-serif text-lg text-zinc-900">
          4. Teaching achievements
        </h2>
        <p>
          I love teaching. I believe that teaching is the best way to actually
          learn something. Being able to help people while learning is a
          win-win, which is why I&apos;ve been teaching code and design for the
          past three years to every friend of mine who has any interest on it.
        </p>
        <p>
          João Pedro is one of those friends, and I&apos;m very glad I managed
          to help him get his first internship at the previous company where I
          worked.
        </p>
        <p className="pb-4">
          Here&apos;s what he said about me during the internship interview,
          translated from Portuguese:
        </p>
        <Link
          href="https://www.linkedin.com/in/jo%C3%A3o-pedro-mattos-rodrigues-camargo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <blockquote className="group -rotate-1 space-y-4 rounded-xl border-4 border-white bg-zinc-50 p-4 transition-all hover:rotate-1 hover:bg-cyan-50">
            <div className="w-max space-y-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github.com/jotapemattos.png"
                alt="Profile picture of João Pedro"
                className="aspect-square size-10 rounded-full brightness-200 grayscale transition-all group-hover:grayscale-0"
              />
              <p className="font-semibold text-zinc-900 transition-colors group-hover:text-cyan-600">
                João Pedro
              </p>
            </div>
            <p className="italic transition-colors group-hover:text-cyan-600">
              &quot;Filipe was my teacher at the beggining. Not just he taught
              me about code and design, but he was an essential part of my
              decision to become a developer. I&apos;m very grateful for his
              help.&quot;
            </p>
          </blockquote>
        </Link>
        <h2 className="pt-4 font-serif text-lg text-zinc-900">Conclusion</h2>
        <p>
          I look forward to potentially becoming a part of the Tailwind Team and
          contributing to Tailwind&apos;s success story.
        </p>
        <p>Thank you for considering my application.</p>
        <br />
        <p>Best Regards,</p>
        <p>Filipe Veronezi</p>
      </section>
    </>
  )
}
