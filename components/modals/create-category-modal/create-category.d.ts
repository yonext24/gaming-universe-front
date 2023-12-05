import { type Category } from '@t/categories'

export interface CreateCategoryModalProps {
  closeModal: () => void
  category: Category
}
