import { EmailIcon } from '../../../icons/email'
import { LocationIcon } from '../../../icons/location'
import { PhoneIcon } from '../../../icons/phone'

export function MediaEntrys() {
  return (
    <div
      className="flex col-[1/3] row-[1] gap-x-5 bg-gradient-to-b from-neutral-900 to-black text-gray-300 justify-end text-xs px-2
  [&>#entry]:flex [&>#entry]:gap-1 [&>#entry]:items-center"
    >
      <div id="entry">
        <EmailIcon width={19} height={19} />
        <span>yonielkpo@gmail.com</span>
      </div>
      <div id="entry">
        <PhoneIcon width={16} height={16} />
        <span>1126665538</span>
      </div>
      <div id="entry">
        <LocationIcon width={16} height={16} />
        <span>Capital Federal</span>
      </div>
    </div>
  )
}
