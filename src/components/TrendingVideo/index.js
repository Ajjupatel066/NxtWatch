import {formatDistanceToNow} from 'date-fns'
import {
  TrendingItem,
  TrendingThumbnail,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelDetails,
  ChannelTitle,
  ChannelName,
  ViewsAndDate,
  Dot,
  NavLink,
} from './styledComponents'
import AppTheme from '../../context/AppTheme'

const TrendingVideo = props => {
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

  const years = formatDistanceToNow(new Date(publishedDate))

  return (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const titleColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <NavLink to={`/videos/${id}`} titleColor={titleColor}>
            <TrendingItem>
              <TrendingThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <ChannelDetailsContainer>
                <ChannelLogo src={channelProfileLogo} alt="channel logo" />
                <ChannelDetails>
                  <ChannelTitle color={titleColor}>{title}</ChannelTitle>
                  <ChannelName>{channelName}</ChannelName>
                  <ViewsAndDate>
                    {viewsCount} views
                    <Dot>&#8226;</Dot>
                    {years} years ago
                  </ViewsAndDate>
                </ChannelDetails>
              </ChannelDetailsContainer>
            </TrendingItem>
          </NavLink>
        )
      }}
    </AppTheme.Consumer>
  )
}

export default TrendingVideo
