import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import CheckBox from './CheckBox'

const CheckBoxStory: ComponentMeta<typeof CheckBox> = {
  component: CheckBox
}

export default CheckBoxStory

const Template: ComponentStory<typeof CheckBox> = (args) =>
  <CheckBox {...args}/>

export const Default = Template.bind({})

Default.args = {
  radio: false,
  label: 'CheckBox',
  disabled: false
}

export const Disabled = Template.bind({})

Disabled.args = {
  radio: false,
  label: 'CheckBox',
  disabled: true
}

const RadioTemplate: ComponentStory<typeof CheckBox> = (args) =>
  <>
    <CheckBox {...args}/>
    <CheckBox {...args}/>
    <CheckBox {...args}/>
  </>

export const Radio = RadioTemplate.bind({})

Radio.args = {
  radio: true,
  disabled: false,
  radioGroup: 'group1',
  label: 'Radio'
}

export const RadioDisabled = RadioTemplate.bind({})

RadioDisabled.args = {
  radio: true,
  disabled: true,
  radioGroup: 'group1',
  label: 'Radio'
}
