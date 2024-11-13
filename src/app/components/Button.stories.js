
import Button from './Button'

const meta= {
  title: 'Button',
  component: Button,
  argTypes: {
    $variant: {
      description: 'The type of button',
      control: 'inline-radio',
      options: ['primary', 'secondary', ''],
    },
    $isSmall: {
      description: 'A small version of the button',
    },
  },
}

export default meta


export const Primary = {
  args: { $variant: 'primary', children: 'Primary' },
}

export const Secondary = {
  args: { $variant: 'secondary', children: 'Secondary' },
}

export const Small = {
  args: { $isSmall: true, children: 'Small' },
}