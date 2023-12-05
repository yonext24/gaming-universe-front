'use client'

import { type navEntryCategoryType, type navEntryType } from '../link-entrys/link-entrys'
import { Spinner } from '../../../common/Spinner'
import { ImageWithLoader } from '@components/image-with-loaders/image-with-loader'
import { useCategoryMenu } from './use-category-menu'

type Props = navEntryType & {
  closeMenu: () => void
  mantainMenu: () => void
  category: navEntryCategoryType
}

export function CategoryMenu({ text, category, id, mantainMenu, closeMenu }: Props) {
  const { productImage, categories, status } = useCategoryMenu({ category, id })

  return (
    <div
      onMouseEnter={mantainMenu}
      onMouseLeave={closeMenu}
      id="container"
      className={`absolute bottom-0 left-1/2 -translate-x-full translate-y-full flex justify-center items-center bg-black rounded z-10 p-2 pl-12`}
    >
      {(() => {
        if (status === 'loading') return <Spinner />
        if (status === 'error') return <div>error</div>
        if (status === 'success') {
          return (
            <div className="flex gap-2">
              <div className="flex flex-col gap-y-2">
                <div className="text-gray-300 text-sm font-bold">{text}</div>
                {categories !== null &&
                  Object.entries(categories[category].children).map((el, id) => (
                    <div className="text-gray-300 text-sm" key={id}>
                      {el[1].parsedName}
                    </div>
                  ))}
              </div>
              <div className="self-stretch w-px bg-neutral-800 ml-4" />
              {productImage != null ? (
                <>
                  <ImageWithLoader
                    alt="Product Image"
                    width={240}
                    height={240}
                    src={productImage}
                    withSkeleton
                    parentClassName="rounded-md overflow-hidden"
                  />
                </>
              ) : (
                <div className="h-[240px] w-[240px] bg-transparent" />
              )}
            </div>
          )
        }
      })()}
    </div>
  )
}
