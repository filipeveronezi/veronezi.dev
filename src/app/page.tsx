export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-6 bg-[url(/background-mobile.png)] bg-cover bg-no-repeat sm:bg-[url(/background.png)]">
      <div className="group relative overflow-hidden">
        <div className="transition-transform duration-300 group-hover:-translate-y-32">
          <h1 className="pointer-events-none bg-gradient-to-br from-purple-300 to-zinc-700 bg-clip-text text-center font-serif text-6xl uppercase tracking-wider text-transparent lg:text-[8rem] lg:leading-[8rem]">
            F. Veronezi
          </h1>
        </div>
        <div className="absolute left-0 top-0 translate-y-32 transition-transform duration-300 group-hover:translate-y-0">
          <span className="pointer-events-none bg-gradient-to-br from-zinc-600 to-zinc-950 bg-clip-text text-center font-serif text-6xl uppercase tracking-wider text-transparent lg:text-[7.99rem] lg:leading-[7.99rem]">
            F. VerØnezi
          </span>
        </div>
      </div>
      <div className="group relative flex w-full items-center justify-center overflow-hidden">
        <div className="transition-transform duration-300 group-hover:-translate-y-16">
          <p className="flex cursor-default bg-gradient-to-tl from-black to-purple-300 bg-clip-text text-xl font-light lowercase tracking-tight text-transparent delay-75 lg:text-3xl">
            Design Engineer.
          </p>
        </div>
        <div className="absolute inset-x-0 top-0 mx-auto w-max translate-y-16 transition-transform duration-300 group-hover:translate-y-0">
          <p className="flex cursor-default bg-gradient-to-tl from-black to-purple-300 bg-clip-text text-xl font-light lowercase tracking-tight text-transparent delay-75 lg:text-3xl">
            Building for the web.
          </p>
        </div>
      </div>
    </main>
  )
}
