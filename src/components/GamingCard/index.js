import AppTheme from '../../context/AppTheme'

import {
  GameItem,
  ThumbnailImage,
  GameDetailsContainer,
  Title,
  Views,
  NavLink,
} from './styledComponents'

const GamingCard = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewsCount} = videoDetails

  return (
    <AppTheme.Consumer>
      {value => {
        const {isDarkTheme} = value
        const titleColor = isDarkTheme ? '#ffffff' : '#000000'

        return (
          <NavLink to={`/videos/${id}`}>
            <GameItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GameDetailsContainer>
                <Title color={titleColor}>{title}</Title>
                <Views>{viewsCount} Watching Worldwide</Views>
              </GameDetailsContainer>
            </GameItem>
          </NavLink>
        )
      }}
    </AppTheme.Consumer>
  )
}

export default GamingCard
