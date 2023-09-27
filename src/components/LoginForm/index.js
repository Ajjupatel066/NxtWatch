import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginCardForm,
  WebsiteLogo,
  InputContainer,
  LabelElement,
  InputElement,
  ShowPasswordContainer,
  ShowPassword,
  ShowPasswordLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  ShowPassword = () => {
    const show = document.getElementById('password')
    if (show.type === 'password') {
      show.type = 'text'
    } else {
      show.type = 'password'
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  successResponse = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  failureResponse = errorMsg => {
    this.setState({errorMsg, showErrorMsg: true})
  }

  validateUserDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const responseJson = await response.json()
    if (response.ok === true) {
      this.successResponse(responseJson.jwt_token)
    } else {
      this.failureResponse(responseJson.error_msg)
    }
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <LoginCardForm onSubmit={this.validateUserDetails}>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>
            <LabelElement htmlFor="username" theme="true">
              USERNAME
            </LabelElement>
            <InputElement
              id="username"
              type="text"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
          </InputContainer>
          <InputContainer>
            <LabelElement htmlFor="password" theme="true">
              PASSWORD
            </LabelElement>
            <InputElement
              id="password"
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
          </InputContainer>
          <ShowPasswordContainer>
            <ShowPassword
              type="checkbox"
              id="showPassword"
              onChange={this.ShowPassword}
            />
            <ShowPasswordLabel htmlFor="showPassword" theme="true">
              Show Password
            </ShowPasswordLabel>
          </ShowPasswordContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showErrorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </LoginCardForm>
      </LoginContainer>
    )
  }
}

export default LoginForm
