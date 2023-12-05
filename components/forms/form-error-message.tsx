import { type FieldErrors } from 'react-hook-form'

interface Props {
  className?: string
  errors: FieldErrors
}

export function FormErrorMessage({ errors, className }: Props) {
  const error = Object.entries(errors)[0]
  let message

  if (error?.[1]?.message != null) {
    if (typeof error[1].message === 'string') {
      message = error?.[1].message
    }
  } else {
    if (error === undefined) return
    if (error[0] === 'root') {
      message = errors?.root?.fetchError?.message ?? 'Something went wrong.'
    }
  }

  return (
    <>
      {message !== undefined && <span className={`text-red-500 text-center ${className ?? ''}`}>{message ?? ''}</span>}
    </>
  )
}
