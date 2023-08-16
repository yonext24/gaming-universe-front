import { Logo } from '../../components/common/Logo'
import { LoginForm } from '../../components/forms/login-form'

export default function Page () {
  return <main className="flex justify-center items-center">
    <div className="max-w-sm bg-black rounded-lg w-full flex flex-col px-6 py-14">

      <div className='flex justify-between w-full mb-16'>
        <h1 className='text-4xl'>Login</h1>
        <Logo />
      </div>

      <LoginForm />

    </div>
  </main>
}
