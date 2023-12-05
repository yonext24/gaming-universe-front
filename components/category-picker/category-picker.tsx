'use client'

import { type Category as CategoryType, type CategoriesTree } from '@t/categories'
import { RecursiveCategory } from './recursive-category'
import { CategoryActionButton } from './category-action-button'

interface Props {
  loading: boolean
  error: string | null
  categories: null | CategoriesTree
  onChoose?: (category: CategoryType) => void
  create?: (category: CategoryType) => Promise<void>
}

export function CategoryPicker({ categories, loading, error, onChoose, create }: Props) {
  if (loading) return <div>Loading...</div>
  if (error !== null) return <div>Error</div>
  if (categories === null) return null

  if (categories?.root !== undefined) {
    return (
      <div>
        {Object.entries(categories?.root.children).map((cat, index) => {
          const category = Object.fromEntries([cat])
          return (
            <div className="" key={index}>
              <RecursiveCategory category={category} onChoose={onChoose} create={create} />
            </div>
          )
        })}
        {create != null && (
          <CategoryActionButton
            handleClick={() => {
              void create?.({ name: 'root', id: 1, parent_id: null, parsedName: 'Root' })
            }}
          >
            + Add Category
          </CategoryActionButton>
        )}
      </div>
    )
  }

  return (
    <div>
      <RecursiveCategory category={categories} onChoose={onChoose} create={create} />
    </div>
  )
}
