import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavHeader = styled.nav`
  height: 10vh;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;

  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`
export const WebsiteLogo = styled.img`
  width: 160px;
`
export const CloseButton = styled.button`
  border: 0px;
  background-color: transparent;
`

export const HeaderOptions = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`
export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
`
export const ProfileImageContainer = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  width: 30px;
`
export const MenuButton = styled.button`
  display: flex;
  cursor: pointer;
  background-color: transparent;
  border: none;
  @media screen and (min-width: 992px) {
    display: none;
  }
`
export const MenuPopUpBgContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 576px;
  background-color: ${props => props.bgColor};
`
export const NavItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0px;
  width: 280px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 10px;
  background-color: ${props => props.bgColor};
`

export const NavName = styled.p`
  font-size: 14px;
  font-weight: ${props => props.bold};
  color: ${props => props.color};
`
export const LogoutButton = styled.button`\
   cursor: pointer;
  background-color: transparent;
  padding: 5px 10px 5px 10px;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-weight: bold;
  width: 100px;
  font-size: 16px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const PopupBgContainer = styled.div`
  background-color: #cccccc;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.color};
  padding: 40px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
`
export const ControllerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 30px;
`
export const Text = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-weight: 500;
`
export const ConfirmButton = styled.button`
  color: white;
  background-color: #3b82f6;
  border: none;
  padding: 10px;
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;
`
export const CancelButton = styled.button`
  color: #475569;
  background-color: transparent;
  border: 1px solid #475569;
  padding: 10px;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
`
export const LogoutIconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 5px;
  @media screen and (min-width: 768px) {
    display: none;
    border: none;
  }
`
