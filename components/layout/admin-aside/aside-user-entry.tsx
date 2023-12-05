import { SmallUserImage } from '@components/user/small-user-image/small-user-image'
import { AsideOption } from './aside-option'

export function AsideUserEntry() {
  return (
    <div
      className="relative cursor-pointer bg-transparent before:transition-opacity before:absolute before:left-0 before:top-0 before:w-full before:h-full 
      before:rounded before:bg-gradient-to-br before:from-logo-red/40 before:to-logo-yellow/40 before:opacity-50 hover:before:opacity-100"
    >
      <AsideOption
        href="/"
        icon={SmallUserImage}
        title="John doe"
        style={{
          paddingTop: 2,
          paddingBottom: 2,
          margin: '4px 0',
          backgroundColor: 'transparent',
          alignItems: 'center'
        }}
      />
    </div>
  )
}
