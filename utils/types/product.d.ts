interface ProductBase {
  name: string
  price: number
  description: string
  stock: number
  category_id: int
}

export interface ProductCreate extends ProductBase {
  image: File
  thumbnailImage: File
}

export interface Product extends ProductBase {
  id: int
  images: {
    image: string
    thumbnailImage: string
  }
}
