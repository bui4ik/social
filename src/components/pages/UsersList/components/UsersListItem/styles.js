import styled from 'styled-components'
import ReactSVG from 'react-svg'

export const UserItemContainer = styled.div`
  width: 80px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
`

export const UserPhotoWrapper = styled.div`
  width: 70px;
  height: 70px;
  margin-bottom: 10px;

  svg {
    width: 70px;
    height: 70px;
  }
`

export const UserPhoto = styled(ReactSVG)``

export const Photo = styled.div`
  background-image: url("${({ photo }) => photo}");
  border-radius: 100%;
  background-size: cover;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
`

export const Name = styled.div`
  color: rgba(0, 188, 212, 1);
`
