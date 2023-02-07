import { type FC } from 'react'
import style from './Button.module.css'

interface Props {
  label: string
  disabled?: boolean
  onClick?: () => any
}

const Button: FC<Props> = ({ label, disabled, onClick }) =>
  <button
    onClick={onClick}
    disabled={disabled ?? false}
    className={style.button}>
    {label}
  </button>

export default Button
