import styled from "../theme"

export default styled.div`
  display: grid;
  grid-template-areas: 
    "nav"
    "content"
    "footer";
  @media (min-width: 700px) {
    grid-template-columns: 3fr;
    grid-template-areas: 
      "content"
      "nav"
      "footer"
    }
    @media (max-width: 500px) {
      grid-template-columns: 6fr;
      grid-template-areas: 
        "content"
        "footer"
    }
`