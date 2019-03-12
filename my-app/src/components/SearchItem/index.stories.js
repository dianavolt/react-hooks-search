import React from 'react';

import SearchItem from '.';

export default {
  title: 'Components/SearchItem',
  component: SearchItem,
}

const Template = (args) => <SearchItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'https://en.wikipedia.org/wiki/Google',
  label: 'Test data for search'
}