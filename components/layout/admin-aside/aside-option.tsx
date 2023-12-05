import { usePathname } from 'next/navigation'
import type { AsideOption } from './admin-aside.d'
import { CSSProperties } from 'react'

type Props = AsideOption & {
  style?: CSSProperties
}

export function AsideOption({ title, href, icon: Icon, style }: Props) {
  const pathname = usePathname()

  const isCurrentRoute = pathname === href

  return (
    <button
      data-current={isCurrentRoute}
      style={style}
      className="text-start px-1 min-[1200px]:px-2 py-2 rounded flex gap-2 transition-colors duration-300 relative text-neutral-400 hover:bg-neutral-800 
      hover:text-white data-[current=true]:bg-neutral-800 data-[current=true]:text-white data-[current=true]:text-white]
      after:bg-logo-yellow after:absolute after:left-0 after:top-0 after:w-[3px] after:h-full after:opacity-0 data-[current=true]:after:opacity-100"
    >
      <Icon />
      <span>{title}</span>
    </button>
  )
}
