import React from 'react'

import SearchPage from '.'

export default {
  title: 'Pages/SearchPage',
  component: SearchPage,
}

const Template = (args) => <SearchPage {...args} />

export const Primary = Template.bind({})
Primary.args = {
location: {
  search: '?query=testing'
  }
}

export const EmptyQuery = Template.bind({})
Primary.args = {
location: {
  search: '?query='
  }
}
