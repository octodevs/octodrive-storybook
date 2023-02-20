import clsx from 'clsx'
import style from './InputBox.module.css'
import { type FC } from 'react'

interface Props {
  hideText?: boolean
  label?: string
  placeholder?: string
  value?: string
  disabled?: boolean
  error?: string
  onChange?: (value: string) => any
}

export const InputBox: FC<Props> = ({ hideText, label, value, onChange, placeholder, disabled, error }) =>
  <label>
    <p className={style.label}>{label}</p>

    <input
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onChange={(e) => { onChange?.(e.target.value) }}
      className={clsx(style.inputBox, error !== undefined && style.error)}
      type={hideText === true ? 'password' : 'text'} />
  </label>

export default InputBox
