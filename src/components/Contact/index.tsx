type Props = {
  name: string
  email: string
  phone: number
  id: number
}

const Contact = ({ name, email, phone }: Props) => (
  <>
    <td>{name}</td>
    <td>{email}</td>
    <td>{phone}</td>
  </>
)

export default Contact
