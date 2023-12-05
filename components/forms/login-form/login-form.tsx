'use client'

import { FormInput } from '../form-input/form-input'
import { FormErrorMessage } from '../form-error-message'
import { Spinner } from '../../common/Spinner'
import { type InputsType } from '@t/inputs'
import { type LoginFormValues, useLoginForm } from './use-login-form'

const inputs: Array<InputsType<keyof LoginFormValues>> = [
  {
    id: 'username',
    name: 'username',
    type: 'text',
    placeholder: 'Username',
    validations: {
      maxLength: { value: 20, message: 'Username is too long' },
      required: { value: true, message: 'Username is required' }
    }
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Password'
  }
]

export function LoginForm() {
  const { register, onSubmit, errors, loading } = useLoginForm()

  console.log({ errors })

  return (
    <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
      {inputs.map((el) => (
        <FormInput key={el.id} {...register(el.id, el.validations)} {...el} />
      ))}

      <button
        type="submit"
        className="h-10 mt-4 bg-neutral-100 text-black font-bold rounded-sm"
      >
        {loading ? <Spinner /> : 'Login'}
      </button>
      <FormErrorMessage errors={errors} />
    </form>
  )
}
