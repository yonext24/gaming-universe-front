/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect } from 'react'
import { useUserStore } from '../store/user/user'
import { useLayoutStore } from '../store/layout/layout'

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getCurrentUser = useUserStore((s) => s.getCurrentUser)
  const setScreenData = useLayoutStore((s) => s.setScreenData)

  useEffect(() => {
    // if (user != null) return
    void getCurrentUser()

    if (window == null) return

    setScreenData(window.innerWidth, window.innerHeight)

    const handleResize = (e: Event) => {
      const target = e.target as Window
      setScreenData(target.innerWidth, target.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <>{children}</>
}
