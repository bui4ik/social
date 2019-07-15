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
export const ContainerUpdatePhoto = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const DownloaderButton = styled.span`
  color: #fff;
`

export const ButtonContainer = styled.div`
  background-color: #1e88e5;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`
