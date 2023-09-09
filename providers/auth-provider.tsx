'use client'

import { useEffect } from 'react'
import { useUserStore } from '../store/user/user'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getCurrentUser = useUserStore(s => s.getCurrentUser)

  useEffect(() => {
    // if (user != null) return

    void getCurrentUser()
  }, [])

  return <>
    {children}
  </>
}
