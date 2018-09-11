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
  gradient: `linear-gradient(to right bottom, rgba(5, 25, 55, 0.5), rgba(0, 77, 122, 0.5), rgba(0, 135, 147, 0.6), rgba(0, 191, 114, 0.7), rgba(168, 235, 18, 0.8))`,
  heroImage: `url("../images/astronaut.png")`,
  logo: `url("http://source.unsplash.com/random/50x50")`,
  primaryColor: "white",
  radius: "30px",
  secondaryColor: "dark-gray",
  transparent: false
};

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
