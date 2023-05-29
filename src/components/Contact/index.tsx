import { TableBodyStyles, TableHeadStyles, TableStyles } from './styles'

const Contact = () => (
  <>
    <TableStyles cellSpacing="0">
      <TableHeadStyles>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
        </tr>
      </TableHeadStyles>
      <TableBodyStyles>
        <tr>
          <td>Yago Frankley Santos Damasceno</td>
          <td>frankleyyago@outlook.com</td>
          <td>(31) 97547-0735</td>
        </tr>
        <tr>
          <td>Emergência</td>
          <td>emergencia@emergencia.com</td>
          <td>190</td>
        </tr>
      </TableBodyStyles>
    </TableStyles>
  </>
)

export default Contact
