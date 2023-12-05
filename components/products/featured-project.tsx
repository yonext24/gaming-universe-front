export function FeaturedProject() {
  return (
    <article className="w-full cursor-pointer aspect-square group shadow-md border-neutral-800 border rounded-md overflow-hidden relative flex justify-center items-center">
      <img
        src="/product-background.png"
        className="h-full w-full absolute left-0 top-0 object-fill [filter:_invert(1)_brightness(.09)]
    group-hover:scale-110 group-hover:rotate-1 transition-transform"
      />

      <img src="/pc.png" className="h-3/4 w-3/4 relative z-10 m-auto object-contain" />

      <div
        className="h-full w-full opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 left-0
    border-2 border-transparent [border-image:_linear-gradient(to_bottom_right,yellow,_red,_yellow)_5] bg-clip-border"
      />
    </article>
  )
}
