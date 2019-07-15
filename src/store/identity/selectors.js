export const initialState = {
  userId: '',
  isAuthenticated: 1, //  0 = true, 1 = false , 10 = need capthca
  isLoading: false,
  error: '',
  rememberMe: false,
  captchaValue: '',
  captchaUrl: '',
}

export const authenticatedSelector = ({ identity }) => identity.isAuthenticated
export const loadingSelector = ({ identity }) => identity.isLoading
export const errorSelector = ({ identity }) => identity.error
export const userIdSelector = ({ identity }) => identity.userId
export const rememberMeSelector = ({ identity }) => identity.rememberMe
export const captchaValueSelector = ({ identity }) => identity.captchaValue
export const captchaUrlSelector = ({ identity }) => identity.captchaUrl
