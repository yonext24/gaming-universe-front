import { ComicFont } from '../fonts/fonts'

export function Logo({ className }: { className?: string }) {
  return (
    <div className="flex items-center">
      <img src="/logo.png" alt="Logo" className="h-12 relative" height={48} width={48} />
      <div className="relative -ml-2 select-none">
        <span
          style={ComicFont.style}
          className="font-extrabold [line-height:.87] text-3xl tracking-wider absolute top-0 left-0 text-white comic h-full w-full"
        >
          Gaming Universe
        </span>
        <span
          style={ComicFont.style}
          className="font-extrabold [line-height:.87] text-transparent tracking-wider text-3xl"
        >
          Gaming <br /> Universe
        </span>
        <h1
          style={ComicFont.style}
          className="z-10 font-extrabold [line-height:.87] text-transparent tracking-wider absolute top-0 left-0 w-full h-full text-3xl bg-gradient-to-b animate-shine [background-size:auto_200%] bg-clip-text from-logo-red via-logo-yellow to-logo-red"
        >
          Gaming <br /> Universe
        </h1>
      </div>
    </div>
  )
}
