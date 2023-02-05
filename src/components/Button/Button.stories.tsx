import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import Button from './Button'

const ButtonStory: ComponentMeta<typeof Button> = {
  component: Button
}

export default ButtonStory

const Template: ComponentStory<typeof Button> = (args) =>
  <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  primary: false,
  label: 'Button',
  disabled: false,
  darkMode: false
}

export const Primary = Template.bind({})

Primary.args = {
  primary: true,
  label: 'Button',
  disabled: false,
  darkMode: false
}

export const DarkMode = Template.bind({})

DarkMode.args = {
  primary: false,
  label: 'Button',
  disabled: false,
  darkMode: true
}

export const Disabled = Template.bind({})

Disabled.args = {
  primary: false,
  label: 'Button',
  disabled: true,
  darkMode: false
}
