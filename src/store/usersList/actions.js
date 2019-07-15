export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST'
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS'
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE'
// pagination
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
// follow/unfollow
export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST'
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS'
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE'
export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST'
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS'
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE'
// users search
export const SEARCH_USERS_REQUEST = 'SEARCH_USERS_REQUEST'
export const SEARCH_USERS_SUCCESS = 'SEARCH_USERS_SUCCESS'
export const SEARCH_USERS_FAILURE = 'SEARCH_USERS_FAILURE'


export const getAllUsersRequest = () => ({
  type: GET_ALL_USERS_REQUEST,
})

export const getAllUsersSuccess = (users, totalCount) => ({
  type: GET_ALL_USERS_SUCCESS,
  payload: { users, totalCount },
})

export const getAllUsersFailure = error => ({
  type: GET_ALL_USERS_FAILURE,
  payload: { error },
})

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  payload: { page },
})
// follow/unfollow
export const followUserRequest = () => ({
  type: FOLLOW_USER_REQUEST,
})

export const followUserSuccess = (id) => ({
  type: FOLLOW_USER_SUCCESS,
  payload: { id }
})

export const followUserFailure = (error) => ({
  type: FOLLOW_USER_FAILURE,
  payload: { error },
})

export const unFollowUserRequest = () => ({
  type: UNFOLLOW_USER_REQUEST,
})

export const unFollowUserSuccess = (id) => ({
  type: UNFOLLOW_USER_SUCCESS,
  payload: { id }
})

export const unFollowUserFailure = (error) => ({
  type: UNFOLLOW_USER_FAILURE,
  payload: { error },
})

// search
export const searchUsersRequest = () => ({
  type: SEARCH_USERS_REQUEST,
})

export const searchUsersSuccess = (result, count) => ({
  type: SEARCH_USERS_SUCCESS,
  payload: { result, count }
})

export const searchUsersFailure = (error) => ({
  type: SEARCH_USERS_FAILURE,
  payload: { error },
})
