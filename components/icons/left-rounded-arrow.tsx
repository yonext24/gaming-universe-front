import { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  className?: string
}

export function LeftRoundedArrowIcon({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className={`w-5 h-5 ${className ?? ''}`}
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m9 10-5 5 5 5" />
      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
    </svg>
  )
}
