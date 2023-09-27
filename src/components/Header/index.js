import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome, AiOutlineClose} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {BiListPlus} from 'react-icons/bi'
import {SiYoutubegaming} from 'react-icons/si'
import {FiLogOut} from 'react-icons/fi'

import AppTheme from '../../context/AppTheme'

import {
  NavHeader,
  Logo,
  HeaderOptions,
  ThemeButton,
  ProfileImageContainer,
  ProfileImage,
  MenuButton,
  MenuPopUpBgContainer,
  NavContainer,
  NavItemsContainer,
  NavLink,
  NavItem,
  NavName,
  LogoutButton,
  PopupBgContainer,
  PopupContainer,
  Text,
  ControllerContainer,
  CancelButton,
  ConfirmButton,
  LogoutIconButton,
} from './styledComponents'

const Header = props => (
  <AppTheme.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme, activeTab, changeActiveTab} = value
      const bgColor = isDarkTheme ? '#000000' : '#ffffff'
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const textColor = isDarkTheme ? '#ffffff' : '#000000'
      const popUpBg = isDarkTheme ? '#000000' : '#ffffff'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const changeTabHome = () => {
        changeActiveTab('Home')
      }

      const changeTabTrending = () => {
        changeActiveTab('Trending')
      }

      const changeTabGaming = () => {
        changeActiveTab('Gaming')
      }

      const changeTabSavedVideos = () => {
        changeActiveTab('Saved')
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const activeTabBg = isDarkTheme ? '#424242' : '#e2e8f0'

      return (
        <NavHeader bgColor={bgColor}>
          <Link to="/" onClick={changeTabHome}>
            <Logo src={logoUrl} alt="website logo" />
          </Link>

          <HeaderOptions>
            <ThemeButton data-testid="theme" onClick={onChangeTheme}>
              {isDarkTheme ? (
                <BsBrightnessHigh size={25} color="white" />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>

            <ProfileImageContainer>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </ProfileImageContainer>

            <Popup
              modal
              trigger={
                <MenuButton>
                  <GiHamburgerMenu size={25} color={textColor} />
                </MenuButton>
              }
            >
              {close => (
                <MenuPopUpBgContainer bgColor={bgColor}>
                  <NavContainer>
                    <NavItemsContainer>
                      <NavLink to="/">
                        <NavItem
                          onClick={changeTabHome}
                          bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                        >
                          <AiFillHome
                            size={20}
                            color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                          />
                          <NavName
                            color={textColor}
                            bold={activeTab === 'Home' ? 'bold' : 'none'}
                          >
                            Home
                          </NavName>
                        </NavItem>
                      </NavLink>

                      <NavLink to="/trending">
                        <NavItem
                          onClick={changeTabTrending}
                          bgColor={
                            activeTab === 'Trending' ? activeTabBg : 'none'
                          }
                        >
                          <HiFire
                            size={20}
                            color={
                              activeTab === 'Trending' ? '#ff0b37' : '#909090'
                            }
                          />
                          <NavName
                            color={textColor}
                            bold={activeTab === 'Trending' ? 'bold' : 'none'}
                          >
                            Trending
                          </NavName>
                        </NavItem>
                      </NavLink>
                      <NavLink to="/gaming">
                        <NavItem
                          onClick={changeTabGaming}
                          bgColor={
                            activeTab === 'Gaming' ? activeTabBg : 'none'
                          }
                        >
                          <SiYoutubegaming
                            size={20}
                            color={
                              activeTab === 'Gaming' ? '#ff0b37' : '#909090'
                            }
                          />
                          <NavName
                            color={textColor}
                            bold={activeTab === 'Gaming' ? 'bold' : 'none'}
                          >
                            Gaming
                          </NavName>
                        </NavItem>
                      </NavLink>
                      <NavLink to="/saved-videos">
                        <NavItem
                          onClick={changeTabSavedVideos}
                          bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                        >
                          <BiListPlus
                            size={20}
                            color={
                              activeTab === 'Saved' ? '#ff0b37' : '#909090'
                            }
                          />
                          <NavName
                            color={textColor}
                            bold={activeTab === 'Saved' ? 'bold' : 'none'}
                          >
                            Saved videos
                          </NavName>
                        </NavItem>
                      </NavLink>
                    </NavItemsContainer>
                    <AiOutlineClose onClick={() => close()} color={textColor} />
                  </NavContainer>
                </MenuPopUpBgContainer>
              )}
            </Popup>

            <Popup modal trigger={<LogoutButton>Logout</LogoutButton>}>
              {close => (
                <PopupBgContainer>
                  <PopupContainer color={popUpBg}>
                    <Text color={textColor}>
                      Are you sure, you want to logout?
                    </Text>
                    <ControllerContainer>
                      <CancelButton onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ControllerContainer>
                  </PopupContainer>
                </PopupBgContainer>
              )}
            </Popup>

            <Popup
              modal
              trigger={
                <LogoutIconButton onClick={onClickLogout}>
                  <FiLogOut size={25} color={textColor} />
                </LogoutIconButton>
              }
            >
              {close => (
                <PopupBgContainer>
                  <PopupContainer color={popUpBg}>
                    <Text color={textColor}>
                      Are you sure, you want to logout?
                    </Text>
                    <ControllerContainer>
                      <CancelButton onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </ControllerContainer>
                  </PopupContainer>
                </PopupBgContainer>
              )}
            </Popup>
          </HeaderOptions>
        </NavHeader>
      )
    }}
  </AppTheme.Consumer>
)
export default withRouter(Header)
