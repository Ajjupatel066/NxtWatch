import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`
export const NotFoundCard = styled.div`
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
  position: sticky;
  position: -webkit-sticky;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  overflow-y: auto;

  @media screen and(max-width: 768px) {
    width: 100%;
  }
`
export const Image = styled.img`
  width: 350px;
`

export const Heading = styled.h1`
  font-size: 24px;
  color: ${props => props.color};
`
export const Description = styled.p`
  font-size: 14px;
  color: #616e7c;
`
