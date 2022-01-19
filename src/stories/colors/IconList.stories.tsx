import { ColorExample } from './ColorList'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Colors/List',
  component: ColorExample,
} as Meta

const Template: Story<void> = () => <ColorExample />

export const List = Template.bind({})
