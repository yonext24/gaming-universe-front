'use client'

import { FormInput } from './form-input'
import { useUserStore } from '../../store/user/user'
import { useRouter } from 'next/navigation'

const inputs = [
  { name: 'username', id: 'username', placeholder: 'Username', type: 'text', minLength: 5, maxLength: 30 },
  { name: 'password', id: 'password', placeholder: 'Password', type: 'password', minLength: 5, maxLength: 30 }
]

export function LoginForm () {
  const { loading, error, login } = useUserStore()

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    login(formData)
      .then(() => {
        router.replace('/')
      })
      .catch(() => {})
  }

  return <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
    {
      inputs.map(el => <FormInput {...el} key={el.name} />)
    }
    <button type='submit' className='h-10 mt-4 bg-neutral-100 text-black font-bold rounded-sm'>
      {
        (error != null)
          ? 'Ha ocurrido un error'
          : loading
            ? 'Cargando...'
            : 'Login'
      }
    </button>
  </form>
}
