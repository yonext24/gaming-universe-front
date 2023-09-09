'use client'

import { useState } from 'react'

interface Props {
  type: string
  name: string
  id: string
  placeholder?: string
}

export function FormInput ({ name, id, placeholder, type, ...inputProps }: Props) {
  const [hasText, setHasText] = useState(false)

  return <div id='input-father' className="relative border border-neutral-700">
    <input
    onChange={e => { setHasText(e.target.value !== '') }}
    type={type}
    name={name}
    id={id} placeholder={''}
    {...inputProps}
    className={`py-[9px] outline-none pl-4 bg-black w-full
    ${hasText ? '[&~#placeholder]:-translate-y-[170%] [&~#placeholder]:text-xs' : '[&:focus~#placeholder]:-translate-y-[170%] [&:focus~#placeholder]:text-xs'}`} />
    <span id='placeholder' className="absolute text-sm pointer-events-none select-none top-1/2 -translate-y-1/2 left-4 bg-black px-1 transition-[transform,font-size] ease-in-out">{placeholder}</span>
  </div>
}
