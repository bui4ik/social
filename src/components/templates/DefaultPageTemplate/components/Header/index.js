import React from 'react'
import * as S from './styles'
import * as selectors from 'store/ownUser/selectors'
import * as searchSelector from 'store/usersList/selectors'
import { connect } from 'react-redux'
import SideBar from './components/SideBar'
import { searchUsers } from 'store/usersList/thunks'

class Header extends React.Component {
  state = {
    searchValue: '',
  }

  searchHandler = e => {
    this.props.searchUsers(e.currentTarget.value)
    this.setState({ searchValue: e.currentTarget.value })
  }

  render() {
    const { fullName, smallPhoto, searchResult, searchResultCount } = this.props
    const { searchValue } = this.state
    return (
      <S.Container>
        <S.Content>
          <S.ProfileButton>
            {smallPhoto && <S.PhotoWrapper photo={smallPhoto} />}
            {fullName && <S.Username>{fullName}</S.Username>}
          </S.ProfileButton>
          <S.Search type="search" placeholder="Search..." onChange={this.searchHandler} />
          {searchValue && (
            <S.SearchResult>
              {searchResult &&
                searchResult.map(({ name }) => <S.SearchResultItem>{name}</S.SearchResultItem>)}
              {searchResultCount === 0 && (
                <S.SearchResultItem>No search results</S.SearchResultItem>
              )}
            </S.SearchResult>
          )}
          <SideBar />
        </S.Content>
      </S.Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    fullName: selectors.fullNameSelector(state),
    smallPhoto: selectors.smallPhotoSelector(state),
    searchResult: searchSelector.searchResultSelector(state),
    searchResultCount: searchSelector.searchResultCountSelector(state),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchUsers: term => dispatch(searchUsers(term)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
