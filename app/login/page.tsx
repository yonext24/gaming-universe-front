import Link from 'next/link'
import { LoginForm } from '../../components/forms/login-form'

export default function Page () {
  return <main className="flex justify-center items-center">
    <div className="max-w-sm bg-black rounded-lg w-full flex flex-col px-6 pb-8 pt-8">

      <h1 className='text-3xl text-center'>Log In</h1>
      <p className='text-center mt-4 mb-12 flex gap-1 mx-auto'>
        Nuevo usuario?
        <Link href='/register' className='text-logo-yellow hover:underline'>Regístrate</Link>
      </p>

      <LoginForm />

    </div>
  </main>
}
