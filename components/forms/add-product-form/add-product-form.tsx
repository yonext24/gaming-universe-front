'use client'

import { type InputsType } from '@t/inputs'
import { type AddProductFormValues, useAddProduct } from './use-add-product'
import { FormInput } from '../form-input/form-input'
import { Controller } from 'react-hook-form'
import { CategoryPicker } from '@components/category-picker/category-picker'
import { SubmitButton } from '../submit-button'
import { FormErrorMessage } from '../form-error-message'

export function AddProductForm() {
  const { handleSub, handleSubmit, register, control, formState, all } = useAddProduct()

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(handleSub)} className="flex flex-col py-6 px-6 gap-2">
      {inputs.map((el) => (
        <FormInput key={el.id} {...register(el.id, el.validations)} {...el} />
      ))}
      <Controller
        control={control}
        name="category"
        rules={{ required: { value: true, message: 'Category is required' } }}
        render={({ field: { onChange, value } }) => {
          return (
            <>
              <label htmlFor="category" className="text-3xl mt-3">
                {value?.name == null
                  ? 'Select a category for your product'
                  : `Selected category: ${value.parsedName}`}
              </label>
              <CategoryPicker
                loading={all.status === 'loading'}
                error={all.error}
                categories={all.categories}
                onChoose={onChange}
              />
            </>
          )
        }}
      />
      <SubmitButton loading={formState.isSubmitting} text="Add Product" />
      <FormErrorMessage errors={formState.errors} />
    </form>
  )
}

const inputs: Array<InputsType<keyof AddProductFormValues>> = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    validations: {
      maxLength: { value: 20, message: 'Name is too long' },
      required: { value: true, message: 'Name is required' }
    }
  },
  {
    id: 'price',
    name: 'price',
    type: 'number',
    placeholder: 'Price',
    validations: {
      valueAsNumber: true,
      maxLength: { value: 200, message: 'Price is too long' },
      required: { value: true, message: 'Price is required' }
    }
  },
  {
    id: 'description',
    name: 'description',
    type: 'text',
    placeholder: 'Description',
    validations: {
      maxLength: { value: 20, message: 'Description is too long' },
      required: { value: true, message: 'Description is required' }
    }
  },
  {
    id: 'stock',
    name: 'stock',
    type: 'number',
    placeholder: 'Stock',
    defaultValue: 1,
    validations: {
      min: { value: 0, message: 'Stock must be greater than 0' },
      valueAsNumber: true
    }
  },
  {
    id: 'image',
    name: 'image',
    label: 'Product Image',
    type: 'file',
    placeholder: 'Image',
    validations: {
      required: { value: true, message: 'Image is required' }
    }
  }
]
