import clsx from 'clsx'
import style from './InputBox.module.css'
import { type FC } from 'react'

interface Props {
  hideText?: boolean
  placeholder?: string
  value?: string
  disabled?: boolean
  onChange?: (value: string) => any
}

const InputBox: FC<Props> = ({ hideText, value, onChange, placeholder, disabled }) =>
  <input
    value={value}
    disabled={disabled}
    placeholder={placeholder}
    onChange={(e) => { onChange?.(e.target.value) }}
    className={clsx(style.inputBox)}
    type={hideText === true ? 'password' : 'text'} />

export default InputBox
