import React from 'react';
import { Navbar } from '../../layouts';

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = { theme: 'default' };

export default {
  title: 'layouts/Navbar',
  component: Navbar
};
