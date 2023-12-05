'use client'

import { useEffect, useState } from 'react'
import { RawAside } from './aside'

export default function AdminAsideDesktop() {
  const [navbarHeight, setNavbarHeight] = useState<number | null>(null)

  useEffect(() => {
    const mainNav = document.querySelector('#main-navbar')
    const height = mainNav?.clientHeight
    if (height == null) return
    setNavbarHeight(height)
  }, [])

  return (
    <div className="w-[var(--admin-sidebar-width)] relative self-stretch bg-black overflow-y-auto">
      <div
        className="h-max w-[var(--admin-sidebar-width)] fixed top-0 left-0 flex justify-center overflow-y-auto"
        style={navbarHeight !== null ? { paddingTop: navbarHeight } : undefined}
      >
        <div
          className="overflow-y-auto w-full"
          style={
            navbarHeight !== null
              ? { maxHeight: `calc(100vh - ${navbarHeight}px)` }
              : undefined
          }
        >
          <RawAside />
        </div>
      </div>
    </div>
  )
}
