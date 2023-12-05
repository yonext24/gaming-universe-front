import { create } from 'zustand'
import { type CategoriesTree } from '@t/categories.d'
import { endpoints } from '../../utils/endpoints'
import { type navEntryCategoryType } from '../../components/layout/navbar/link-entrys/link-entrys'

interface initialCategoryState {
  status: null | 'loading' | 'error' | 'success'
  categories: CategoriesTree | null
  error: null | string
}

type GetCategoryProductImageProps = {
  id: number
  text: navEntryCategoryType
  parsedName: string
  name: string
}

interface State {
  all: initialCategoryState
  pc: initialCategoryState
  hardware: initialCategoryState
  laptops: initialCategoryState
  categoriesImages: Record<string, string>
  getAllCategories: () => Promise<void>
  addCategory: (category: navEntryCategoryType) => Promise<void>
  getSingleCategory: (category: navEntryCategoryType) => Promise<void>
  getCategoryProductImage: (category: GetCategoryProductImageProps) => Promise<void>
}

export const useCategoriesStore = create<State>()((set) => ({
  all: {
    status: null,
    categories: null,
    error: null
  },
  categoriesImages: {},
  pc: {
    status: null,
    categories: null,
    error: null
  },
  hardware: {
    status: null,
    categories: null,
    error: null
  },
  laptops: {
    status: null,
    categories: null,
    error: null
  },

  getAllCategories: async () => {
    set((state) => ({ ...state, all: { ...state.all, status: 'loading' } }))

    await endpoints.CATEGORIES.GET_ALL()
      .then((categories) => {
        set((state) => ({
          ...state,
          all: { error: null, categories, status: 'success', productImage: null }
        }))
      })
      .catch((err) => {
        console.error({ err })
        set((state) => ({ ...state, all: { ...state.all, status: 'error', error: err } }))
      })
  },

  addCategory: async (category: navEntryCategoryType) => {
    // set((state) => ({ ...state, [category]: { ...state[category], status: 'loading' } }))
    // await endpoints.CATEGORIES.CREATE(category)
    //   .then((categories) => {
    //     set((state) => ({ ...state, all: { error: null, categories, status: 'success' } }))
    //   })
    //   .catch((err) => {
    //     set((state) => ({ ...state, all: { ...state.all, status: 'error', error: err } }))
    //   })
  },

  getSingleCategory: async (category: navEntryCategoryType) => {
    set((state) => ({ ...state, [category]: { ...state[category], status: 'loading' } }))
    await endpoints.CATEGORIES.GET_ONE(category)
      .then((categories) => {
        set((state) => ({
          ...state,
          [category]: { ...state[category], error: null, categories, status: 'success' }
        }))
      })
      .catch((err) => {
        set((state) => ({
          ...state,
          [category]: { ...state[category], status: 'error', error: err }
        }))
      })
  },

  getCategoryProductImage: async (category: GetCategoryProductImageProps) => {
    await endpoints.PRODUCTS.GET_ALL({ category: category.id }).then((products) => {
      if (products.length <= 0) return
      const categoryName = category.text
      const product = products[0]
      const productImage = product.images.thumbnailImage
      console.log({ productImage, categoryName, product })

      set((state) => ({
        ...state,
        categoriesImages: {
          ...state.categoriesImages,
          [categoryName]: productImage
        }
      }))
    })
  }
}))
