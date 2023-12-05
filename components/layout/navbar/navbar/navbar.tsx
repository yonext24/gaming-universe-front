import Link from 'next/link'
import { Logo } from '../../../common/Logo'
import { LinkEntrys } from '../link-entrys/link-entrys'
import { MediaEntrys } from '../media-entrys/media-entrys'

export function Navbar() {
  return (
    <nav
      id="main-navbar"
      aria-label="navbar"
      className="grid grid-rows-2 grid-cols-[auto_1fr] bg-black relative"
    >
      <Link href="/" className="row-[1/3] col-[1] mt-4">
        <Logo />
      </Link>
      <MediaEntrys />
      <LinkEntrys />
    </nav>
  )
}
