'use client'

import { AddCategory } from '@components/category-picker/add-category'
import { AddProductForm } from '@components/forms/add-product-form/add-product-form'
import { type Category } from '@t/categories'
import { lazy } from 'react'
import { addModal } from 'react-modal-observer'

// eslint-disable-next-line @typescript-eslint/promise-function-async
const CreateCategory = lazy(() =>
  import('@components/modals/create-category-modal/create-category-modal').then(
    ({ CreateCategory }) => ({
      default: CreateCategory
    })
  )
)

export default function Page() {
  const handleChooseCategory = async (category: Category) => {
    addModal(CreateCategory, { category })
  }

  return (
    <main className="grid grid-cols-[1fr,350px]">
      <AddProductForm />
      <aside className="w-full h-full pr-4">
        <AddCategory create={handleChooseCategory} />
      </aside>
    </main>
  )
}
