import styled from 'styled-components'

export const Container = styled.div`
  flex-grow: 1;
  max-width: 80%;
`

export const Username = styled.div`
  font-size: 50px;
  color: #424242;
  margin-bottom: 20px;
  
  @media (max-width: 800px ) {
  font-size: 30px;
  }
`

export const LookingForAJobContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #424242;
  margin-bottom: 10px;
`

export const LookingForAJobPositive = styled.div`
  color: #4caf50;
  font-size: 20px;
  margin-bottom: 10px;
`

export const LookingForAJobNegative = styled.div`
  color: #f44336;
  font-size: 20px;
  margin-bottom: 10px;
`

export const LookingForAJobDescription = styled.div`
  font-size: 24px;
  color: #424242;
`

export const LookingForAJobSVGWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  svg {
    width: 30px;
    height: 30px;
  }
`

export const AboutMe = styled.div`
  color: #424242;
  font-size: 20px;
`
