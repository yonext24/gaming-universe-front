'use client'

import { type RefObject, useRef } from 'react'
import { LinkEntry } from './link-entry'
import { POSIBLE_USER_STATES, type POSIBLE_USER_STATES_TYPE, useUserStore } from '../../../store/user/user'
import { UserEntry } from './user-entry'

const navEntrys = [
  { text: 'Tienda' },
  { text: 'Componentes' }
]

const UserRender = ({ user, menuBackdrop }: { user: POSIBLE_USER_STATES_TYPE, menuBackdrop: RefObject<HTMLDivElement> }) => {
  if (user === POSIBLE_USER_STATES.NOT_KNOWN) return <div id='container' className='w-[266px]' />
  if (user === POSIBLE_USER_STATES.NOT_LOGGED) {
    return (
    <div className='flex items-center gap-x-4 text-gray-300 relative'>
      <LinkEntry text='Iniciar Sesión' href='/login' menuBackdrop={menuBackdrop} />
      <LinkEntry text='Registrarse' href='/register' menuBackdrop={menuBackdrop} />
    </div>
    )
  }
  return <UserEntry />
}

export function LinkEntrys () {
  const user = useUserStore(s => s.user)
  const menuBackdrop = useRef<HTMLDivElement>(null)

  return <div className="row-[2] col-[2] grid grid-cols-[1fr_auto]">
    <ul className="flex items-center mx-auto gap-x-4 text-gray-300 relative">
      {
        navEntrys.map(el => <LinkEntry key={el.text} {...el} menuBackdrop={menuBackdrop} />)
      }

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

    <UserRender user={user} menuBackdrop={menuBackdrop} />

  </div>
}
