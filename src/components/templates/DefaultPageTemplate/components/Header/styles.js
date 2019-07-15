import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #1e88e5;
  color: #fff;
  position: fixed;
`

export const Content = styled.div`
  padding: 5px 80px;
  display: flex;
  align-items: center;
  
  @media (max-width: 800px ) {
  padding: 5px 5px;
  }
`

export const Search = styled.input`
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
  border: none;
  padding-left: 10px;
  border-radius: 20px;
  width: 180px;
  height: 30px;
  margin: 0 auto;

  ::placeholder {
    color: #fff;
    padding-left: 60px;
    opacity: 0.8;
  }
  
  @media (max-width: 800px ) {
    width: 100px;
    
    ::placeholder {
    color: #fff;
    padding-left: 20px;
    opacity: 0.8;
  }
  }
`

export const ProfileButton = styled.div`
  display: flex;
  align-items: center;
`

export const Username = styled.div`
  opacity: 0.9;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  
  @media (max-width: 800px ) {
  font-size: 14px;
  }
`

export const PhotoWrapper = styled.div`
  opacity: 0.9;
  width: 50px;
  height: 50px;
  background-image: url("${({ photo }) => photo}");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: 2px solid #fff;
  border-radius: 50%;
  margin-right: 10px;
`

export const SearchResult = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  color: black;
  background-color: white;
  left: 39%;
  top: 77%;
  width: 162PX;
  padding: 5px;
  border: 1px solid black;
`

export const SearchResultItem = styled.div`
  margin-bottom: 5px;
`
