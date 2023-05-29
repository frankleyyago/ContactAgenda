import styled from 'styled-components'
import { colors } from '../../styles'

export const TableStyles = styled.table`
  margin-top: 40px;
  width: 100%;
  color: ${colors.black};
  text-align: center;
`

export const TableHeadStyles = styled.thead`
  font-size: 22px;
  width: 100%;

  th {
    border-bottom: 2px solid ${colors.black};
    font-size: 24px;
    padding: 16px;
    font-weight: bold;s
  }
`

export const TableBodyStyles = styled.tbody`
  justify-content: center;

  td {
    padding: 16px 0;
    text-align: center;
    font-size: 18px;
    border-bottom: 1px solid ${colors.darkGray};
  }
`
