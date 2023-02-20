import { type FC } from 'react'
import style from './CheckBox.module.css'

interface Props {
  label: string
  radio?: boolean
  disabled?: boolean
  checked?: boolean
  radioGroup?: string
  onChange: (checked: boolean) => void
}

export const CheckBox: FC<Props> = ({ label, disabled, radio, onChange, checked, radioGroup }) =>
  <label className={style.checkBox}>
    <input
      checked={checked}
      disabled={disabled}
      onChange={(e) => { onChange(e.target.checked) }}
      name={radio === true ? radioGroup : undefined}
      type={radio === true ? 'radio' : 'checkbox'} />

    <div className={style.label}>
      {label}
    </div>
  </label>

export default CheckBox
