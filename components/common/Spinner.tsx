export function Spinner({ props, className }: { className?: string; props?: React.HTMLAttributes<HTMLDivElement> }) {
  return (
    <div
      className={`animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-logo-yellow rounded-full ${
        className ?? ''
      }`}
      {...props}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
