import React from 'react';
import { Button } from '../..';
import { HiRefresh } from 'react-icons/hi';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  size: 'base',
  type: 'primary'
};

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  type: 'secondary'
}

export const White = Template.bind({})
White.args = {
  ...Primary.args,
  type: 'white'
}

const TemplateWithChild = args => <Button {...args}>
  Button
  <HiRefresh className='h-4 w-4'/>
</Button>;

export const WithIcon = TemplateWithChild.bind({});
WithIcon.args = {
  size: 'base',
  type: 'primary'
}

const TemplateWithChildRight = args => <Button {...args}>
  <HiRefresh className='h-4 w-4'/>
  Button
</Button>;

export const WithIconRight = TemplateWithChildRight.bind({});WithIconRight.args = {
  size: 'base',
  type: 'primary'
}