import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  fontFamily: string;
  gradient?: string;
  logo?: string;
  primaryColor: string;
  secondaryColor: string;
  accent?: string;
  transparent?: boolean;
  heroImage?: string;
  radius?: string;
}

export const theme = {
  accent: "yellow",
  fontFamily: `medium-content-sans-serif-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif`,
  gradient: `linear-gradient(to right bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12)`,
  heroImage: `url("../images/astronaut.png")`,
  logo: `url("http://source.unsplash.com/random/50x50")`,
  primaryColor: "white",
  radius: "30px",
  secondaryColor: "dark-gray",
  transparent: false
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
