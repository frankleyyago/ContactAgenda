import { HeaderStyles } from './styles'

import logo from '../../assets/image/logo.svg'

const Header = () => (
  <HeaderStyles>
    <img src={logo} alt="logo" />
    <h1>Agenda de contatos</h1>
  </HeaderStyles>
)

export default Header
