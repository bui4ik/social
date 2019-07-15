import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  padding: 10px 0;
  display: flex;
`
const activeClassName = 'active'
export const Item = styled(NavLink)`
  font-size: 15px;
  margin-left: 15px;
  padding: 5px;

  &.${activeClassName} {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
