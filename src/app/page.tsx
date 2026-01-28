'use client'

import { Squircle } from '@squircle-js/react'
import Link from 'next/link'
import { motion } from 'motion/react'

export default function Home() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-center gap-4 bg-zinc-100 py-10">
      <motion.h1
        className="max-w-md text-balance text-center text-2xl font-medium"
        initial={{ opacity: 0, translateY: 8, filter: 'blur(10px)' }}
        animate={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.3 }}
      >
        Filipe Veronezi <span className="text-zinc-500">— blending design and code into world-class products</span>
      </motion.h1>
      <div className="flex justify-center gap-2 pt-4">
        <motion.div
          initial={{ opacity: 0, translateY: 8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <Squircle>
            <Link
              className="
                text-balance rounded-md bg-gradient-to-tr from-black via-zinc-800 to-zinc-500 px-4 py-2 text-center
                text-sm font-medium text-white transition-all

                hover:brightness-150
              "
              href="/craft"
            >
              View work
            </Link>
          </Squircle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link
            className="
              text-balance rounded-full border bg-white px-4 py-2 text-center text-sm font-medium text-zinc-900
              transition-colors

              hover:bg-zinc-50
            "
            href="/about-me"
          >
            About me
          </Link>
        </motion.div>
      </div>
      <div
        className="
          grid w-full max-w-max grid-cols-2 gap-4 pt-4

          md:max-w-screen-sm md:grid-cols-4

          lg:gap-y-8 lg:pt-10
        "
      >
        <motion.div
          initial={{ opacity: 0, translateY: 8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <Squircle
            cornerRadius={32}
            cornerSmoothing={1}
            className="
              group relative flex h-40 w-36 rotate-2 cursor-default flex-col gap-6 border-4 border-white
              bg-[url('https://github.com/filipeveronezi.png')] bg-cover bg-center p-4 transition-all

              hover:-rotate-2 hover:bg-cyan-50
            "
          >
            <div className="absolute left-0 top-0 size-full bg-gradient-to-t from-zinc-50/80 to-zinc-50/20"></div>
          </Squircle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Squircle
            cornerRadius={32}
            cornerSmoothing={1}
            className="
              group relative flex h-40 w-full -rotate-2 flex-col justify-between overflow-hidden border-4 border-white
              bg-zinc-50 transition-all

              hover:rotate-2 hover:bg-purple-50
            "
          >
            <Link href="/craft" className="flex size-full flex-col justify-start p-4">
              <div className="flex w-full items-center justify-between">
                <span className="w-full text-sm font-medium">My work</span>
                <div className="flex w-max items-center justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="
                      size-5 text-zinc-400 transition-colors

                      group-hover:text-purple-400
                    "
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
              <span
                className="
                  absolute bottom-0 left-0 font-serif text-7xl font-bold text-zinc-300/30 transition-colors

                  group-hover:text-pink-500/10
                "
              >
                Craft
              </span>
            </Link>
          </Squircle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          <Squircle
            cornerRadius={32}
            cornerSmoothing={1}
            className="
              group col-span-1 h-40 w-full rotate-2 border-4 border-white bg-zinc-50 transition-all

              hover:-rotate-2 hover:bg-orange-50
            "
          >
            <Link
              href="https://pilgrim.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-full flex-col gap-6 p-4"
            >
              <svg
                className="
                  size-8 grayscale transition-all

                  group-hover:scale-110 group-hover:grayscale-0
                "
                width="298"
                height="298"
                viewBox="0 0 298 298"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M181.914 189.597C178.3 190.717 174.741 192.545 176.365 196.92C177.588 199.103 179.249 200.848 181.347 202.149C183.938 204.328 186.803 206.077 189.943 207.406C197.94 211.138 206.569 213.993 215.286 215.369C218.031 215.723 220.775 216.073 223.52 216.427C223.883 216.465 224.245 216.497 224.608 216.525C230.418 216.973 236.252 216.05 241.717 214.03C250.063 210.947 258.017 206.735 264.823 200.965C271.991 194.891 278.029 187.26 282.83 179.2C290.04 167.1 294.408 153.372 296.659 139.505C298.436 128.576 298.185 117.889 297.413 106.816C296.05 87.3414 292.975 66.9527 283.965 49.3955C277.564 36.9178 263.232 26.0495 251.23 18.7495L206.755 26.8751C218.533 40.4209 227.371 59.9653 229.855 77.8211L229.427 74.6632C230.935 85.7554 231.791 97.1462 231.53 108.35C231.484 110.347 231.307 112.343 231.102 114.326C229.958 125.507 227.362 136.617 223.245 147.075C220.096 155.075 215.984 162.683 210.755 169.512L212.7 166.993C205.136 176.742 195.563 184.088 184.152 188.79L181.905 189.602L181.914 189.597Z"
                  fill="url(#paint0_linear_453_890)"
                />
                <path
                  d="M110.16 294.451C118.687 296.811 128.009 298.388 136.903 297.917C143.267 297.581 150.919 296.27 155.538 291.377C161.064 285.528 163.72 278.176 164.888 270.34C166.056 262.504 165.907 255.087 165.916 247.526C165.93 234.932 165.283 222.342 164.218 209.794C162.218 186.243 158.845 162.785 154.57 139.542C152.5 128.296 150.235 117.078 147.597 105.953C145.16 95.6627 142.518 85.4194 139.001 75.442C136.112 67.2465 132.707 59.0369 127.814 51.8209L122.371 45.5751L99.8472 35.2944L71.8203 59.7599C76.0767 70.9174 79.1096 82.4808 81.8542 94.0908C84.4266 104.973 86.6687 115.93 88.7015 126.92C90.9577 139.094 92.9347 151.32 94.6093 163.588L94.1813 160.43C96.6328 178.542 98.447 196.762 99.1168 215.037C99.4518 224.087 99.5029 233.154 99.1308 242.204C98.9773 246.014 98.8145 249.802 98.1818 253.566C97.2282 259.238 95.5536 265.097 92.0229 269.734L110.151 294.456L110.16 294.451Z"
                  fill="url(#paint1_linear_453_890)"
                />
                <path
                  d="M155.544 291.377C155.646 291.307 155.372 291.554 155.288 291.643C150.645 296.317 143.156 297.585 136.909 297.917C128.015 298.388 118.692 296.811 110.166 294.451C95.122 290.285 78.3291 283.904 69.7978 269.869C65.881 263.427 64.6018 254.914 64.5134 247.516C64.4111 238.724 65.1507 229.861 66.0206 221.124C67.8673 202.55 71.0817 184.102 75.5148 165.971C81.5202 141.403 89.819 117.371 100.574 94.4779C108.696 77.1911 118.153 60.4035 129.252 44.8473C134.406 37.6266 139.863 30.5739 145.78 23.9642C151.58 17.4805 157.949 11.0948 165.457 6.60285C175.621 0.524972 187.464 -0.771767 199.042 0.380371C219.012 2.36746 238.722 8.27275 255.933 18.7446C267.572 25.8254 277.029 36.2646 283.43 48.2711C283.63 48.6442 284.23 49.7497 284.016 49.3906C263.52 14.6818 232.912 27.0755 232.912 27.0755C226.074 29.9162 220.226 34.8885 214.97 40.0102C209.295 45.5377 204.155 51.6109 199.303 57.8753L201.247 55.3565C191.693 67.7501 183.371 81.0954 175.932 94.8557C155.879 131.929 142.691 172.66 135.834 214.226C133.722 227.034 132.192 239.951 131.448 252.913C131.094 259.042 130.722 265.176 131.55 271.277C131.55 271.277 136.867 304.424 155.548 291.382L155.544 291.377Z"
                  fill="url(#paint2_linear_453_890)"
                />
                <path
                  d="M85.8214 54.6757C87.0355 53.113 88.338 51.6111 89.7661 50.2444C92.1431 47.9727 94.4737 46.0369 97.8322 44.2644C97.8322 44.2644 113.951 36.1621 125.924 49.6146C126.129 49.8432 125.589 49.1062 125.408 48.859C120.617 42.3846 117.077 38.4757 109.913 34.1051C95.111 25.0699 77.8064 20.0788 60.6089 18.5209C48.9283 17.462 36.6197 18.6235 27.6325 26.8844C19.2035 34.6322 13.0725 45.2486 8.61613 55.7018C4.08067 66.3323 0.950032 77.7091 0.01968 89.2585C-0.347809 93.8437 4.51328 97.2675 7.74625 99.4225C14.2866 103.788 22.9017 106.96 30.4329 108.868C30.4329 108.868 51.3984 113.29 60.567 111.298C63.3069 110.706 65.3397 109.558 66.5492 107.133C67.9261 90.0421 73.8059 72.2376 83.4676 57.8382C83.9746 57.0825 84.5143 56.3549 85.0678 55.6365L85.8167 54.671L85.8214 54.6757Z"
                  fill="url(#paint3_linear_453_890)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_453_890"
                    x1="236.987"
                    y1="216.637"
                    x2="236.987"
                    y2="18.7402"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF6622" />
                    <stop offset="1" stopColor="#AA2A00" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_453_890"
                    x1="168.484"
                    y1="54.6755"
                    x2="30.9791"
                    y2="361.853"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AA2A00" />
                    <stop offset="1" stopColor="#FF6622" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_453_890"
                    x1="174.281"
                    y1="297.996"
                    x2="174.281"
                    y2="-0.00211369"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF6622" />
                    <stop offset="1" stopColor="#FFA624" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_453_890"
                    x1="62.9859"
                    y1="111.816"
                    x2="62.9859"
                    y2="18.1897"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF6622" />
                    <stop offset="1" stopColor="#FFA624" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex flex-col gap-2">
                <span
                  className="
                    text-sm font-medium transition-colors

                    group-hover:text-orange-600
                  "
                >
                  Design Engineer
                </span>
                <span
                  className="
                    text-xs text-zinc-600 transition-colors

                    group-hover:text-orange-500
                  "
                >
                  Building for Pilgrim
                </span>
              </div>
            </Link>
          </Squircle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Squircle
            cornerRadius={32}
            cornerSmoothing={1}
            className="
              group col-span-1 h-40 w-full -rotate-2 border-4 border-white bg-zinc-50 transition-all

              hover:rotate-2 hover:bg-stone-100
            "
          >
            <Link
              href="https://x.com/fiveronezi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-full flex-col gap-6 p-4"
            >
              <svg
                width="1200"
                height="1227"
                viewBox="0 0 1200 1227"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="
                  size-7 fill-zinc-400 transition-colors

                  group-hover:fill-black
                "
              >
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
              </svg>
              <div className="flex flex-col gap-2">
                <span
                  className="
                    text-sm font-medium transition-colors

                    group-hover:text-stone-900
                  "
                >
                  @fiveronezi
                </span>
                <span
                  className="
                    text-xs text-zinc-600 transition-colors

                    group-hover:text-stone-500
                  "
                >
                  Find me on X
                </span>
              </div>
            </Link>
          </Squircle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3, delay: 0.35 }}
        >
          <Squircle
            cornerRadius={32}
            cornerSmoothing={1}
            className="
              group flex h-40 w-36 -rotate-2 cursor-default flex-col gap-4 border-4 border-white bg-zinc-50 p-4
              transition-all

              hover:rotate-2 hover:bg-yellow-50
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="
                size-8 text-zinc-400 transition-all

                group-hover:scale-110 group-hover:text-emerald-400
              "
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex flex-col gap-1">
              <span
                className="
                  text-sm font-medium transition-colors

                  group-hover:text-yellow-600
                "
              >
                Working from
              </span>
              <span
                className="
                  text-xs transition-colors

                  group-hover:text-yellow-600
                "
              >
                Sao Paulo, Brazil
              </span>
            </div>
          </Squircle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Squircle
            cornerRadius={32}
            cornerSmoothing={1}
            className="
              group flex h-40 w-36 rotate-2 flex-col gap-6 border-4 border-white bg-zinc-50 transition-all

              hover:-rotate-2 hover:bg-green-50
            "
          >
            <Link
              href="https://github.com/filipeveronezi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-full flex-col gap-6 p-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github.com/github.png"
                alt="GitHub logo"
                className="
                  aspect-square size-8 rounded-full opacity-50 transition-all

                  group-hover:scale-110 group-hover:opacity-60
                "
              />
              <div className="flex flex-col gap-1">
                <span
                  className="
                    text-sm font-medium text-zinc-800 transition-colors

                    group-hover:text-green-800
                  "
                >
                  /filipeveronezi
                </span>
                <span
                  className="
                    text-xs text-zinc-600 transition-colors

                    group-hover:text-green-600
                  "
                >
                  Find me on GitHub
                </span>
              </div>
            </Link>
          </Squircle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3, delay: 0.45 }}
        >
          <Squircle
            cornerRadius={32}
            cornerSmoothing={1}
            className="
              group flex h-40 w-36 -rotate-2 flex-col gap-6 border-4 border-white bg-zinc-50 transition-all

              hover:rotate-2 hover:bg-cyan-50
            "
          >
            <Link
              href="https://linkedin.com/in/filipeveronezi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-full flex-col gap-6 p-4"
            >
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 310 310"
                className="
                  size-6 fill-current text-zinc-400 transition-all

                  group-hover:scale-110 group-hover:text-cyan-800
                "
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
                <span
                  className="
                    text-sm font-medium text-zinc-800 transition-colors

                    group-hover:text-cyan-800
                  "
                >
                  Find me on LinkedIn
                </span>
              </div>
            </Link>
          </Squircle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, translateY: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Squircle
            cornerRadius={32}
            cornerSmoothing={1}
            className="
              group relative flex h-40 w-full -rotate-2 flex-col justify-between overflow-hidden border-4 border-white
              bg-zinc-50 transition-all

              hover:rotate-2 hover:bg-purple-50
            "
          >
            <Link href="/about-me" className="flex size-full flex-col justify-between p-4">
              <span
                className="
                  text-sm font-medium text-zinc-800 transition-colors

                  group-hover:text-purple-800
                "
              >
                Who am I?
              </span>
              <div className="flex flex-col">
                <span
                  className="
                    text-xs text-zinc-600 transition-colors

                    group-hover:text-purple-600
                  "
                >
                  as a developer,
                </span>
                <span
                  className="
                    text-xs text-zinc-600 transition-colors

                    group-hover:text-purple-600
                  "
                >
                  as a designer,
                </span>
                <span
                  className="
                    text-xs text-zinc-600 transition-colors

                    group-hover:text-purple-600
                  "
                >
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
                  className="
                    size-5 text-zinc-400 transition-colors

                    group-hover:text-purple-400
                  "
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          </Squircle>
        </motion.div>
      </div>
    </main>
  )
}
