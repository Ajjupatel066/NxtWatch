import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f1f5f9;
`
export const LoginCardForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  padding: 20px 20px 30px 20px;
  border-radius: 10px;
  background-color: #ffffff;
`
export const WebsiteLogo = styled.img`
  width: 150px;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`
export const LabelElement = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 600;
  color: ${props => (props.theme === 'true' ? ' #606060' : '#ffffff')};
`

export const InputElement = styled.input`
  margin-bottom: 10px;
  padding: 8px 10px 8px 10px;
  outline: none;
  border: 1px solid #cccccc;
  border-radius: 5px;
  color: #606060;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
`
export const ShowPassword = styled.input`
  font-size: 18px;
  margin-right: 10px;
`

export const ShowPasswordLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: ${props => (props.theme === 'true' ? ' #606060' : '#ffffff')};
`
export const LoginButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  color: #ffffff;
  background-color: #3b82f6;
  font-weight: bold;
  margin-left: 20px;
  margin-right: 20px;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 14px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 0px;
`
