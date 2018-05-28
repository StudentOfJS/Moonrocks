import { StyledIcon } from 'styled-icons/material'
import { Lock, LockOpen } from 'styled-icons/material'

export const Locked: StyledIcon = Lock.extend`
  color: ${props => props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
`
export const UnLocked: StyledIcon = LockOpen.extend`
  color: ${props => props.theme.iconColor ? props.theme.iconColor : props.theme.secondaryColor};
`
