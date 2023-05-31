import styled from 'styled-components'

import edit from '../../assets/image/edit.svg'
import remove from '../../assets/image/remove.svg'
import save from '../../assets/image/save.svg'
import cancel from '../../assets/image/cancel.svg'

export const ButtonEditStyles = styled.button`
  background-image: url(${edit});
  height: 20px;
  width: 20px;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  margin-right: 10px;
`

export const ButtonRemoveStyles = styled(ButtonEditStyles)`
  background-image: url(${remove});
  margin: 0;
`

export const ButtonSavelStyles = styled(ButtonEditStyles)`
  background-image: url(${save});
`
export const ButtonCancelStyles = styled(ButtonEditStyles)`
  background-image: url(${cancel});
  margin: 0;
`
