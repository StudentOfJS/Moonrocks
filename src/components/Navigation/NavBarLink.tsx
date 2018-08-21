import { Link } from "react-router-dom"
import styled from "../../theme"

const StyledLink = styled(Link) `
 text-decoration: none;
 color: ${props => props.theme.primaryColor};
 &:hover {
  color: ${props => props.theme.secondaryColor};
 }
`

export default StyledLink