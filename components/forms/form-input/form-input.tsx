/* eslint-disable @next/next/no-img-element */
'use client'

import { forwardRef, useState } from 'react'
import { type FormInputTypes } from './form-input-types'

const FileInput = forwardRef<HTMLInputElement, FormInputTypes>((props, ref) => {
  const { id, onChange, label } = props

  const [file, setFile] = useState<null | File>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] as File)
    onChange?.(e)
  }

  return (
    <div className="relative border border-neutral-700 bg-black py-[9px]">
      <label htmlFor={id} className="text-neutral-200 m-2 mb-6">
        {label}
      </label>
      <input id={id} ref={ref} {...props} onChange={handleChange} className="hidden" />

      {file !== null && (
        <div className="w-full flex items-center justify-center my-4">
          <img src={URL.createObjectURL(file)} alt="Uploaded Image" />
        </div>
      )}
    </div>
  )
})

FileInput.displayName = 'FileInput'

export const FormInput = forwardRef<HTMLInputElement, FormInputTypes>((props, ref) => {
  const { placeholder, type, defaultValue, onBlur: localBlur, ...inputProps } = props
  const [hasText, setHasText] = useState(defaultValue !== undefined)

  if (type === 'file') return <FileInput ref={ref} {...props} />

  return (
    <div id="input-father" className="relative border border-neutral-700">
      <input
        ref={ref}
        onBlur={(e) => {
          setHasText(e.target.value !== '')
          localBlur?.(e)
        }}
        onAnimationStart={(e) => {
          if (e.animationName === 'onAutoFillStart') setHasText(true)
          if (e.animationName === 'onAutoFillCancel') setHasText(false)
        }}
        type={type}
        defaultValue={defaultValue}
        placeholder={''}
        {...inputProps}
        className={`py-[9px] outline-none pl-4 bg-black w-full
        clear-webkit-autofill-appearance
      ${
        hasText
          ? '[&~#placeholder]:-translate-y-[170%] [&~#placeholder]:text-xs'
          : '[&:focus~#placeholder]:-translate-y-[170%] [&:focus~#placeholder]:text-xs'
      }`}
      />
      <span
        id="placeholder"
        className="absolute text-sm pointer-events-none select-none top-1/2 -translate-y-1/2 left-4 bg-black px-1 transition-[transform,font-size] ease-in-out"
      >
        {placeholder}
      </span>
    </div>
  )
})

FormInput.displayName = 'FormInput'
