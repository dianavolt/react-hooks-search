import React from 'react'
import moxios from 'moxios'

import SearchPage from '.'

moxios.install()

const testURL = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=google&limit=50'
const testResponse = ["google",["Google","Google Maps","Google Chrome","Google Play","Google Earth","Google Search","Google Drive","Google Translate","Google Chrome version history","Google+","Google Workspace","Google logo","Google Glass","Google Doodle","Google Books","Google Talk","Google Nest","Google Voice","Google Nexus","Google Classroom","Google Stadia","Google Street View","Google Pixel","Google data centers","Google Ads","Google Fiber","Google Docs","Google Nest (smart speakers)","Google Pay","Google Arts & Culture","Google Cloud Platform","Google Scholar","Google China","Google Slides","Google AdSense","Google bombing","Google LLC v. Oracle America, Inc.","Google Camera","Google Wave","Google Assistant","Google Analytics","Google Play Music","Google Summer of Code","Google's Ideological Echo Chamber","Google Lunar X Prize","Google I/O","Google Meet","Google Street View privacy concerns","Google App Engine","Google Sheets"],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["https://en.wikipedia.org/wiki/Google","https://en.wikipedia.org/wiki/Google_Maps","https://en.wikipedia.org/wiki/Google_Chrome","https://en.wikipedia.org/wiki/Google_Play","https://en.wikipedia.org/wiki/Google_Earth","https://en.wikipedia.org/wiki/Google_Search","https://en.wikipedia.org/wiki/Google_Drive","https://en.wikipedia.org/wiki/Google_Translate","https://en.wikipedia.org/wiki/Google_Chrome_version_history","https://en.wikipedia.org/wiki/Google%2B","https://en.wikipedia.org/wiki/Google_Workspace","https://en.wikipedia.org/wiki/Google_logo","https://en.wikipedia.org/wiki/Google_Glass","https://en.wikipedia.org/wiki/Google_Doodle","https://en.wikipedia.org/wiki/Google_Books","https://en.wikipedia.org/wiki/Google_Talk","https://en.wikipedia.org/wiki/Google_Nest","https://en.wikipedia.org/wiki/Google_Voice","https://en.wikipedia.org/wiki/Google_Nexus","https://en.wikipedia.org/wiki/Google_Classroom","https://en.wikipedia.org/wiki/Google_Stadia","https://en.wikipedia.org/wiki/Google_Street_View","https://en.wikipedia.org/wiki/Google_Pixel","https://en.wikipedia.org/wiki/Google_data_centers","https://en.wikipedia.org/wiki/Google_Ads","https://en.wikipedia.org/wiki/Google_Fiber","https://en.wikipedia.org/wiki/Google_Docs","https://en.wikipedia.org/wiki/Google_Nest_(smart_speakers)","https://en.wikipedia.org/wiki/Google_Pay","https://en.wikipedia.org/wiki/Google_Arts_%26_Culture","https://en.wikipedia.org/wiki/Google_Cloud_Platform","https://en.wikipedia.org/wiki/Google_Scholar","https://en.wikipedia.org/wiki/Google_China","https://en.wikipedia.org/wiki/Google_Slides","https://en.wikipedia.org/wiki/Google_AdSense","https://en.wikipedia.org/wiki/Google_bombing","https://en.wikipedia.org/wiki/Google_LLC_v._Oracle_America,_Inc.","https://en.wikipedia.org/wiki/Google_Camera","https://en.wikipedia.org/wiki/Google_Wave","https://en.wikipedia.org/wiki/Google_Assistant","https://en.wikipedia.org/wiki/Google_Analytics","https://en.wikipedia.org/wiki/Google_Play_Music","https://en.wikipedia.org/wiki/Google_Summer_of_Code","https://en.wikipedia.org/wiki/Google%27s_Ideological_Echo_Chamber","https://en.wikipedia.org/wiki/Google_Lunar_X_Prize","https://en.wikipedia.org/wiki/Google_I/O","https://en.wikipedia.org/wiki/Google_Meet","https://en.wikipedia.org/wiki/Google_Street_View_privacy_concerns","https://en.wikipedia.org/wiki/Google_App_Engine","https://en.wikipedia.org/wiki/Google_Sheets"]]

moxios.stubRequest(testURL, {
  status: 200,
  responseText: testResponse
})

const emptyTestUrl = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=asjdlksjdgl&limit=50'
const emptyTestResponse = ["asjdlksjdgl",[],[],[]]

moxios.stubRequest(emptyTestUrl, {
  status: 200,
  responseText: emptyTestResponse
})

export default {
  title: 'Pages/SearchPage',
  component: SearchPage,
}

const Template = (args) => <SearchPage {...args} />

export const Primary = Template.bind({})
Primary.args = {
location: {
  search: '?query=google'
  }
}

export const EmptyQuery = Template.bind({})
Primary.args = {
location: {
  search: '?query=asjdlksjdgl'
  }
}
