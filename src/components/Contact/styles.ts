import styled from 'styled-components'
import { colors } from '../../styles'

export const TableContainer = styled.div`
  height: 68vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0;
`

export const TableStyles = styled.table`
  margin-top: 0px;
  width: 100%;
  color: ${colors.black};
  text-align: center;
`

export const TableHeadStyles = styled.thead`
  font-size: 22px;
  position: sticky;
  top: 0;
  background-color: ${colors.gray};

  th {
    border-bottom: 2px solid ${colors.black};
    font-size: 24px;
    padding: 40px 16px 16px;
    font-weight: bold;
  }
`

export const TableBodyStyles = styled.tbody`
  justify-content: center;

  td {
    padding: 16px 0;
    font-size: 18px;
    border-bottom: 1px solid ${colors.darkGray};
  }
`
