import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import GamingCard from '../GamingCard'
import FailureView from '../FailureView'
import AppTheme from '../../context/AppTheme'
import Header from '../Header'
import Navigation from '../Navigation'

import {
  GamingRouteContainer,
  GamingContainer,
  LeftSection,
  RightSection,
  LoaderContainer,
  HeadingSection,
  Icon,
  Heading,
  GamingList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideosData()
  }

  getGamingVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewsCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {gamingVideosList} = this.state
        const iconBg = isDarkTheme ? '#424242' : '#e2e8f0'
        const headingColor = isDarkTheme ? '#ffffff' : '#000000'
        const headingSectionColor = isDarkTheme ? '#212121 ' : '#f4f4f4'

        return (
          <div data-testid="gaming">
            <HeadingSection color={headingSectionColor}>
              <Icon color={iconBg}>
                <SiYoutubegaming size={30} color="red" />
              </Icon>
              <Heading color={headingColor}>Gaming</Heading>
            </HeadingSection>
            <GamingList>
              {gamingVideosList.map(eachGame => (
                <GamingCard key={eachGame.id} videoDetails={eachGame} />
              ))}
            </GamingList>
          </div>
        )
      }}
    </AppTheme.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.getGamingVideosData} />

  renderGamingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const navBgColor = isDarkTheme ? '#000000' : '#ffffff'
          const backgroundColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <GamingRouteContainer data-testid="home" color={navBgColor}>
              <Header />
              <GamingContainer data-testid="home" color={backgroundColor}>
                <LeftSection color={backgroundColor}>
                  <Navigation />
                </LeftSection>
                <RightSection>{this.renderGamingVideos()}</RightSection>
              </GamingContainer>
            </GamingRouteContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Gaming
