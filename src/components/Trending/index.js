import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import AppTheme from '../../context/AppTheme'
import Header from '../Header'
import Navigation from '../Navigation'
import FailureView from '../FailureView'

import TrendingVideo from '../TrendingVideo'

import {
  TrendingRouteContainer,
  TrendingContainer,
  LeftSection,
  RightSection,
  LoaderContainer,
  TrendingList,
  HeadingSection,
  Icon,
  Heading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideosData()
  }

  getTrendingVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        channelName: eachVideo.channel.name,
        channelProfileLogo: eachVideo.channel.profile_image_url,
        publishedDate: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewsCount: eachVideo.view_count,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {trendingVideos} = this.state
    // console.log(trendingVideos)

    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value

          const iconBg = isDarkTheme ? '#424242' : '#e2e8f0'
          const headingColor = isDarkTheme ? '#ffffff' : '#000000'
          const headingSectionColor = isDarkTheme ? '#212121 ' : '#f4f4f4'

          return (
            <>
              <HeadingSection color={headingSectionColor}>
                <Icon color={iconBg}>
                  <HiFire size={30} color="red" />
                </Icon>
                <Heading color={headingColor}>Trending</Heading>
              </HeadingSection>
              <TrendingList>
                {trendingVideos.map(eachVideo => (
                  <TrendingVideo key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </TrendingList>
            </>
          )
        }}
      </AppTheme.Consumer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </LoaderContainer>
  )

  onRetry = () => {
    this.setState({trendingVideos: []}, this.getTrendingVideosData)
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTrendingVideos = () => {
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
          const navBgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          const bgColor = isDarkTheme ? '#000000' : '#ffffff'

          return (
            <TrendingRouteContainer data-testid="trending" bgColor={navBgColor}>
              <Header />
              <TrendingContainer bgColor={bgColor}>
                <LeftSection bgColor={bgColor}>
                  <Navigation />
                </LeftSection>
                <RightSection>{this.renderTrendingVideos()}</RightSection>
              </TrendingContainer>
            </TrendingRouteContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Trending
