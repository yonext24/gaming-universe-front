'use client'

import { useState } from 'react'
import { FormInput } from './form-input'

const inputs = [
  { name: 'username', id: 'username', placeholder: 'Username' },
  { name: 'password', id: 'password', placeholder: 'Password' }
]

export function LoginForm () {
  const handleSubmit = e => {}

  return <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
    {
      inputs.map(el => <FormInput type='text' {...el} key={el.name} />)
    }
    <button type='submit' className='h-10 bg-gradient-to-r from-logo-red/60 via-logo-yellow/60 to-logo-red/60 text-white font-bold'>
      {
        status.type === null || status.type === 'error'
          ? 'Login'
          : status.type === 'loading'
            ? ''
            : 'Sesión iniciada'
      }
    </button>
  </form>
}
