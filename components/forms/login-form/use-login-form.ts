'use client'

import { type SubmitHandler, useForm } from 'react-hook-form'
import { POSIBLE_USER_STATES, useUserStore } from '../../../store/user/user'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export interface LoginFormValues {
  username: string
  password: string
}

export function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: loading }
  } = useForm<LoginFormValues>()
  const { login, user } = useUserStore()

  const router = useRouter()

  useEffect(() => {
    if (user !== POSIBLE_USER_STATES.NOT_LOGGED && user !== POSIBLE_USER_STATES.NOT_KNOWN) {
      router.replace('/')
    }
  }, [router, user])

  const rawOnSubmit: SubmitHandler<LoginFormValues> = async ({ username, password }) => {
    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)

    await login(formData)
  }

  return { register, onSubmit: handleSubmit(rawOnSubmit), errors, loading }
}
