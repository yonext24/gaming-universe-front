export interface User {
  id: number
  first_name: string
  last_name: string
  username: string
  active: boolean
  email: string
  role: 'admin' | 'user'
}
