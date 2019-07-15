import React from 'react'
import * as S from './styles'
import userNoPhoto from 'assets/img/user.svg'
import * as selectors from 'store/User/selectors'
import { connect } from 'react-redux'

class AnotherUserPhoto extends React.Component {
  render() {
    const { photo } = this.props
    return (
      <S.Container>
        {!photo ? (
          <S.UserPhotoWrapper>
            <S.UserPhoto src={userNoPhoto} />
          </S.UserPhotoWrapper>
        ) : (
          <S.ProfilePhotoWrapper photo={photo} />
        )}
      </S.Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    photo: selectors.largePhotoSelector(state),
  }
}

export default connect(mapStateToProps)(AnotherUserPhoto)
