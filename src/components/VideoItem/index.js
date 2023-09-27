import AppTheme from '../../context/AppTheme'

import {
  ListItem,
  CardImage,
  VideoDetailsContainer,
  ChannelLogo,
  VideoDetails,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
  NavLink,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    channelName,
    channelProfileLogo,
    publishedDate,
    thumbnailUrl,
    title,
    viewsCount,
  } = videoDetails

  return (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const themeColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <NavLink to={`/videos/${id}`}>
            <ListItem>
              <CardImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <ChannelLogo src={channelProfileLogo} alt="channel logo" />
                <VideoDetails>
                  <Title color={themeColor}>{title}</Title>
                  <ChannelName>{channelName}</ChannelName>

                  <ViewsAndDate>
                    {viewsCount} views <Dot> &#8226;</Dot>
                    {publishedDate}
                  </ViewsAndDate>
                </VideoDetails>
              </VideoDetailsContainer>
            </ListItem>
          </NavLink>
        )
      }}
    </AppTheme.Consumer>
  )
}

export default VideoItem
