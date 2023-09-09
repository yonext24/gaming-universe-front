import { useUserStore } from '../../../store/user/user'
import Link from 'next/link'

export function UserModal () {
  const logout = useUserStore(s => s.logout)

  const handleLogout = () => {
    void logout()
  }

  return <div className='flex flex-col absolute bottom-0 right-0 translate-y-[calc(100%+5px)] z-50 min-w-full bg-black rounded-md overflow-hidden
  [&>*]:text-start [&>*]:py-[5px] [&>*]:px-2 [&>*]:relative [&>*]:before:absolute [&>*]:before:top-0 [&>*]:before:-left-0 [&>*]:before:w-full
  [&>*]:before:h-full [&>*]:before:bg-gradient-to-br [&>*]:before:from-logo-red/30  [&>*]:before:to-logo-yellow/30 [&>*]:before:-z-10
  [&>*]:before:opacity-0 [&>*]:before:transition-opacity'>
    <Link className='hover:before:opacity-100' href='/perfil'>Perfil</Link>
    <button className='hover:before:opacity-100'>Carrito</button>
    <button onClick={handleLogout} className='hover:before:opacity-100 border-t border-neutral-600'>Cerrar Sesión</button>
  </div>
}
