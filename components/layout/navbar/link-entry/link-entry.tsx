'use client'

import Link from 'next/link'
import { type navEntryCategoryType, type navEntryType } from '../link-entrys/link-entrys'
import { useLinkEntry } from './use-link-entry'

interface LinkEntryProps {
  text: string
  menuBackdrop: React.RefObject<HTMLDivElement>
  id?: number
  href?: string
  category?: navEntryCategoryType
  closeMenu?: () => void
  openMenu?: (props: navEntryType) => void
}

export function LinkEntry({ text, category, id, menuBackdrop, href, openMenu, closeMenu }: LinkEntryProps) {
  const { handleMouseEnter, handleMouseLeave, liRef } = useLinkEntry({
    menuBackdrop,
    category,
    openMenu,
    text,
    id,
    closeMenu
  })

  return (
    <li
      className="flex rounded-md relative z-10 hover:text-white transition-colors"
      ref={liRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className="py-2 px-4" href={href ?? ''}>
        {text}
      </Link>
    </li>
  )
}
