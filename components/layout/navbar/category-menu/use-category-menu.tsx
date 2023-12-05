/* eslint-disable react-hooks/exhaustive-deps */
import { useCategoriesStore } from '../../../../store/categories/categories'

import { useEffect } from 'react'
import { type navEntryCategoryType } from '../link-entrys/link-entrys'

export function useCategoryMenu({
  category,
  id
}: {
  category: navEntryCategoryType
  id: number
}) {
  const { status, categories } = useCategoriesStore((s) => s[category])
  const productImage = useCategoriesStore((s) => s.categoriesImages[category]) ?? null
  const getSingleCategory = useCategoriesStore((s) => s.getSingleCategory)
  const getCategoryProductImage = useCategoriesStore((s) => s.getCategoryProductImage)

  useEffect(() => {
    if (productImage !== null) return
    void getCategoryProductImage({
      id,
      name: category,
      parsedName: category,
      text: category
    })
  }, [])

  useEffect(() => {
    if (status === 'success') return
    void getSingleCategory(category)
  }, [category, getSingleCategory, status])

  return { categories, productImage, status }
}
