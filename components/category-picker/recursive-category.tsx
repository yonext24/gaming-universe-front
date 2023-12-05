import { DownArrowIcon } from '@components/icons'
import { type CategoriesTree, type Category as CategoryType } from '@t/categories'
import { useState } from 'react'
import { CategoryActionButton } from './category-action-button'

interface CategoryProps {
  category: CategoriesTree
  onChoose?: (category: CategoryType) => void
  create?: (category: CategoryType) => Promise<void>
}

export const RecursiveCategory = ({ category, onChoose, create }: CategoryProps) => {
  const [open, setOpen] = useState<boolean>(false)

  if (Object.entries(category).length === 0) return null

  const [, categoryData] = Object.entries(category)[0]
  const { name, id, parent_id, children, parsedName } = categoryData

  const handleClick = () => {
    setOpen(!open)
  }

  const handleChoose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onChoose?.({ name, id, parent_id, parsedName })
  }

  return (
    <div className="border border-white rounded my-1 cursor-pointer bg-black">
      <div onClick={handleClick} className="py-2 pl-2 flex justify-between items-center">
        <span>{parsedName}</span>
        <div className="flex gap-4 items-center">
          {onChoose != null && (
            <button
              type="button"
              onClick={handleChoose}
              className="border border-white bg-white text-black py-1 px-3 rounded transition-colors hover:bg-black hover:text-white"
            >
              Choose
            </button>
          )}
          <DownArrowIcon className={`h-4 w-4 transition-transform mr-2 ${open ? '' : '-rotate-90'}`} />
        </div>
      </div>
      {open && (
        <div className="px-2 [&>*:last-of-type]:mb-2">
          {create != null && (
            <CategoryActionButton
              handleClick={() => {
                void create({ name, id, parent_id, parsedName: '' })
              }}
            >
              + Add Category
            </CategoryActionButton>
          )}
          {Object.entries(children).map((cat, index) => {
            return (
              <RecursiveCategory category={Object.fromEntries([cat])} onChoose={onChoose} create={create} key={index} />
            )
          })}
        </div>
      )}
    </div>
  )
}
