export const initialState = {
  isLoading: false,
  users: '',
  error: '',
  totalCount: '',
  pageSize: 9,
  currentPage: 1,
  searchResult: '',
  searchResultCount: ''
}

export const loadingSelector = ({ allUsers }) => allUsers.isLoading
export const errorSelector = ({ allUsers }) => allUsers.error
export const usersSelector = ({ allUsers }) => allUsers.users
export const totalCountSelector = ({ allUsers }) => allUsers.totalCount
export const pageSizeSelector = ({ allUsers }) => allUsers.pageSize
export const currentPageSelector = ({ allUsers }) => allUsers.currentPage
export const searchResultSelector = ({ allUsers }) => allUsers.searchResult
export const searchResultCountSelector = ({ allUsers }) => allUsers.searchResultCount
