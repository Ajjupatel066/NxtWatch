import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import Navigation from '../Navigation'
import AppTheme from '../../context/AppTheme'

import {
  VideoDetailsRouteContainer,
  VideoDetailsContainer,
  LeftSection,
  RightSection,
  LoaderContainer,
  VideoTitle,
  ViewsAndControllersContainer,
  ViewsAndDate,
  Dot,
  ControllerContainer,
  LikeButtonContainer,
  DisLikeButtonContainer,
  SavedButtonContainer,
  ButtonText,
  ChannelContainer,
  ChannelImage,
  ChannelDescription,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'PROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class VideoDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoItemDetails: [],
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoItemData()
  }

  getVideoItemData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedData = {
        id: data.video_details.id,
        channelName: data.video_details.channel.name,
        description: data.video_details.description,
        channelProfileLogo: data.video_details.channel.profile_image_url,
        channelSubscriberCount: data.video_details.channel.subscriber_count,
        publishedDate: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewsCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
      }
      this.setState({
        videoItemDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  likeVideo = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  dislikeVideo = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderSuccessView = () => {
    const {videoItemDetails, isLiked, isDisLiked} = this.state

    return (
      <AppTheme.Consumer>
        {value => {
          const {isDarkTheme, addVideo, savedVideos} = value
          const themeColor = isDarkTheme ? '#ffffff' : '#000000'

          const likeColor = isLiked ? '#2563eb' : '#64748b'
          const disLikeColor = isDisLiked ? '#2563eb' : '#64748b'

          const videoIndex = savedVideos.findIndex(
            eachVideo => eachVideo.id === videoItemDetails.id,
          )

          let isSaved

          if (videoIndex === -1) {
            isSaved = false
          } else {
            isSaved = true
          }
          const savedText = isSaved ? 'Saved' : 'Save'

          const onClickSave = () => {
            addVideo(videoItemDetails)
          }

          const {
            channelName,
            description,
            channelProfileLogo,
            publishedDate,
            title,
            viewsCount,
            videoUrl,
            channelSubscriberCount,
          } = videoItemDetails

          return (
            <>
              <ReactPlayer url={videoUrl} controls width="100%" />
              <VideoTitle color={themeColor}>{title}</VideoTitle>
              <ViewsAndControllersContainer>
                <ViewsAndDate>
                  {viewsCount} views <Dot> &#8226;</Dot>
                  {publishedDate}
                </ViewsAndDate>
                <ControllerContainer>
                  <LikeButtonContainer onClick={this.likeVideo}>
                    <BiLike size={20} color={likeColor} />
                    <ButtonText color={likeColor}>Like</ButtonText>
                  </LikeButtonContainer>
                  <DisLikeButtonContainer onClick={this.dislikeVideo}>
                    <BiDislike size={20} color={disLikeColor} />
                    <ButtonText color={disLikeColor}>DisLike</ButtonText>
                  </DisLikeButtonContainer>
                  <SavedButtonContainer saved={isSaved}>
                    <BiListPlus size={20} onClick={onClickSave} />
                    <ButtonText>{savedText}</ButtonText>
                  </SavedButtonContainer>
                </ControllerContainer>
              </ViewsAndControllersContainer>
              <ChannelContainer>
                <ChannelImage src={channelProfileLogo} alt="channel logo" />
                <ChannelInfo>
                  <ChannelName color={themeColor}>{channelName}</ChannelName>
                  <ChannelSubscribers>
                    {channelSubscriberCount} Subscribers
                  </ChannelSubscribers>
                  <ChannelDescription color={themeColor}>
                    {description}
                  </ChannelDescription>
                </ChannelInfo>
              </ChannelContainer>
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

  renderVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return null
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
            <VideoDetailsRouteContainer bgColor={navBgColor}>
              <Header />
              <VideoDetailsContainer
                data-testid="savedVideos"
                bgColor={bgColor}
              >
                <LeftSection bgColor={bgColor}>
                  <Navigation />
                </LeftSection>
                <RightSection>{this.renderVideoDetails()}</RightSection>
              </VideoDetailsContainer>
            </VideoDetailsRouteContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default VideoDetails
