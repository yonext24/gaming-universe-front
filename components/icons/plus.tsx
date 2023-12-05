import { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string
}

export function PlusIcon({ className, ...props }: IconProps) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className ?? ''}`}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )
}
