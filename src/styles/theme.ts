import {Inter} from "next/font/google"

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});


export const theme = {
  border: {
    radius: {
      small: '0.375rem',
      medium: '0.5rem',
      large: '5rem',
    }
  },
  font: {
    family: {
      inter: inter.style.fontFamily
    },
    normal: 400,
    medium: 500,
    bold: 600,
    size: {
      xxxxsmall: '0.75rem',
      xxxsmall: "0.813rem",
      xxsmall: "0.875rem",
      xsmall: '0.9375rem',
      small: '1rem',
      medium: '2rem',
      large: '2.75rem',
    }
  },
  colors: {
    black: "#130C25",
    white: "#FFFFFF",
    grey: "#423D51",
    purple: "#5F41D9"
  },
  spacings: {
    xxxxsmall: "0.5rem",
    xxxsmall: '0.75rem',
    xxsmall: '1.5rem',
    xsmall: '2rem',
    small: '2.5rem',
    medium: '2.75rem',
    large: '6.688rem',
    xlarge: '9.5rem',
  },
}