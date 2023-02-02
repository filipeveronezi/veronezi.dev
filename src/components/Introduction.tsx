import { getMyAge } from '@/utils/getMyAge'

export function Introduction() {
  const age = getMyAge()

  return (
    <p className="flex flex-col text-lg leading-8">
      <span>Hey, welcome to my place in the web.</span>
      <span>I&apos;m a {age} y/o developer from 🇧🇷 Brazil.</span>
      <span> I love to build beautiful and delightful user experiences, like this one.</span>
    </p>
  )
}
