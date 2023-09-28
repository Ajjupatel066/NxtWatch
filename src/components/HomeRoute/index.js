import {Component} from 'react'
import Cookies from 'js-cookie'

import {MdClose} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'

import Loader from 'react-loader-spinner'

import AppTheme from '../../context/AppTheme'

import Header from '../Header'
import FailureView from '../FailureView'
import Navigation from '../Navigation'
import VideoItem from '../VideoItem'

import {
  HomeRouteContainer,
  HomeContainer,
  LeftSection,
  RightSection,
  Banner,
  BannerContent,
  BannerLogo,
  BannerDescription,
  GetNowButton,
  VideosContainer,
  SearchContainer,
  Search,
  SearchButton,
  LoaderContainer,
  VideosList,
  NoVideosContainer,
  NoVideosImage,
  Heading,
  Description,
  RetryButton,
  CloseButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
  emptyResult: 'EMPTYRESULT',
}

class HomeRoute extends Component {
  state = {
    bannerDisplay: 'flex',
    search: '',
    apiStatus: apiStatusConstants.initial,
    videosData: [],
  }

  componentDidMount() {
    this.getHomeVideosData()
  }

  getHomeVideosData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {search} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()

      if (fetchedData.videos.length > 0) {
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
          videosData: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({
          apiStatus: apiStatusConstants.emptyResult,
        })
      }
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderHomeVideos = () => {
    const {videosData} = this.state
    // console.log(videosData)

    return (
      <VideosList data-testid="home">
        {videosData.map(eachVideo => (
          <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosList>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.getHomeVideosData} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </LoaderContainer>
  )

  renderNoVideosView = () => (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#ffffff' : '#000000'
        return (
          <NoVideosContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading color={textColor}>No Search results found</Heading>
            <Description>
              Try different key words or remove search filter
            </Description>
            <RetryButton onClick={this.onRetry}>Retry</RetryButton>
          </NoVideosContainer>
        )
      }}
    </AppTheme.Consumer>
  )

  renderVideosView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.emptyResult:
        return this.renderNoVideosView()
      default:
        return null
    }
  }

  close = () => {
    this.setState({bannerDisplay: 'none'})
  }

  updateSearch = event => {
    this.setState({search: event.target.value})
  }

  updateSearch = event => {
    this.setState({
      search: event.target.value,
    })
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getHomeVideosData()
    }
  }

  render() {
    const {bannerDisplay, search} = this.state
    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          const backgroundColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const iconColor = isDarkTheme ? '#f9f9f9' : '#181818'
          const bgColor = isDarkTheme ? '#000000' : '#ffffff'

          return (
            <HomeRouteContainer data-testid="home" bgColor={bgColor}>
              <Header />
              <HomeContainer data-testid="home" bgColor={backgroundColor}>
                <LeftSection bgColor={backgroundColor}>
                  <Navigation />
                </LeftSection>
                <RightSection>
                  <Banner
                    bgImage="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
                    bannerDisplay={bannerDisplay}
                    data-testid="banner"
                  >
                    <BannerContent>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerDescription>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerDescription>
                      <GetNowButton>GET IT NOW</GetNowButton>
                    </BannerContent>

                    <CloseButton
                      type="button"
                      onClick={this.close}
                      data-testid="close"
                    >
                      <MdClose size={20} color="#231f20" />
                    </CloseButton>
                  </Banner>
                  <VideosContainer>
                    <SearchContainer>
                      <Search
                        type="search"
                        placeholder="Search"
                        onChange={this.updateSearch}
                        onKeyDown={this.onEnterSearchInput}
                        value={search}
                      />
                      <SearchButton
                        type="button"
                        data-testid="searchButton"
                        onClick={this.getHomeVideosData}
                      >
                        <BsSearch className="search-icon" color={iconColor} />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderVideosView()}
                  </VideosContainer>
                </RightSection>
              </HomeContainer>
            </HomeRouteContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default HomeRoute
