'use client'

import { sections } from './admin-aside'
import { AsideSector } from './aside-sector'

export default function AsideMobile() {
  return (
    <aside className="bg-black h-screen flex flex-col w-[var(--admin-sidebar-width)] px-2 min-[1200px]:px-4 [&>*:first-of-type]:!mt-0">
      {sections.map(({ id, ...sector }) => (
        <AsideSector key={id} {...sector} />
      ))}
    </aside>
  )
}
