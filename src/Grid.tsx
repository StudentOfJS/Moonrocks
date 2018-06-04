import styled from "./theme"

export default styled.div`
  @media (min-width: 700px) {
    display: grid;
    width: 100%;
    margin: 0 auto;
    grid-template-areas: 
      "nav"
      "mobile"
      "content"
      "sidebar"
      "footer";
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100vh 180px 80px;
    grid-template-areas: 
      "sidebar content"
      "nav      nav"
      "footer   footer";
    }
    @media (max-width: 500px) {
      display: grid;
      width: 100%;
      margin: 0 auto;
      grid-template-areas: 
        "nav"
        "mobile"
        "content"
        "sidebar"
        "footer";
      grid-template-columns: 1fr;
      grid-template-areas: 
        "content"
        "mobile"
        "footer";
    }
`