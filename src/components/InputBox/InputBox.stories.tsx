import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import InputBox from './InputBox'

const InputBoxStory: ComponentMeta<typeof InputBox> = {
  component: InputBox,
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'select' },
      defaultValue: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' }
      }
    }
  }
}

export default InputBoxStory

const Template: ComponentStory<typeof InputBox> = (args) =>
  <InputBox {...args}/>

export const Default = Template.bind({})

Default.args = {
  type: 'text',
  placeholder: 'Placeholder',
  disabled: false
}

export const Disabled = Template.bind({})

Disabled.args = {
  type: 'text',
  placeholder: 'Placeholder',
  disabled: true
}
