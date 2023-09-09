'use client'

import { useRef, useState } from 'react'
import { useUserStore } from '../../../store/user/user'
import { DownArrowIcon } from '../../icons'
import { UserModal } from './user-modal'
import { useClickOutside } from '../../../hooks/useClickOutside'

export function UserEntry () {
  const [open, setOpen] = useState<boolean>(false)
  const user = useUserStore(s => s.user)

  const close = () => { setOpen(false) }

  const modalRef = useRef<null | HTMLDivElement>(null)

  useClickOutside({
    elementRef: modalRef,
    callback: close
  })

  return <div ref={modalRef} id='user-container' className="relative ml-auto mr-3">
    <button onClick={() => { setOpen(prev => !prev) }} className="group relative z-10 py-1 px-4">

      <div id='background' className='defaultGradient rounded transition-opacity
      opacity-50 group-hover:opacity-100 absolute w-full h-full top-0 left-0' />

      <div id='content' className='relative flex gap-4 items-center'>
        <div id='fake-image' className="h-8 w-8 bg-neutral-800 rounded-full" />
        <span>{user?.username}</span>
        <DownArrowIcon className='h-4 w-4 text-white' />
      </div>

    </button>

    {
      open && <UserModal />
    }

  </div>
}
