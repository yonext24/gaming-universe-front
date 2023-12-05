import { useRef, useState } from 'react'
import { useUserStore } from '../../../../store/user/user'
import type { navEntryType } from './link-entrys'

export function useLinkEntrys() {
  const [menu, setMenu] = useState<{ open: boolean, props?: navEntryType }>({ open: false }) // prettier-ignore
  const user = useUserStore((s) => s.user)
  const menuBackdrop = useRef<HTMLDivElement>(null)

  const closeTimeoutId = useRef<NodeJS.Timeout | null>(null)

  const openMenu = (props: navEntryType) => {
    if (closeTimeoutId.current != null) clearTimeout(closeTimeoutId.current)
    setMenu({ open: true, props })
  }
  const mantainMenu = () => {
    if (closeTimeoutId.current != null) clearTimeout(closeTimeoutId.current)
  }
  const closeMenu = () => {
    closeTimeoutId.current = setTimeout(() => {
      setMenu({ open: false })
    }, 250)
  }

  return { closeMenu, mantainMenu, openMenu, menuBackdrop, user, menu }
}
