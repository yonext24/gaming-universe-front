import { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string
}

export function SidebarRightIcon({ className, ...props }: IconProps) {
  return (
    <svg
      stroke="red"
      viewBox="0 0 24 24"
      className={`w-6 h-6 ${className ?? ''}`}
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={1.5}>
        <rect width={18} height={18} x={3} y={3} data-name="Square" rx={2} ry={2} />
        <path d="M15 21V3" />
      </g>
    </svg>
  )
}
