import { initialState } from './selectors'
import * as actions from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // actions for login
    case actions.GET_USERS_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actions.GET_USERS_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        id: payload.userInfo.userId,
        fullName: payload.userInfo.fullName,
        aboutMe: payload.userInfo.aboutMe,
        lookingForAJob: payload.userInfo.lookingForAJob,
        lookingForAJobDescription: payload.userInfo.lookingForAJobDescription,
        smallPhoto: payload.userInfo.photos.small,
        largePhoto: payload.userInfo.photos.large,
        contacts: payload.userInfo.contacts,
      }
    case actions.GET_USERS_INFO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
    default:
      return state
  }
}
