import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex justify-center items-center">
      <Link href="/admin/products/add">Agregar</Link>
    </main>
  )
}
