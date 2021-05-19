import React from 'react';
import { Icon } from '../../components';

const Template = (args) => <Icon {...args} />;

export const User = Template.bind({});
User.args = { icon: 'user' };

export const Cart = Template.bind({});
Cart.args = { icon: 'cart' };

export const Default = Template.bind({});
Default.args = { icon: 'unknown' };

export default {
  title: 'components/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color', defaultValue: '#454545' },
    size: { control: 'text', defaultValue: '1em' }
  },
};
