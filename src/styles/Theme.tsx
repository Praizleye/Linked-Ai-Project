export const theme = {
  colors: {
    primary: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%);",
    hoverPrimary: "#100B20",
    secondary: "#150E28",
    alt1: "#903AFF",
    alt2: "#D434FE",
    textColor: "#FFFFFF",
    navInactive: "#FFFFFF",
    navActive: "",
    background: "#150E28",
    btnGradient:
      "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
    borderColor: "rgba(255, 255, 255, 0.18)",
  },
  fonts: {
    headers: "ClashBold",
    text: "Montserrat",
  },
  fontSize: {
    forXL: "2.2rem",
    headings: "2rem",
    above1px: "1.2rem",
    just1px: "1rem",
    below1px: "0.875rem",
    below1pxsmall: "0.775rem",
  },
  paddings: {
    navPads: "0 3rem",
    navPadsXXL: "0 6rem",
    navPadsXL: "0 4rem",
    navPadsL: "0 3rem",
    navPadsMD: "0 2rem",
    navPadsSM: "0 1rem",
    navPadsXSM: "0 1rem",
    navItemPads: "0 0.625rem",
    customPads: "1rem 1.5rem",
    container: "15px",
    pageTop: "30px",
  },
  margins: {
    pageTop: "30px",
  },
  lineHeight: {
    lhXtraSmall: "18px",
    lhSmall: "22px",
    lhMedium: "28px",
    lhLarge: "70px",
    lhXtraLarge: "122px",
  },
  fontWeight: {
    light: 400,
    bold: 600,
    xBold: 700,
  },
};

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {
    colors: {
      primary: string;
      secondary: string;
      alt1: string;
      alt2: string;
      textColor: string;
      navInactive: string;
      background: string;
      hoverPrimary: string;
      btnGradient: string;
      borderColor: string;
    };
  }
}

// export type DefaultTheme = StyledDefaultTheme & CustomTheme;
