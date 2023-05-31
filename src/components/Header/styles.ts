import styled from 'styled-components'
import variables from '../../styles/variables'

export const HeaderStyles = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${variables.black};
  display: flex;
  margin-bottom: 40px;
  align-items: center;

  img {
    height: 40px;
    margin-right: 24px;
  }
`
