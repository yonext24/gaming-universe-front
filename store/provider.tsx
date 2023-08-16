'use client'
import { Provider as DefaultProvider } from 'react-redux'
import { store } from '.'

export function Provider ({ children }: { children: React.ReactNode }) {
  return <DefaultProvider store={store}>{children}</DefaultProvider>
}
