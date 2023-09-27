import {Component} from 'react'

import {BiListPlus} from 'react-icons/bi'

import AppTheme from '../../context/AppTheme'
import Header from '../Header'
import SavedVideoCard from '../TrendingVideo'
import Navigation from '../Navigation'

import {
  SavedVideosRouteContainer,
  SavedVideosContainer,
  LeftSection,
  RightSection,
  SavedList,
  HeadingSection,
  Icon,
  Heading,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  Description,
} from './styledComponents'

class Trending extends Component {
  renderSavedVideosView = () => (
    <AppTheme.Consumer>
      {value => {
        const {savedVideos, isDarkTheme} = value
        const iconBg = isDarkTheme ? '#424242' : '#e2e8f0'
        const headingColor = isDarkTheme ? '#ffffff' : '#000000'
        const headingSectionColor = isDarkTheme ? '#212121 ' : '#f4f4f4'

        return (
          <>
            <HeadingSection color={headingSectionColor}>
              <Icon color={iconBg}>
                <BiListPlus size={30} color="red" />
              </Icon>
              <Heading color={headingColor}>Trending</Heading>
            </HeadingSection>
            <SavedList>
              {savedVideos.map(eachVideo => (
                <SavedVideoCard key={eachVideo.id} videoDetails={eachVideo} />
              ))}
            </SavedList>
          </>
        )
      }}
    </AppTheme.Consumer>
  )

  renderNoSavedVideosView = () => (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#ffffff' : '#000000'
        return (
          <NoSavedVideosContainer>
            <NoSavedVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <Heading color={headingColor}>No saved videos found</Heading>
            <Description>
              You can save your videos while watching them
            </Description>
          </NoSavedVideosContainer>
        )
      }}
    </AppTheme.Consumer>
  )

  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme, savedVideos} = value
          const navBgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          const bgColor = isDarkTheme ? '#000000' : '#ffffff'

          return (
            <SavedVideosRouteContainer bgColor={navBgColor}>
              <Header />
              <SavedVideosContainer data-testid="savedVideos" bgColor={bgColor}>
                <LeftSection bgColor={bgColor}>
                  <Navigation />
                </LeftSection>
                <RightSection>
                  {savedVideos.length > 0
                    ? this.renderSavedVideosView()
                    : this.renderNoSavedVideosView()}
                </RightSection>
              </SavedVideosContainer>
            </SavedVideosRouteContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Trending
