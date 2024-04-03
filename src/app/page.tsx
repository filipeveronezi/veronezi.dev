import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-6 bg-zinc-100 bg-cover bg-no-repeat lg:gap-12">
      <div className="grid w-full max-w-max grid-cols-2 gap-4 md:max-w-screen-sm md:grid-cols-4">
        <div className="group flex h-40 w-36 rotate-2 cursor-default flex-col gap-6 rounded-3xl border-4 border-white bg-zinc-50 p-4 transition-all hover:-rotate-2 hover:bg-cyan-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github.com/filipeveronezi.png"
            alt="Profile picture of Filipe Veronezi"
            className="aspect-square size-10 rounded-full grayscale transition-all group-hover:rotate-6 group-hover:scale-110 group-hover:grayscale-0"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-zinc-800 transition-colors group-hover:text-cyan-800">
              Filipe Veronezi
            </span>
            <span className="text-xs text-zinc-600 transition-colors group-hover:text-cyan-600">
              Design Engineer
            </span>
          </div>
        </div>
        <div className="group flex h-40 w-36 -rotate-2 cursor-default flex-col gap-4 rounded-3xl border-4 border-white bg-zinc-50 p-4 transition-all hover:rotate-2 hover:bg-yellow-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8 text-zinc-400 transition-all group-hover:scale-110 group-hover:text-emerald-400"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium transition-colors group-hover:text-yellow-600">
              Working from
            </span>
            <span className="text-xs transition-colors group-hover:text-yellow-600">
              Sao Paulo, Brazil
            </span>
          </div>
        </div>
        <Link
          href="/about-me"
          className="group relative col-span-2 flex h-40 w-full -rotate-2 flex-col justify-between overflow-hidden rounded-3xl border-4 border-white bg-zinc-50 p-4 transition-all hover:rotate-2 hover:bg-purple-50"
        >
          <span className="font-medium text-zinc-800 transition-colors group-hover:text-purple-800">
            Who am I?
          </span>
          <div className="flex flex-col">
            <span className="text-xs text-zinc-600 transition-colors group-hover:text-purple-600">
              as a developer,
            </span>
            <span className="text-xs text-zinc-600 transition-colors group-hover:text-purple-600">
              as a designer,
            </span>
            <span className="text-xs text-zinc-600 transition-colors group-hover:text-purple-600">
              as a builder
            </span>
          </div>
          <div className="flex w-full items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-zinc-400 transition-colors group-hover:text-purple-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="group relative overflow-hidden">
          <div className="transition-transform duration-300 group-hover:-translate-y-32">
            <h1 className="pointer-events-none bg-gradient-to-br from-zinc-300 to-zinc-700 bg-clip-text text-center font-serif text-6xl uppercase tracking-wider text-transparent lg:text-[7rem] lg:leading-[8rem]">
              F. Veronezi
            </h1>
          </div>
          <div className="absolute left-0 top-0 translate-y-32 transition-transform duration-300 group-hover:translate-y-0">
            <span className="pointer-events-none bg-gradient-to-br from-zinc-600 to-zinc-950 bg-clip-text text-center font-serif text-[3.74rem] uppercase leading-[3.74rem] tracking-wider text-transparent lg:text-[6.99rem] lg:leading-[7.99rem]">
              F. Veronezi
            </span>
          </div>
        </div>
        <div className="group relative flex w-full items-center justify-center overflow-hidden">
          <div className="transition-transform duration-300 group-hover:-translate-y-16">
            <p className="flex cursor-default bg-gradient-to-tl from-black to-zinc-300 bg-clip-text text-xl font-light lowercase tracking-tight text-transparent delay-75 lg:text-3xl">
              Design Engineer.
            </p>
          </div>
          <div className="absolute inset-x-0 top-0 mx-auto w-max translate-y-16 transition-transform duration-300 group-hover:translate-y-0">
            <p className="flex cursor-default bg-gradient-to-tl from-black to-zinc-300 bg-clip-text text-xl font-light lowercase tracking-tight text-transparent delay-75 lg:text-3xl">
              Building for the web.
            </p>
          </div>
        </div>
      </div>
      <div className="grid w-full max-w-max grid-cols-2 gap-4 md:max-w-screen-sm md:grid-cols-4">
        <Link
          href="https://pilgrim.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="group col-span-2 flex h-40 w-full -rotate-2 flex-col gap-6 rounded-3xl border-4 border-white bg-zinc-50 p-4 transition-all hover:rotate-2 hover:bg-orange-50"
        >
          <svg
            className="size-8 grayscale transition-all group-hover:scale-125 group-hover:grayscale-0"
            viewBox="0 0 171 221"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.7503 214.895C49.7503 214.895 63.7319 214.999 66.5981 178.79C69.4642 142.567 54.8134 19.5236 32.9316 12.1959C32.9316 12.1959 51.1034 1.1153 68.5186 16.3789C83.2858 29.3137 88.9599 113.39 92.0589 177.396C93.5574 208.279 84.2315 219.968 74.8037 219.538C63.1209 219.004 49.7503 214.895 49.7503 214.895Z"
              fill="#FC764D"
            />
            <path
              d="M103.48 15.4067C103.48 15.4067 172.312 17.5872 111.948 125.842C107.612 133.614 101.08 138.539 107.103 145.021C113.126 151.518 126.773 155.805 132.389 151.34C138.02 146.875 164.179 110.786 170.1 59.0615C176.415 3.71792 128.388 -17.0192 103.48 15.4067Z"
              fill="#FC764D"
            />
            <path
              d="M19.6061 14.7437C4.53328 26.0616 -4.55986 48.0596 2.35093 52.925C6.84658 56.0845 21.6575 66.0674 26.7351 57.2712C31.3908 49.2018 35.901 17.6807 65.3482 13.8537C65.3627 13.8537 44.1503 -3.67943 19.6061 14.7437Z"
              fill="#FFAD54"
            />
            <path
              d="M151.623 6.34641C151.071 5.96074 150.518 5.60475 149.965 5.24874C149.776 5.13008 149.587 5.01138 149.397 4.89271C148.932 4.61088 148.452 4.34389 147.972 4.07689C147.884 4.03239 147.812 3.97306 147.724 3.94339L147.259 3.70605C146.415 3.27588 145.556 2.8754 144.669 2.5194L144.363 2.4007C143.49 2.05953 142.618 1.74803 141.716 1.46619C141.454 1.39202 141.192 1.30302 140.915 1.22885C140.581 1.13985 140.246 1.05087 139.911 0.976706C139.708 0.917372 139.49 0.858015 139.286 0.813514C138.995 0.739347 138.689 0.694885 138.384 0.620718C137.293 0.41305 136.201 0.249871 135.096 0.146037C134.907 0.131203 134.732 0.101524 134.557 0.0866902C134.456 0.0866902 134.354 0.0866902 134.266 0.0866902C133.874 0.0718568 133.481 0.0570251 133.103 0.0421917C132.71 0.0273582 132.317 0.0273438 131.924 0.0273438C131.502 0.0273438 131.066 0.0421754 130.644 0.0718423H130.513C130.076 0.101509 129.654 0.131187 129.218 0.175687C128.84 0.205354 128.476 0.24988 128.112 0.29438H128.083C128.025 0.29438 127.967 0.294349 127.894 0.309183C127.108 0.413017 126.308 0.546516 125.522 0.724517C125.13 0.798685 124.737 0.91737 124.359 1.0212C123.864 1.13987 123.369 1.27336 122.889 1.42169C122.758 1.45136 122.627 1.49588 122.511 1.54038C122.234 1.62938 121.943 1.71837 121.667 1.80738C121.187 1.97054 120.692 2.14852 120.212 2.34136L119.819 2.50455L119.456 2.65289C119.325 2.71223 119.208 2.7567 119.077 2.81604C118.292 3.17204 117.506 3.52806 116.735 3.94339C116.662 3.97306 116.604 4.00272 116.531 4.03239C115.702 4.43289 114.785 4.99656 113.84 5.64923C113.33 6.00523 112.821 6.3464 112.283 6.76174C109.228 9.00159 106.478 11.6568 104.121 14.6531L104.106 14.668C80.566 40.8045 43.9025 106.977 35.5659 164.619C25.5271 234.04 78.5291 219.013 78.5291 219.013C78.5291 219.013 63.3691 215.023 70.8909 175.982C76.4632 147.101 106.332 70.9757 131.982 32.6906C132.535 31.8599 133.088 31.0589 133.641 30.2579C133.655 30.2282 133.684 30.1986 133.699 30.1689C134.223 29.4124 134.747 28.6707 135.27 27.9587C135.314 27.8994 135.358 27.8401 135.401 27.7808C135.896 27.0836 136.405 26.416 136.9 25.7634C136.943 25.6892 137.002 25.6299 137.06 25.5409C137.54 24.903 138.02 24.28 138.515 23.6719C138.587 23.5977 138.646 23.5087 138.718 23.4345C139.184 22.8412 139.65 22.2775 140.115 21.7287L140.333 21.4617C140.784 20.9277 141.235 20.3937 141.686 19.9042L141.934 19.6372C142.37 19.1477 142.807 18.6878 143.243 18.228C143.738 17.694 144.247 17.1897 144.771 16.6853C145.265 16.2106 145.76 15.7508 146.269 15.291C146.357 15.2168 146.459 15.1278 146.531 15.0536C146.939 14.6976 147.331 14.3713 147.739 14.045L148.001 13.8373C148.394 13.5258 148.801 13.2291 149.179 12.9621L149.441 12.7841C149.834 12.5171 150.227 12.2649 150.605 12.0424L150.852 11.8941C151.245 11.6716 151.638 11.464 152.016 11.2711L152.22 11.1673C152.613 10.9893 153.006 10.8261 153.398 10.6778L153.558 10.6184C153.966 10.4849 154.373 10.3663 154.766 10.2773L154.868 10.2476C155.29 10.1586 155.712 10.0993 156.134 10.0548C154.679 8.67526 153.18 7.45891 151.623 6.34641Z"
              fill="#FFAD54"
            />
          </svg>
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium transition-colors group-hover:text-orange-600">
              Design Engineer, Head of Technology
            </span>
            <span className="text-xs text-zinc-600 transition-colors group-hover:text-orange-500">
              Currently <span className="line-through">working</span> building
              for Pilgrim
            </span>
          </div>
        </Link>
        <Link
          href="https://github.com/filipeveronezi"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-40 w-36 rotate-2 flex-col gap-6 rounded-3xl border-4 border-white bg-zinc-50 p-4 transition-all hover:-rotate-2 hover:bg-green-50"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github.com/github.png"
            alt="GitHub logo"
            className="aspect-square size-8 rounded-full opacity-50 transition-all group-hover:scale-110 group-hover:opacity-60"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-zinc-800 transition-colors group-hover:text-green-800">
              /filipeveronezi
            </span>
            <span className="text-xs text-zinc-600 transition-colors group-hover:text-green-600">
              Find me on GitHub
            </span>
          </div>
        </Link>
        <Link
          href="https://linkedin.com/in/filipeveronezi"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-40 w-36 -rotate-2 flex-col gap-6 rounded-3xl border-4 border-white bg-zinc-50 p-4 transition-all hover:rotate-2 hover:bg-cyan-50"
        >
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 310 310"
            className="size-6 fill-current text-zinc-400 transition-all group-hover:scale-110 group-hover:text-cyan-800"
          >
            <g id="XMLID_801_">
              <path
                id="XMLID_802_"
                d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
              />
              <path
                id="XMLID_803_"
                d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
              />
              <path
                id="XMLID_804_"
                d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
              />
            </g>
          </svg>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-zinc-800 transition-colors group-hover:text-cyan-800">
              Find me on LinkedIn
            </span>
          </div>
        </Link>
      </div>
    </main>
  )
}
