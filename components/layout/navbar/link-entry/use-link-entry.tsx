import { useRef } from 'react'
import type { navEntryCategoryType, navEntryType } from '../link-entrys/link-entrys'

interface useLinkEntryProps {
  text: string
  menuBackdrop: React.RefObject<HTMLDivElement>
  id?: number
  category?: navEntryCategoryType
  closeMenu?: () => void
  openMenu?: (props: navEntryType) => void
}

export function useLinkEntry({ menuBackdrop, category, openMenu, text, id, closeMenu }: useLinkEntryProps) {
  const liRef = useRef<HTMLLIElement>(null)

  const handleMouseEnter = () => {
    if (liRef.current == null || menuBackdrop.current == null) return
    const { left, top, width, height } = liRef.current.getBoundingClientRect()

    if (category != null && id != null) {
      openMenu?.({ text, category, id })
    }

    menuBackdrop.current.style.setProperty('--left', `${left}px`)
    menuBackdrop.current.style.setProperty('--top', `${top}px`)
    menuBackdrop.current.style.setProperty('--width', `${width}px`)
    menuBackdrop.current.style.setProperty('--height', `${height}px`)

    menuBackdrop.current.style.opacity = '1'
    menuBackdrop.current.style.visibility = 'visible'
  }

  const handleMouseLeave = () => {
    closeMenu?.()
    if (menuBackdrop.current == null) return
    menuBackdrop.current.style.opacity = '0'
    menuBackdrop.current.style.visibility = 'hidden'
  }

  return { handleMouseEnter, handleMouseLeave, liRef }
}
