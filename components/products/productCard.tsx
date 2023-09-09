export function ProductCard () {
  return <article className="w-full cursor-pointer group aspect-square rounded-md overflow-hidden
   relative flex justify-center items-center">

    {/*         BACKGROUND          */}
    <img src='/product-background.png' className="h-full w-full absolute left-0 top-0 object-fill [filter:_invert(1)_brightness(.09)]
    group-hover:scale-110 group-hover:rotate-1 transition-transform select-none" />

    <img src='/pc.png' className="h-3/4 w-3/4 relative z-10 m-auto object-contain" />

    {/*         BORDER          */}
    <div className="h-full w-full opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 left-0
    border-2 border-transparent [border-image:_linear-gradient(to_bottom_right,yellow,_red,_yellow)_5] bg-clip-border" />

    <div className="border border-neutral-700 bg-black rounded-full py-1
     pl-5 absolute bottom-2 left-2 flex items-center gap-3 font-semibold text-sm">
      <span >Pc Master Race</span>
      <div className="bg-gradient-to-br from-logo-yellow/40 to-logo-red/40  rounded-full px-3 py-1 mr-1 ">
        $150
      </div>
    </div>

  </article>
}
