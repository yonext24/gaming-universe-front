/* eslint-disable @typescript-eslint/no-misused-promises */

type ReturnType = void | Promise<void>

export function CategoryActionButton({
  children,
  handleClick
}: {
  children: React.ReactNode
  handleClick: () => ReturnType
}) {
  return (
    <button
      onClick={handleClick}
      type="button"
      className="border border-white bg-white text-black py-1 px-3 rounded transition-colors hover:bg-black hover:text-white"
    >
      {children}
    </button>
  )
}
