import * as styledComponents from "styled-components"

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
IThemeInterface
>

export interface IThemeInterface {
  gradient: string
  logo: string
  primaryColor: string
  secondaryColor: string
}

export const theme = {
  gradient: `linear-gradient(to right bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)`,
  logo: `url("http://source.unsplash.com/random/50x50")`,
  primaryColor: "#4B4453",
  secondaryColor: "#FEFEDF"
}

export default styled
export { css, injectGlobal, keyframes, ThemeProvider }
