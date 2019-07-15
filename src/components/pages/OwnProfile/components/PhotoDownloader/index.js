import React from 'react'
import * as S from './styles'
import { updateUserPhoto } from '../../../../../store/ownUser/thunks'
import { connect } from 'react-redux'

class PhotoDownloader extends React.Component {
  state = {
    photo: '',
  }

  photoChangeHandler = e => {
    this.setState({ photo: e.target.files })
  }

  downloadPhoto = () => {
    const { photo } = this.state
    this.props.updateUserPhoto(photo)
    this.props.closePhotoDownloader()
  }

  render() {
    const { closePhotoDownloader } = this.props
    return (
      <S.Container>
        <S.Input type="file" onChange={this.photoChangeHandler} />
        <S.ButtonsContainer>
          <S.Button onClick={this.downloadPhoto}>save</S.Button>
          <S.Button onClick={closePhotoDownloader}>close</S.Button>
        </S.ButtonsContainer>
      </S.Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserPhoto: photo => dispatch(updateUserPhoto(photo)),
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(PhotoDownloader)
