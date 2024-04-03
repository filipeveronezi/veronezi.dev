import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'F. Veronezi — Tailwind Application',
  description: 'Design Engineer. Building for the web.'
}

export default function TailwindApplication() {
  return (
    <>
      <h1 className="font-serif text-4xl">
        Tailwind application — Design Engineer
      </h1>
      <section className="space-y-2 text-sm text-zinc-500 [&>p>em]:not-italic [&>p>em]:text-zinc-950">
        <p>
          Hello <em>Tailwind Team</em>,
        </p>
        <p>
          I&apos;m Filipe, a <em>23</em> years old Design Engineer based in{' '}
          <em>Sao Paulo, Brazil</em>.
        </p>
        <p>
          I&apos;m reaching out to you for the <em>Design Engineer</em>{' '}
          position, which I couldn&apos;t be more thrilled about.
        </p>
        <p>Here&apos;s why I&apos;m the perfect fit for this role:</p>
        <h2 className="pt-4 font-serif text-lg">
          1. Successful <span className="line-through">Projects</span> Products
        </h2>
        <p>
          a. I created an open-source Bible Reader in one weekend, it&apos;s
          called Holy Bible. Initially it served a simple purpose of personally
          exploring Next 13, but it became a useful product which I use daily.
        </p>
        <p>
          b. I&apos;ve built the website of the local church I serve as a
          christian: Igreja Batista da Trindade
        </p>
        <p>
          c. Most recently, at Pilgrim, I&apos;ve built an AI assisted tool for
          book translation, handling everything from UI/UX design to
          implementation using Next, React, TailwindCSS, and Typescript.
        </p>
        <h2 className="pt-4 font-serif text-lg">
          2. Code is my favorite design tool
        </h2>
        <p>
          I see code as a key design tool and believe the Design Engineer role
          embodies the future of product development. I&apos;m eager to explore
          this intersection at Tailwind.
        </p>
        <h2 className="pt-4 font-serif text-lg">
          3. Open source contributions
        </h2>
        <p>
          While I&apos;m not a frequent contributor to numerous open-source
          projects, my philosophy is to contribute where it matters the most -
          to the tools and projects that I use daily. This approach ensures that
          my contributions have real, meaningful impact.
        </p>
        <p>
          An example of this approach can be found in my most recent issue filed
          in the Tremor project, a library of pre-made dashboard components that
          I love and often leverage in my work.
        </p>
        <h2 className="pt-4 font-serif text-lg">4. Teaching achievements</h2>
        <p>
          I love teaching. I believe that teaching is the best way to actually
          learn something. Being able to help people while learning is a
          win-win, which is why I&apos;ve been teaching programming for the past
          3 years to every friend of mine who has any interest on it.
        </p>
        <p>
          João Pedro is one of those friends, and I&apos;m very glad I managed
          to help him get his first internship at the previous company where I
          worked
        </p>
        <h2 className="pt-4 font-serif text-lg">Conclusion</h2>
        <p>
          I look forward to potentially becoming a part of your team and
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
