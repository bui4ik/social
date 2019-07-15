import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  
  @media (max-width: 800px ) {
  height: 750px;
  margin-right: 20px;
  }
  
`

export const Profile = styled.div`
  margin: 10px 20px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border-radius: 5px;
  
  @media (max-width: 800px ) {
  }
`

export const MainInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
`
