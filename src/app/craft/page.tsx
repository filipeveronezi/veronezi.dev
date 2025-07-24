import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'F. Veronezi — Craft',
  description: 'Design Engineer. Building for the web.'
}

import CraftCanvas from '../../components/craft-canvas'

export default function Craft() {
  return (
    <main className="size-full min-h-screen bg-zinc-100 p-1">
      <CraftCanvas />
    </main>
  )
}
