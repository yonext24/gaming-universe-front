import { type Category } from '@t/categories'
import { useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useCategoriesStore } from '../../../store/categories/categories'
import { type ProductCreate } from '@t/product'
import { endpoints } from '../../../utils/endpoints'
import { toast } from 'react-toastify'
import { CompressImage } from '../../../utils/compress'

export interface AddProductFormValues {
  name: string
  price: number
  description: string
  image: FileList
  category: Category
  stock: number
}

export function useAddProduct() {
  const { handleSubmit, register, control, formState, reset } = useForm<AddProductFormValues>({
    disabled: false
  })
  const { all, getAllCategories } = useCategoriesStore()

  useEffect(() => {
    void getAllCategories()
  }, [])

  const handleSub = useCallback(async ({ category: rawCategory, image, ...data }: AddProductFormValues) => {
    const category_id = rawCategory.id

    const thumbnailImage = await CompressImage(image[0], { width: 500, height: 500 })

    const product: ProductCreate = {
      ...data,
      category_id,
      image: image[0],
      thumbnailImage
    }

    const formData = new FormData()
    for (const key in product) {
      formData.append(key, (product as any)[key])
    }

    try {
      await endpoints.PRODUCTS.CREATE(formData)

      toast.success('Product created successfully')
      reset()
    } catch (err) {
      const errMessage = err instanceof Error ? err.message : 'Something went wrong'
      toast.error(errMessage)
    }
  }, [])

  return { handleSub, handleSubmit, register, control, formState, all }
}
