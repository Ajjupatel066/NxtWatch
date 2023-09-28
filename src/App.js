import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import HomeRoute from './components/HomeRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoDetails from './components/VideoDetails'

import './App.css'

import AppTheme from './context/AppTheme'

class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'HOME',
    savedVideos: [],
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  toggleTheme = () => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }

  changeActiveTab = active => {
    this.setState({activeTab: active})
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state

    return (
      <AppTheme.Provider
        value={{
          isDarkTheme,
          activeTab,
          toggleTheme: this.toggleTheme,
          changeActiveTab: this.changeActiveTab,
          addVideo: this.addVideo,
          savedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        </Switch>
      </AppTheme.Provider>
    )
  }
}

export default App
