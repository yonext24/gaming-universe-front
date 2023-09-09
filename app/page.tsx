import { ProductCard } from '../components/products/productCard'

export default function Home () {
  return (
    <main className="grid grid-cols-6 grid-rows-2 gap-4 p-6 min-h-[calc(100vh-96px)]">

      <div className='row-start-1 row-end-3 col-span-4'>
        <ProductCard />
      </div>
      <div className='col-span-2 row-start-1 row-end-3 gap-4 flex flex-col'>
        <ProductCard />
        <ProductCard />
      </div>

    </main>
  )
}
