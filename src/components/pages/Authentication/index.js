import React, { Component } from 'react'
import AuthenticationTemplate from 'components/templates/Authentication'
import * as S from './styles'
import { connect } from 'react-redux'
import { logIn } from 'store/identity/thunks'
import * as selectors from 'store/identity/selectors'

class AuthenticationPage extends Component {
  state = {
    login: '',
    password: '',
    rememberMe: false,
    captchaValue: '',
  }

  handleInputChange = e => {
    const {
      target: { name, value },
    } = e
    this.setState({
      [name]: value,
    })
  }

  handleCheckboxChange = e => {
    const {
      target: { name, checked },
    } = e
    this.setState({
      [name]: checked,
    })
  }

  submitSignIn = () => {
    const { logIn } = this.props
    const { login, password, rememberMe, captchaValue } = this.state
    logIn(login, password, rememberMe, captchaValue)
  }

  render() {
    const { rememberMe } = this.state
    const { error, captchaUrl } = this.props

    return (
      <AuthenticationTemplate>
        <S.Container
          onSubmit={e => {
            e.preventDefault()
            this.submitSignIn()
          }}
        >
          <S.Title>Welcome to Social Network</S.Title>
          <S.Input
            type="email"
            placeholder="Email"
            name="login"
            onChange={this.handleInputChange}
          />
          <S.Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleInputChange}
          />
          <S.ErrorContainer>
            {error && error.map(e => <S.Error key={e}>{e}</S.Error>)}
          </S.ErrorContainer>
          <S.CheckboxContainer>
            <input
              type="checkbox"
              value={rememberMe}
              name="rememberMe"
              onClick={this.handleCheckboxChange}
            />
            <S.CheckBoxLabel>remember me</S.CheckBoxLabel>
          </S.CheckboxContainer>
          {captchaUrl && (
            <>
              <S.Input
                type="text"
                placeholder="Insert captcha value"
                name="captchaValue"
                onChange={this.handleInputChange}
              />
              <S.Captcha alt="captcha" src={captchaUrl.url} />
            </>
          )}
          <S.Button type="submit" onClick={this.submitSignIn}>
            Submit
          </S.Button>
        </S.Container>
      </AuthenticationTemplate>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: selectors.authenticatedSelector(state),
    error: selectors.errorSelector(state),
    isLoading: selectors.loadingSelector(state),
    userId: selectors.userIdSelector(state),
    captchaValue: selectors.captchaValueSelector(state),
    captchaUrl: selectors.captchaUrlSelector(state),
    rememberMe: selectors.rememberMeSelector(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logIn: (login, password, rememberMe, captcha) =>
      dispatch(logIn(login, password, rememberMe, captcha)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthenticationPage)
