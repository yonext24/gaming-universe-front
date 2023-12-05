export interface CategoryCreate {
  name: string
  parsedName: string
  parent_id: int
}

export interface Category extends CategoryCreate {
  id: int
}

export type CategoriesTree = Record<string, Category & { children: CategoriesTree }>
