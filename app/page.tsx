import { type Product } from '@t/product'
import { ProductCard } from '../components/products/product-card'

const getAllProducts = async () => {
  const res = await fetch('http://localhost:5000/products')
  const data = await res.json()
  return data
}

export default async function Home() {
  const products = await getAllProducts()
  const mainProduct = products[0]
  const relatedProducts = products.slice(1, 3)

  return (
    <main className="grid grid-cols-6 grid-rows-2 gap-4 p-6 min-h-[calc(100vh-96px)]">
      <div className="row-start-1 row-end-3 col-span-4">{products.length > 0 && <ProductCard {...mainProduct} />}</div>
      <div className="col-span-2 row-start-1 row-end-3 gap-4 flex flex-col">
        {relatedProducts.map((p: Product) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </main>
  )
}
