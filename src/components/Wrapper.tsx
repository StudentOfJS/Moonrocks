import styled from "../theme"

export default styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas: 
    "header"
    "nav"
    "content"
    "sidebar"
    "ad"
    "footer";
  @media (min-width: 700px) {
    grid-template-columns: 1fr 3fr;
    grid-template-areas: 
      "header  header"
      "nav     nav"
      "sidebar content"
      "ad      footer";
    }
    @media (min-width: 500px) {
      grid-template-columns: 1fr 4fr 1fr;
      grid-template-areas: 
        "header header  header"
        "nav    content sidebar"
        "nav    content ad"
        "nav    content ad"
        "footer footer  footer"
    }
    @media (min-width: 300px) {
      grid-template-columns: 1fr 4fr 1fr;
      grid-template-areas: 
        "nav     nav     nav"
        "header  header  header"
        "content content content"
        "ad      ad      ad"
        "footer  footer  footer"
    }
`