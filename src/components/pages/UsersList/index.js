import React from 'react'
import * as selectors from 'store/usersList/selectors'
import { connect } from 'react-redux'
import { getAllUsers, followUser, unFollowUser } from 'store/usersList/thunks'
import { setCurrentPage } from 'store/usersList/actions'
import * as S from './styles'
import UsersListItem from './components/UsersListItem'
import DefaultPageTemplate from 'components/templates/DefaultPageTemplate'
import UsersListPagination from './components/UsersListPagination'

class UsersList extends React.Component {
  componentDidMount() {
    this.props.getAllUsers(9)
  }

  onPageChanged = pageNumber => {
    const { setCurrentPage, getAllUsers, pageSize } = this.props
    setCurrentPage(pageNumber)
    getAllUsers(pageSize, pageNumber)
  }

  render() {
    const { totalCount, pageSize, currentPage, users, followUser, unFollowUser } = this.props
    return (
      <DefaultPageTemplate>
        <S.Wrapper>
          <S.Content>
            <UsersListPagination
              totalCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChanged={this.onPageChanged}
            />
            <S.UsersList>
              <UsersListItem users={users} followUser={followUser} unFollowUser={unFollowUser} />
            </S.UsersList>
          </S.Content>
        </S.Wrapper>
      </DefaultPageTemplate>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: selectors.usersSelector(state),
    totalCount: selectors.totalCountSelector(state),
    pageSize: selectors.pageSizeSelector(state),
    currentPage: selectors.currentPageSelector(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: (count, page) => dispatch(getAllUsers(count, page)),
    setCurrentPage: page => dispatch(setCurrentPage(page)),
    followUser: id => dispatch(followUser(id)),
    unFollowUser: id => dispatch(unFollowUser(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList)
