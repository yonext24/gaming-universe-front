import { LeftRoundedArrowIcon } from '@components/icons'
import { sections } from './admin-aside'
import { AsideOption } from './aside-option'
import { AsideSector } from './aside-sector'
import { AsideUserEntry } from './aside-user-entry'

export function RawAside() {
  return (
    <aside className="bg-black flex flex-col w-full border-t border-neutral-800 px-2 min-[1200px]:px-4">
      <AsideOption
        href="/"
        icon={LeftRoundedArrowIcon}
        title="Back to home"
        style={{ paddingTop: 2, paddingBottom: 2, margin: '4px 0' }}
      />
      <AsideUserEntry />

      <div className="h-px bg-neutral-800 w-full mb-1 mt-4" />

      {sections.map(({ id, ...sector }) => (
        <AsideSector key={id} {...sector} />
      ))}
    </aside>
  )
}
