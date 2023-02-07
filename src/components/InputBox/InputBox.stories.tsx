import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import InputBox from './InputBox'

const InputBoxStory: ComponentMeta<typeof InputBox> = {
  component: InputBox
}

export default InputBoxStory

const Template: ComponentStory<typeof InputBox> = (args) =>
  <InputBox {...args}/>

export const Default = Template.bind({})

Default.args = {
  hideText: false,
  placeholder: 'Placeholder',
  disabled: false
}

export const Disabled = Template.bind({})

Disabled.args = {
  hideText: false,
  placeholder: 'Placeholder',
  disabled: true
}
