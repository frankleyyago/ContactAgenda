import {
  ButtonStyled,
  EmailInputStyles,
  FormStyles,
  NameInputStyles,
  PhoneInputStyled
} from './styles'

const Form = () => (
  <FormStyles>
    <NameInputStyles type="text" id="name" placeholder="Nome completo" />
    <EmailInputStyles type="email" id="email" placeholder="Email" />
    <PhoneInputStyled type="number" id="phone" placeholder="Número" />
    <ButtonStyled>Add+</ButtonStyled>
  </FormStyles>
)

export default Form
