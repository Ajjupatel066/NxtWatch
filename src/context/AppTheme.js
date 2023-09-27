import React from 'react'

const AppTheme = React.createContext({
  activeTab: 'Home',
  isDarkTheme: false,
  savedVideos: [],
  changeActiveTabId: () => {},
  toggleTheme: () => {},
  addVideo: () => {},
})

export default AppTheme
