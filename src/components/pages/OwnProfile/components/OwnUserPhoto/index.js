import React from 'react'
import * as S from './styles'
import userNoPhoto from 'assets/img/user.svg'
import * as selectors from 'store/ownUser/selectors'
import { connect } from 'react-redux'

class UserPhoto extends React.Component {
  state = {
    updatePhotoLink: false,
  }

  openUpdatePhotoLink = () => {
    this.setState({ updatePhotoLink: true })
  }

  closeUpdatePhotoLink = () => {
    this.setState({ updatePhotoLink: false })
  }

  render() {
    const { photo, openPhotoDownloader } = this.props
    const { updatePhotoLink } = this.state
    return (
      <S.Container onMouseEnter={this.openUpdatePhotoLink} onMouseLeave={this.closeUpdatePhotoLink}>
        {updatePhotoLink && (
          <S.ContainerUpdatePhoto onClick={openPhotoDownloader}>
            <S.ButtonContainer>
              <S.DownloaderButton>Update photo</S.DownloaderButton>
            </S.ButtonContainer>
          </S.ContainerUpdatePhoto>
        )}
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

export default connect(mapStateToProps)(UserPhoto)
