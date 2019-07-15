import { initialState } from './selectors'
import * as actions from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // actions for login
    case actions.SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actions.SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: payload.data.resultCode,
        userId: payload.data.data.userId,
      }
    case actions.SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
        isAuthenticated: payload.resultCode,
      }
    case actions.GET_CAPTCHA:
      return {
        ...state,
        captchaUrl: payload.url,
      }
    default:
      return state
  }
}
