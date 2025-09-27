'use client'

import { motion } from 'motion/react'

export default function Lowercase() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <header className="h-20 w-screen bg-blue-500">Header</header>
      <div className="flex h-full">
        <div className="h-[calc(100vh-80px)] w-60 bg-red-500">Sidebar</div>
      </div>
      <motion.div
        initial={{ width: '100%', height: '100%' }}
        animate={{ width: 'calc(100% - 240px)', height: 'calc(100vh - 80px)' }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="fixed bottom-0 right-0 z-10 w-full overflow-scroll bg-green-500"
      >
        <div className="flex h-40 items-center justify-center">Content</div>
        <div className="flex h-40 items-center justify-center">Content</div>
        <div className="flex h-40 items-center justify-center">Content</div>
        <div className="flex h-40 items-center justify-center">Content</div>
        <div className="flex h-40 items-center justify-center">Content</div>
        <div className="flex h-40 items-center justify-center">Content</div>
        <div className="flex h-40 items-center justify-center">Content</div>
        <div className="flex h-40 items-center justify-center">Content</div>
        <div className="flex h-40 items-center justify-center">Content</div>
        <div className="flex h-40 items-center justify-center">Content</div>
        <div className="flex h-40 items-center justify-center">Content</div>
      </motion.div>
    </div>
  )
}
