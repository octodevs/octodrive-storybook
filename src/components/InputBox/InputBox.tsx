import clsx from 'clsx'
import style from './InputBox.module.css'
import { type FC } from 'react'

interface Props {
  type?: 'text' | 'password'
  placeholder?: string
  value?: string
  disabled?: boolean
  onChange?: (value: string) => any
}

const InputBox: FC<Props> = ({ type, value, onChange, placeholder, disabled }) =>
  <input
    value={value}
    disabled={disabled}
    placeholder={placeholder}
    onChange={(e) => { onChange?.(e.target.value) }}
    className={clsx(style.inputBox)} type={type ?? 'text'} />

export default InputBox
