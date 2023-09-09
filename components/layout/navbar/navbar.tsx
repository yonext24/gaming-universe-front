import Link from 'next/link'
import { Logo } from '../../common/Logo'
import { LinkEntrys } from './link-entrys'
import { MediaEntrys } from './media-entrys'

export function Navbar () {
  return <nav className='grid grid-rows-2 grid-cols-[auto_1fr] pb-4 bg-black'>
    <Link href='/' className='row-[1/3] col-[1] mt-4'>
      <Logo />
    </Link>
    <MediaEntrys />
    <LinkEntrys />
  </nav>
}
