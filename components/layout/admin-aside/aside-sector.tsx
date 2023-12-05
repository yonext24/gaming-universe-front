import type { AsideSector } from './admin-aside.d'
import { AsideOption } from './aside-option'

export function AsideSector({ options, title }: AsideSector) {
  return (
    <div className="flex flex-col mt-3">
      <span className="text-neutral-400">{title}</span>
      <div className="flex flex-col gap-1">
        {options.map((option) => (
          <AsideOption key={option.href} {...option} />
        ))}
      </div>
    </div>
  )
}
