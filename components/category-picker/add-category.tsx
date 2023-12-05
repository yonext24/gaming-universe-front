'use client'

import { useCategoriesStore } from '../../store/categories/categories'
import { CategoryPicker } from './category-picker'
import { useEffect } from 'react'
import { type Category as CategoryType } from '@t/categories'

export function AddCategory({
  create
}: {
  create: (category: CategoryType) => Promise<void>
}) {
  const { all, getAllCategories } = useCategoriesStore()
  const { categories, error, status } = all

  useEffect(() => {
    void getAllCategories()
  }, [getAllCategories])

  return (
    <div className="flex flex-col mt-6 gap-4">
      <h3 className="text-3xl">Add Categories</h3>
      <CategoryPicker
        loading={status === 'loading'}
        error={error}
        categories={categories}
        create={create}
      />
    </div>
  )
}
