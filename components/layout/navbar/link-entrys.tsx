'use client'
import { useRef } from 'react'
import { LinkEntry } from './link-entry'

const navEntrys = [
  { text: 'Tienda' },
  { text: 'Componentes' }
]

export function LinkEntrys () {
  const menuBackdrop = useRef<HTMLDivElement>(null)
  return <div className="row-[2] col-[2] flex">

    <ul className="flex items-center mx-auto gap-x-4 text-gray-300 relative">
      {
        navEntrys.map(el => <LinkEntry key={el.text} {...el} menuBackdrop={menuBackdrop} />)
      }

    </ul>
    <div className='flex items-center gap-x-4 text-gray-300 relative'>
      <LinkEntry text='Iniciar Sesión' href='/login' menuBackdrop={menuBackdrop} />
      <LinkEntry text='Registrarse' href='/register' menuBackdrop={menuBackdrop} />
    </div>

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
  </div>
}
