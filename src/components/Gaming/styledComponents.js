import styled from 'styled-components'

export const GamingRouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.color};
`
export const GamingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 90vh;
`
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  min-height: 100vh;
  position: sticky;
  position: -webkit-sticky;
  background-color: ${props => props.color};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-top: 80px;
  overflow-y: scroll;
  margin-top: 0px;
  @media screen and(min-width:768px) {
    width: 75%;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  width: 100%;
`

export const Heading = styled.h1`
  font-size: 24px;
  color: ${props => props.color};
  @media screen and(min-width: 768px) {
    font-size: 30px;
  }
`
export const HeadingSection = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 40px;
  height: 150px;
  gap: 10px;
  background-color: ${props => props.color};
  @media screen and (max-width: 576px) {
    padding: 30px;
    height: 100px;
  }
`
export const Icon = styled.div`
  border-radius: 100%;
  padding: 20px;
  background-color: ${props => props.color};
`
export const GamingList = styled.ul`
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`
