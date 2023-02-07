import { type FC } from 'react'
import style from './CheckBox.module.css'

interface Props {
  label: string
  radio?: boolean
  disabled?: boolean
  checked?: boolean
  name?: string
  onChange: (checked: boolean) => void
}

const CheckBox: FC<Props> = ({ label, disabled, radio, onChange, checked, name }) =>
  <label className={style.checkBox}>
    <input
      name={name}
      checked={checked}
      disabled={disabled}
      onChange={(e) => { onChange(e.target.checked) }}
      type={radio === true ? 'radio' : 'checkbox'} />

    <div className={style.label}>
      {label}
    </div>
  </label>

export default CheckBox
