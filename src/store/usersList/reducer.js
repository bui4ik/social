import { initialState } from './selectors'
import * as actions from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // actions for login
    case actions.GET_ALL_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actions.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload.users,
        totalCount: payload.totalCount,
      }
    case actions.GET_ALL_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
    case actions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload.page,
      }
      // follow/unfollow
    case actions.FOLLOW_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actions.FOLLOW_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: state.users.map( u => u.id === payload.id ? { ...u, followed: true} : u )
      }
    case actions.FOLLOW_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
    case actions.UNFOLLOW_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actions.UNFOLLOW_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: state.users.map( u => u.id === payload.id ? { ...u, followed: false} : u )
      }
    case actions.UNFOLLOW_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
      // search
    case actions.SEARCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actions.SEARCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchResult: payload.result,
        searchResultCount: payload.count
      }
    case actions.SEARCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      }
    default:
      return state
  }
}
