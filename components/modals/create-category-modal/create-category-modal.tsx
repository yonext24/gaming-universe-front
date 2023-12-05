import { FormInput } from '@components/forms/form-input/form-input'
import { useForm } from 'react-hook-form'
import { SubmitButton } from '@components/forms/submit-button'
import { FormErrorMessage } from '@components/forms/form-error-message'
import { endpoints } from '../../../utils/endpoints'
import { toast } from 'react-toastify'
import { useCategoriesStore } from '../../../store/categories/categories'
import { type CreateCategoryModalProps } from './create-category'

interface FormValues {
  name: string
  parsedName: string
}

export function CreateCategory({ closeModal, category }: CreateCategoryModalProps) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError
  } = useForm<FormValues>()

  const getAllCategories = useCategoriesStore((s) => s.getAllCategories)

  const onSubmit = async (data: FormValues) => {
    try {
      await endpoints.CATEGORIES.CREATE({ ...data, parent_id: category.id })
      toast.success('Category created successfully.')
      await getAllCategories()
      closeModal()
    } catch (e) {
      const errMessage = e instanceof Error ? e.message : 'Something went wrong.'
      setError('root.fetchError', { message: errMessage })
    }
  }

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
      className="bg-neutral-950 rounded-md flex flex-col gap-4 p-6 max-w-[400px] w-full"
    >
      <h3 className="text-2xl">Create category inside {category.name}</h3>
      <FormInput
        placeholder="Name"
        autoFocus
        {...register('name', {
          required: { value: true, message: 'Name is required.' },
          maxLength: { value: 25, message: 'Name is too long.' }
        })}
      />
      <FormInput
        placeholder="Visible name"
        {...register('parsedName', {
          required: { value: true, message: 'Visible name is required.' },
          maxLength: { value: 25, message: 'Visible name is too long.' }
        })}
      />
      <FormErrorMessage errors={errors} />
      <SubmitButton loading={isSubmitting} text="Create category" />
    </form>
  )
}
