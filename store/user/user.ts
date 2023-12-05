import { create } from 'zustand'
import { type User } from './user.d'
import { endpoints } from '../../utils/endpoints'

export const POSIBLE_USER_STATES = {
  NOT_KNOWN: undefined,
  NOT_LOGGED: null
}

export type POSIBLE_USER_STATES_TYPE = (typeof POSIBLE_USER_STATES)[keyof typeof POSIBLE_USER_STATES] | User

interface State {
  user: POSIBLE_USER_STATES_TYPE
  loading: boolean
  error: null | Error
  login: (formData: FormData) => Promise<void>
  logout: () => Promise<void>
  getCurrentUser: () => Promise<void>
}

export const useUserStore = create<State>((set) => {
  return {
    user: POSIBLE_USER_STATES.NOT_KNOWN,
    loading: false,
    error: null,

    login: async (formData: FormData) => {
      set({ loading: true, error: null })

      endpoints.AUTH.LOGIN(formData)
        .then((user) => {
          set({ user })
        })
        .catch((err) => {
          set({ error: err })
        })
        .finally(() => {
          set({ loading: false })
        })
    },

    logout: async () => {
      set({ loading: true, error: null })

      endpoints.AUTH.LOGOUT()
        .then(() => {
          set({ user: POSIBLE_USER_STATES.NOT_LOGGED })
        })
        .catch((err) => {
          set({ error: err })
        })
        .finally(() => {
          set({ loading: false })
        })
    },

    getCurrentUser: async () => {
      set({ loading: true, error: null })

      fetch('http://localhost:5000/auth/user', {
        method: 'GET',
        credentials: 'include'
      })
        .then(async (res) => {
          if (!res.ok) throw new Error('Not logged')
          return await res.json()
        })
        .then((user) => {
          set({ user })
        })
        .catch((err) => {
          set({ error: err, user: POSIBLE_USER_STATES.NOT_LOGGED })
        })
        .finally(() => {
          set({ loading: false })
        })
    }
  }
})
