import clsx from 'clsx'
import { type FC } from 'react'
import style from './Button.module.css'

interface Props {
  label: string
  primary?: boolean
  disabled?: boolean
  onClick?: () => any
}

const Button: FC<Props> = ({ label, disabled, primary, onClick }) =>
  <button
    onClick={onClick}
    disabled={disabled ?? false}
    className={clsx(
      style.button,
      primary === true && style.buttonPrimary)}>
    {label}
  </button>

export default Button
