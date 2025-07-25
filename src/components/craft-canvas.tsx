'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import React, { useState, useRef, useEffect } from 'react'

const ITEMS = [
  {
    imageUrl: '/craft/pilgrim-week.png',
    externalUrl: 'https://x.com/fiveronezi'
  },
  {
    imageUrl: '/craft/logo-fv.png',
    externalUrl: null
  },
  {
    imageUrl: '/craft/responsive-table.png',
    externalUrl: 'https://x.com/fiveronezi'
  },
  {
    imageUrl: '/craft/unfair-logo.png',
    externalUrl: null
  },
  {
    imageUrl: '/craft/dashboard-sidebar.png',
    externalUrl: 'https://x.com/fiveronezi'
  },
  {
    imageUrl: '/craft/polis-logo.png',
    externalUrl: null
  },
  {
    imageUrl: '/craft/pilgrim-compass.png',
    externalUrl: null
  }
]

const DEFAULT_IMAGE_SIZE = 500 // Desktop image size
const MOBILE_IMAGE_SIZE = 310 // Mobile image size
const DEFAULT_GRID_GAP = 110
const MOBILE_GRID_GAP = 40
const ROTATION_RANGE = 8 // Range of rotation in degrees (e.g., 10 = ±5 degrees)

// Helper: seeded random for repeatable positions
function seededRandom(seed: number) {
  let x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// Helper: get random rotation for a grid cell
function getItemRotation(cellX: number, cellY: number) {
  const seed = cellX * 10000 + cellY * 100
  // Random rotation between -ROTATION_RANGE/2 and +ROTATION_RANGE/2 degrees
  return seededRandom(seed) * ROTATION_RANGE - ROTATION_RANGE / 2
}

export default function CraftCanvas() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  const containerRef = useRef<HTMLDivElement>(null)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [drag, setDrag] = useState<{
    startX: number
    startY: number
    panX: number
    panY: number
  } | null>(null)
  const [hasMoved, setHasMoved] = useState(false)
  const [imageSize, setImageSize] = useState(DEFAULT_IMAGE_SIZE)
  const [gridGap, setGridGap] = useState(DEFAULT_GRID_GAP)

  // Responsive image size and grid gap
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 500) {
        setImageSize(MOBILE_IMAGE_SIZE)
        setGridGap(MOBILE_GRID_GAP)
      } else {
        setImageSize(DEFAULT_IMAGE_SIZE)
        setGridGap(DEFAULT_GRID_GAP)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Mouse/touch handlers
  function onPointerDown(e: React.PointerEvent) {
    setHasMoved(false)
    setDrag({
      startX: e.clientX,
      startY: e.clientY,
      panX: pan.x,
      panY: pan.y
    })
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!drag) return

    // Remove drag threshold for touch events (mobile)
    // If it's a touch or pen, always set hasMoved to true
    if (e.pointerType === 'touch' || e.pointerType === 'pen') {
      setHasMoved(true)
    } else {
      const deltaX = Math.abs(e.clientX - drag.startX)
      const deltaY = Math.abs(e.clientY - drag.startY)
      // If we've moved more than 5px, consider it a drag
      if (deltaX > 5 || deltaY > 5) {
        setHasMoved(true)
      }
    }

    setPan({
      x: drag.panX + (e.clientX - drag.startX),
      y: drag.panY + (e.clientY - drag.startY)
    })
  }

  function onPointerUp() {
    setDrag(null)
  }

  // Add wheel handler for scroll navigation
  function onWheel(e: React.WheelEvent) {
    // Prevent default browser scroll
    e.preventDefault()
    setPan((prev) => ({
      x: prev.x - e.deltaX,
      y: prev.y - e.deltaY
    }))
  }

  // Calculate which items to render based on viewport and pan
  const getVisibleItems = () => {
    if (!containerRef.current) {
      // Fallback for initial render - use window dimensions
      if (typeof window === 'undefined') {
        // On server, return an empty array or some safe default
        return []
      }
      const cellSize = imageSize + gridGap
      const cols = Math.ceil(window.innerWidth / cellSize) + 4
      const rows = Math.ceil(window.innerHeight / cellSize) + 4
      const startCol = Math.floor(-pan.x / cellSize) - 2
      const startRow = Math.floor(-pan.y / cellSize) - 2

      const items = []

      for (let cx = startCol; cx < startCol + cols; cx++) {
        for (let cy = startRow; cy < startRow + rows; cy++) {
          const itemIdx =
            (((cx * 31 + cy * 17) % ITEMS.length) + ITEMS.length) % ITEMS.length
          const x = cx * cellSize
          const y = cy * cellSize

          items.push({
            ...ITEMS[itemIdx],
            x,
            y,
            key: `${cx}-${cy}`
          })
        }
      }

      return items
    }

    const container = containerRef.current
    const rect = container.getBoundingClientRect()
    const cellSize = imageSize + gridGap

    // Calculate visible grid cells
    const cols = Math.ceil(rect.width / cellSize) + 4
    const rows = Math.ceil(rect.height / cellSize) + 4
    const startCol = Math.floor(-pan.x / cellSize) - 2
    const startRow = Math.floor(-pan.y / cellSize) - 2

    const items = []

    for (let cx = startCol; cx < startCol + cols; cx++) {
      for (let cy = startRow; cy < startRow + rows; cy++) {
        const itemIdx =
          (((cx * 31 + cy * 17) % ITEMS.length) + ITEMS.length) % ITEMS.length
        const x = cx * cellSize
        const y = cy * cellSize

        items.push({
          ...ITEMS[itemIdx],
          x,
          y,
          key: `${cx}-${cy}`
        })
      }
    }

    return items
  }

  const visibleItems = getVisibleItems()

  if (!mounted) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen select-none overflow-hidden bg-gray-100"
      style={{ cursor: drag ? 'grabbing' : 'grab', touchAction: 'none' }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onWheel={onWheel}
    >
      <div
        className="absolute will-change-transform"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px)`
        }}
      >
        {visibleItems.map((item) => {
          const rotation = getItemRotation(
            Math.floor(item.x / (imageSize + gridGap)),
            Math.floor(item.y / (imageSize + gridGap))
          )

          // Random delay for enter animation based on grid position
          const cellX = Math.floor(item.x / (imageSize + gridGap))
          const cellY = Math.floor(item.y / (imageSize + gridGap))
          const delaySeed = cellX * 10000 + cellY * 100 + 999 // Different seed for delay
          const randomDelay = seededRandom(delaySeed) * 0.5 // Random delay between 1-1.5s

          return (
            <motion.a
              key={item.key}
              href={item.externalUrl ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute block select-none no-underline"
              style={{
                left: item.x,
                top: item.y,
                width: imageSize,
                height: imageSize
              }}
              initial={{
                filter: 'blur(12px)',
                rotate: rotation,
                scale: 0.8,
                opacity: 0
              }}
              whileInView={{
                filter: 'blur(0px)',
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.4,
                  ease: 'easeOut',
                  delay: randomDelay
                }
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                rotate: 0,
                width: imageSize + 50,
                height: imageSize + 50,
                left: item.x - 25,
                top: item.y - 25,
                boxShadow: '0 0 40px 0 rgba(0, 0, 0, 0.05)',
                transition: { duration: 0.15, ease: 'easeOut', delay: 0 }
              }}
              transition={{
                duration: 0.15,
                ease: 'easeOut'
              }}
              onPointerDown={(e) => {
                // Prevent default link behavior but allow event to bubble to container
                e.preventDefault()
              }}
              onClick={(e) => {
                // Only prevent clicks if there was actual movement
                if (hasMoved) {
                  e.preventDefault()
                  e.stopPropagation()
                }
              }}
            >
              <Image
                quality={100}
                src={item.imageUrl}
                width={imageSize}
                height={imageSize}
                alt=""
                className="pointer-events-none box-border size-full rounded-2xl border-4 border-white object-cover outline outline-1 -outline-offset-4 outline-zinc-400/20"
              />
            </motion.a>
          )
        })}
      </div>
    </div>
  )
}
