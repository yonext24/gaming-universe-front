/* eslint-disable @typescript-eslint/consistent-type-assertions */

import { CategoriesTree, Category, type CategoryCreate } from '@t/categories'
import { type navEntryCategoryType } from '../components/layout/navbar/link-entrys/link-entrys'
import { appFetch } from './fetchUtils'
import { Product } from '@t/product'

export const isProduction = process.env.NODE_ENV === 'production'

export const MAIN_URL = isProduction ? '' : 'http://localhost:5000'

export const endpoints = {
  PRODUCTS: {
    GET_ALL: async ({ category }: { category?: number }): Promise<Product[]> =>
      await appFetch(
        `${MAIN_URL}/products${
          category !== undefined ? `?category_id=${category}&subcategories=true` : ''
        }`,
        {
          method: 'GET'
        }
      ),
    CREATE: async (product: FormData) =>
      await appFetch(`${MAIN_URL}/products`, {
        method: 'POST',
        body: product
      })
  },

  CATEGORIES: {
    GET_ALL: async () =>
      await appFetch(`${MAIN_URL}/categories?hierarchy=true`, { method: 'GET' }),
    GET_ONE: async (category: navEntryCategoryType) =>
      await appFetch(`${MAIN_URL}/categories/${category}`, { method: 'GET' }),
    CREATE: async (category: CategoryCreate) =>
      await appFetch(`${MAIN_URL}/categories`, {
        method: 'POST',
        body: JSON.stringify(category)
      })
  },

  AUTH: {
    LOGOUT: async () =>
      await appFetch(`${MAIN_URL}/auth/session`, {
        method: 'DELETE',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
      }),

    LOGIN: async (formData: FormData) => {
      return await appFetch('http://localhost:5000/auth/login', {
        body: formData,
        method: 'POST',
        credentials: 'include',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
      })
    },
    CHECK_SESSION: async () =>
      await appFetch(`${MAIN_URL}/auth/session`, { method: 'GET' })
  }
}
