import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderStyles = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.black};
  display: flex;
  margin-bottom: 40px;
  align-items: center;

  img {
    height: 40px;
    margin-right: 16px;
  }
`
