import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1000px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  margin: 10px 20px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 5px;
`

export const UsersList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`
