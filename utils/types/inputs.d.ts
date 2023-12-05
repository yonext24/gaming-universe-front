/* eslint-disable @typescript-eslint/indent */
import { type InputHTMLAttributes } from 'react'
import { type RegisterOptions } from 'react-hook-form'

export interface InputsType<T extends string = string> extends InputHTMLAttributes<HTMLInputElement> {
  id: T
  name: T
  label?: string
  validations?: RegisterOptions
}
