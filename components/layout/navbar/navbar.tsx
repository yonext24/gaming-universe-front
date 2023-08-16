import { Logo } from '../../common/Logo'
import { LinkEntrys } from './link-entrys'
import { MediaEntrys } from './media-entrys'

export function Navbar () {
  return <nav className='grid grid-rows-2 grid-cols-[auto_1fr] pb-4 bg-black'>
    <div className='row-[1/3] col-[1] mt-4'>
      <Logo />
    </div>
    <MediaEntrys />
    <LinkEntrys />
  </nav>
}
