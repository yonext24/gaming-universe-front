'use client'

import { type RefObject } from 'react'
import { LinkEntry } from '../link-entry/link-entry'
import {
  POSIBLE_USER_STATES,
  type POSIBLE_USER_STATES_TYPE
} from '../../../../store/user/user'
import { CategoryMenu } from '../category-menu/category-menu'
import { useLinkEntrys } from './use-link-entrys'
import { UserEntry } from '../user-entry/user-entry'

export type navEntryCategoryType = 'pc' | 'hardware' | 'laptops'

export interface navEntryType {
  text: string
  category: navEntryCategoryType
  id: number
}

const navEntrys: navEntryType[] = [
  { text: 'PC', category: 'pc', id: 1 },
  { text: 'Hardware', category: 'hardware', id: 2 },
  { text: 'Laptops', category: 'laptops', id: 13 }
]

export function LinkEntrys() {
  const { menuBackdrop, openMenu, closeMenu, user, mantainMenu, menu } = useLinkEntrys()

  return (
    <>
      <div className="row-[2] col-[2] grid grid-cols-[1fr_auto] pb-4">
        <ul className="flex items-center mx-auto gap-x-4 text-gray-300 relative">
          {navEntrys.map((el) => (
            <LinkEntry
              key={el.text}
              {...el}
              menuBackdrop={menuBackdrop}
              openMenu={openMenu}
              closeMenu={closeMenu}
            />
          ))}
        </ul>

        <div
          ref={menuBackdrop}
          id="menu-backdrop"
          className={`
          absolute bg-gradient-to-br from-logo-red/30 to-logo-yellow/30 backdrop-blur-lg rounded pointer-events-none
          translate-x-[var(--left)] translate-y-[var(--top)]
          left-0 top-0
          w-[var(--width)] h-[var(--height)]
          transition-all duration-300
          ease-in-out opacity-0
        `}
        />
        <div className="flex gap-2">
          {user?.role === 'admin' && (
            <LinkEntry
              menuBackdrop={menuBackdrop}
              text="Dashboard"
              href="/admin/dashboard"
            />
          )}
          <UserRender user={user} menuBackdrop={menuBackdrop} />
        </div>
      </div>
      {menu.open && menu?.props != null && (
        <CategoryMenu {...menu.props} closeMenu={closeMenu} mantainMenu={mantainMenu} />
      )}
    </>
  )
}

const UserRender = ({
  user,
  menuBackdrop
}: {
  user: POSIBLE_USER_STATES_TYPE
  menuBackdrop: RefObject<HTMLDivElement>
}) => {
  if (user === POSIBLE_USER_STATES.NOT_KNOWN)
    return <div id="container" className="w-[266px]" />
  if (user === POSIBLE_USER_STATES.NOT_LOGGED) {
    return (
      <div className="flex items-center gap-x-4 text-gray-300 relative">
        <LinkEntry text="Iniciar Sesión" href="/login" menuBackdrop={menuBackdrop} />
        <LinkEntry text="Registrarse" href="/register" menuBackdrop={menuBackdrop} />
      </div>
    )
  }
  return <UserEntry />
}
