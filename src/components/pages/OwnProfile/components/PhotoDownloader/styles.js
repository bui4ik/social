import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  border: 1px solid #bdbdbd;
  position: absolute;
  width: 300px;
  height: 100px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  left: 40%;
  top: 25%;
`

export const Input = styled.input`
  width: 200px;
  font-size: 12px;
  padding-bottom: 10px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin: 0 auto;
`

export const Button = styled.button`
  font-size: 15px;
  margin-right: 10px;
  border: none;
  color: #fff;
  background-color: #e91e63;
  border-radius: 3px;

  :hover {
    opacity: 0.9;
  }
`
