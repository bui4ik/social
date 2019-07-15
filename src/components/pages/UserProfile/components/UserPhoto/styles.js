import styled from 'styled-components'
import ReactSVG from 'react-svg'

export const Container = styled.div``

export const ProfilePhotoWrapper = styled.div`
  background-image: url("${({ photo }) => photo}");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 100%;
  border: 5px solid #fff;
  background-size: cover;
  
  width: 200px;
  height: 200px;
  padding: 10px;
  margin-right: 10px;
`

export const UserPhotoWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-right: 10px;

  svg {
    width: 200px;
    height: 200px;
  }
`

export const UserPhoto = styled(ReactSVG)``

