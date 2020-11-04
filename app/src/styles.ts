import { createGlobalStyle } from "styled-components";

export enum MaxWidth {
  thin = "200px",
  wide = "800px",
  full = "100%",
}

export enum Color {
  dark = "hsl(60, 100%, 3%)",
  light = "hsl(60, 61%, 94%)",
}

export enum Padding {
  default = "16px",
}

export enum Margin {
  small = "4px",
  medium = "8px",
  default = "16px",
}

export enum FontFamily {
  system = "-apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;",
}

export enum FontSize {
  smallest = "12px",
  small = "14px",
  default = "16px",
  large = "18px",
  larger = "20px",
  largerX2 = "24px",
  largerX3 = "36px",
  largerX4 = "48px",
  largerX5 = "60px",
  largest = "72px",
}

export enum FontWeight {
  normal = "normal",
  bold = "800",
  bolder = "900",
}

export enum BorderRadius {
  less = "border-radius: 3px;",
  default = "border-radius: 5px;",
  more = "border-radius: 7px;",
}

export enum Device {
  mobileS = "(min-width: 320px)",
  mobileM = "(min-width: 375px)",
  mobileL = "(min-width: 425px)",
  tablet = "(min-width: 768px)",
  laptop = "(min-width: 1024px)",
  laptopL = "(min-width: 1440px)",
  desktop = "(min-width: 2560px)",
  ultraWide = "(min-width: 3440px)",
}

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: ${FontFamily.system}
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${FontFamily.system}
    line-height: 1;
    margin: 0;
  }
`;
