import styled from 'styled-components'

export const HomeRouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 90vh;
`
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: ${props => props.bgColor};
  min-height: 90vh;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-top: 80px;
  overflow-y: auto;
  margin-top: 0px;
  @media screen and(min-width:768px) {
    width: 75%;
  }
`
export const Banner = styled.div`
  display: ${props => (props.bannerDisplay === 'flex' ? 'flex' : 'none')};
  justify-content: space-around;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 240px;
  padding: 20px;
`
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`
export const BannerLogo = styled.img`
  width: 150px;
  @media screen and(max-width:576px) {
    width: 100px;
  }
`
export const CloseButton = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

export const BannerDescription = styled.p`
  font-size: 20px;
  width: 350px;
  @media screen and(max-width:576px) {
    width: 100px;
  }
`
export const GetNowButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  color: #181818;
  font-weight: bold;
  border: 1px solid #181818;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  color: #64748b;
  @media screen and (max-width: 576px) {
    width: 300px;
    padding: 10px;
  }
`
export const Search = styled.input`
  font-size: 14px;
  font-family: 'Roboto';
  padding: 8px;
  outline: none;
  border: 1px solid #909090;
  line-height: 20px;
  width: 300px;
  color: #64748b;
  @media screen and (max-width: 576px) {
    width: 250px;
  }
`
export const SearchButton = styled.button`
  border: none;
  cursor: pointer;
  border: 1px solid #909090;
  padding: 8px;
  width: 50px;
  line-height: 20px;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
`

export const VideosList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;

  @media screen and(max-width:576px) {
    padding-left: 10px;
    padding-right: 10px;
    max-width: 576px;
  }
`
export const Heading = styled.h1`
  font-size: 30px;
  color: ${props => props.color};
  @media screen and(min-width: 768px) {
    font-size: 24px;
  }
`
export const Description = styled.p`
  font-size: 18px;
  width: 400px;
  text-align: center;
  color: #616e7c;
`
export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  padding: 10px;
  border: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 100px;
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin-top: 40px;
`
export const NoVideosImage = styled.img`
  width: 350px;
`
