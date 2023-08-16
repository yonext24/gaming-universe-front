'use client'
import Link from 'next/link'
import { useRef } from 'react'

interface LinkEntryProps {
  text: string
  menuBackdrop: React.RefObject<HTMLDivElement>
  href?: string
}

export function LinkEntry ({ text, menuBackdrop, href }: LinkEntryProps) {
  const liRef = useRef<HTMLLIElement>(null)

  const handleMouseEnter = () => {
    if (liRef.current == null || menuBackdrop.current == null) return
    const { left, top, width, height } = liRef.current.getBoundingClientRect()

    menuBackdrop.current.style.setProperty('--left', `${left}px`)
    menuBackdrop.current.style.setProperty('--top', `${top}px`)
    menuBackdrop.current.style.setProperty('--width', `${width}px`)
    menuBackdrop.current.style.setProperty('--height', `${height}px`)

    menuBackdrop.current.style.opacity = '1'
    menuBackdrop.current.style.visibility = 'visible'
  }

  const handleMouseLeave = () => {
    if (menuBackdrop.current == null) return
    menuBackdrop.current.style.opacity = '0'
    menuBackdrop.current.style.visibility = 'hidden'
  }

  return <li className='flex rounded-md relative z-10 hover:text-white transition-colors' ref={liRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <Link className='py-2 px-4' href={href ?? ''}>
      {text}
    </Link>
  </li>
}
