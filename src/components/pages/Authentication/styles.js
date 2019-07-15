import styled from 'styled-components'

export const Container = styled.form`
  background-color: #2196f3;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 10px;
  color: white;
  
  @media (max-width: 500px ) {
  font-size: 15px;
  }
`

export const Input = styled.input`
  border: none;
  width: 70%;
  border-radius: 5px;
  height: 30px;
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  background-color: #4dabf5;
  color: #fff;
  padding-left: 10px;

  ::placeholder {
    color: #fff;
    opacity: 0.8;
  }
  
  @media (max-width: 500px ) {
  font-size: 10px;
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
`

export const Error = styled.div`
  margin: 0 auto;
  color: #fff;
  background-color: #f44336;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
`

export const CheckBoxLabel = styled.div`
  color: #fff;
  font-size: 13px;
  padding-bottom: 2px;
  opacity: 0.9;
`

export const Captcha = styled.img`
  width: 70%;
  margin: 0 auto 10px auto;
`

export const Button = styled.button`
  border: none;
  width: 50%;
  margin: 0 auto;
  background-color: #f50057;
  color: #fff;
  height: 30px;
  border-radius: 5px;

  &:active {
    transform: scale(0.97);
  }
`
