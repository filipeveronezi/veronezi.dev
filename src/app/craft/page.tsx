import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'F. Veronezi — Craft',
  description: 'Design Engineer. Building for the web.'
}

import CraftCanvas from '../../components/craft-canvas'
import { HomeLink } from '@/components/home-link'

export default function Craft() {
  return (
    <main className="size-full min-h-screen overflow-hidden bg-zinc-100 p-1">
      <HomeLink className="fixed inset-x-0 top-4 z-10 mx-auto" dark />
      <CraftCanvas />
    </main>
  )
}
