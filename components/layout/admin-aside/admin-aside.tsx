'use client'

import {
  PersonIcon,
  PersonsIcon,
  PlusIcon,
  SidebarRightIcon,
  XIcon
} from '@components/icons'
import { useLayoutStore } from '../../../store/layout/layout'
import type { AsideSectorWithId } from './admin-aside.d'
import { lazy, Suspense } from 'react'
import { useCallback } from 'react'

export const sections: AsideSectorWithId[] = [
  {
    title: 'Users',
    id: 1,
    options: [
      { title: 'View Users', href: '/admin/products/view', icon: PersonsIcon },
      { title: 'Add User', href: '/admin/products/add', icon: PersonIcon }
    ]
  },
  {
    title: 'Products',
    id: 2,
    options: [
      { title: 'View Products', href: '/admin/dashboard/view', icon: XIcon },
      { title: 'Add Product', href: '/admin/dashboard/add', icon: PlusIcon }
    ]
  },
  {
    title: 'Categories',
    id: 3,
    options: [
      { title: 'View Categories', href: '/admin/dashboard/view', icon: XIcon },
      { title: 'Add Category', href: '/admin/dashboard/add', icon: PlusIcon }
    ]
  }
]

const LazyAdminAsideDesktop = lazy(async () => import('./aside-desktop'))
const LazyAsideMobile = lazy(async () => import('./aside-mobile'))

export function AdminAside() {
  const screenWidth = useLayoutStore((s) => s.screenWidth)

  const handleOpenMobileSidebar = useCallback(async () => {
    const { addModal } = await import('react-modal-observer')
    addModal(
      LazyAsideMobile,
      {},
      {
        animationType: { type: 'slide', origin: 'left' },
        backgroundColor: 'rgba(0,0,0,.2)',
        fallback: <div className="h-screen bg-black w-[350px]"></div>
      },
      'mobile-sidebar'
    )
  }, [])

  return (
    <>
      {(() => {
        if (screenWidth === undefined) return null
        if (screenWidth > 1024)
          return (
            <Suspense
              fallback={
                <div className="h-screen flex bg-black w-[var(--admin-sidebar-width)]" />
              }
            >
              <LazyAdminAsideDesktop />
            </Suspense>
          )
        if (screenWidth <= 1024)
          return (
            <button onClick={handleOpenMobileSidebar}>
              <SidebarRightIcon />
            </button>
          )
      })()}
    </>
  )
}
