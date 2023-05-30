import {
  ButtonStyles,
  EmailInputStyles,
  FormStyles,
  NameInputStyles,
  PhoneInputStyles
} from './styles'

const Form = () => (
  <FormStyles>
    <NameInputStyles type="text" id="name" placeholder="Nome completo" />
    <EmailInputStyles type="email" id="email" placeholder="Email" />
    <PhoneInputStyles type="number" id="phone" placeholder="Número" />
    <ButtonStyles>Add+</ButtonStyles>
  </FormStyles>
)

export default Form
