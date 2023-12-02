/* eslint-disable mui-path-imports/mui-path-imports */
//  MUI pallete colors will be listed here

import { PaletteMode, PaletteOptions } from "@mui/material";

export const primaryColors = {
  primary: "#212529",
  primary1: "#288ef4",
  dashLinkTxt: "#A1A1A1",
  blueColor: "#008AAF",
  primary_600: "#5871D0",
  secondary: "#FF8EB2",
  secondaryBorder: "#F380A5",
  info: "#7CD1D2",
  infoBorder: "#67C1C2",
  disabledBg: "#DBE0E8",
  textDisabled: "#9c9c9c",
  errorMain: "#EB4444",
  errorLight: "#FFECF2",
  white: "#fff",
  black: "#000",
  bodyColor: "#F4F6F8",
  mainFontColor: "#848484",
  textPrimaryColor: "#666",
  borderprimary: "#DBE0E8",
  border_primary: "#DBE0E8",
  warning_color: "#FFEFD7",
  success_color: "#D4FEFF",
  text_success: "#3C8183",
  warning_text: "#6F4F1F",
  deepGreen: "#3A795B",
  lightGreen: "#D4FEFF",
  danger_text: "#9B3858",
  warningMain: "#F9B608",
  pendingColor: "#FFEFD7",
  pendingTextColor: "#6F4F1F",
  textDanger: "#9B3858",
  dangerColor: "#FFECF2",
  colorCCB043: "#CCB043",
  color83BF4F: "#83BF4F",
  colorDC276A: "#DC276A",
  colorAEAEAE: "#AEAEAE",
  colorF5F5F5: "#F5F5F5",

  // borderprimary:"#DBE0E8",
  chipErrorBg: "#FFECF2",
  chipErrorText: "#F95E08",
  cardShadow: "#0707070F",
  tableshadow: "rgba(7, 7, 7, 0.06)",
  secondaryFont: "#4D4E4E",
  tertiaryFont: "#585858",
  buttonSecondary: "rgba(30, 30, 30, 0.15)",
  shadowPrimary: "rgba(27, 29, 78, 0.23)",
  ratingButtonTxt: "rgba(255, 255, 255, 0.60)",
  shippedText: "rgba(54, 27, 100, 0.16)",
  deliverText: "rgba(131, 191, 79, 0.16)",
  cancelText: "rgba(220, 39, 106, 0.16)",
  colorF19934: "#F19934",
  color7A7A7A: "#7A7A7A",
  colorE9E1D4: "#E9E1D4",
  lightTxtColor: "#9c9c9c",
  iconColors: "#373737",
  orangeColor: "#fc7322",
  colorF1EFED: "#F1EFED",
  colorD9D9D9: "#D9D9D9",
  colorEBEBEB: "#EBEBEB",
  colorB9B9B9: "#B9B9B9",
  colorF8C2EC: "#F8C2EC",
  colorB1FDDB: "#B1FDDB",
  colorF3B062: "#F3B062",
  color78D8F7: "#78D8F7",
  colorFE83E3: "#FE83E3",
  color5FCC9C: "#5FCC9C",
  color2CC7F8: "#2CC7F8",
  color8F8F8F: "#8F8F8F",
  color333: "#333",
  colorf66c25: "#f66c25",
  colorC4C4C4: "#C4C4C4",
  light_border: "rgba(156, 156, 156, 0.4)",
  aboutIcon_bg: "rgba(54, 27, 100, 0.10)",
  colorD5DCDD: "#D5DCDD",
  auth_form_bg: "rgba(0, 0, 0, 0.13)",
  auth_input_bg: "#495057",
  auth_input_border: "rgba(255, 255, 255, 0.23)",
  inputColor: "#A1A1A1",
  color292D32: "#292D32",

  colorD3DFD9: "#D3DFD9",
  paraSecondaryColor: "#444",
  color29364E: "#29364E",
  color2E2E2E: "#2E2E2E",
  colorF1F1F1: "#F1F1F1",
  colorEBE9F0: "#EBE9F0",
  color7e7e7e: "#7e7e7e",
  colorcodeborderrgba: "rgba(30, 30, 30, 1)",
  colorF2F3F3: "#F2F3F3",
  color69A574: "#69A574",
  dividerColor: "#607384",
  color46277C: "#46277C",

  colorE2CEC9: "#E2CEC9",
  boxShadowContact: "rgba(226, 206, 201, 0.12)",

  colornotergba: "rgba(54, 27, 100, 0.16)",
  bodrercolor: "#f2f3f3",
  dashboardHover: "#F4F2F6",
  strokeClr: "#F2F3F3",

  color7E7E7E: "#7E7E7E",
  green37A072: "#37A072",
  redC53D5D: "#C53D5D",
  redF6597F: "#F6597F",
  purple46277C: "#46277C",
  chipColorOne: "#D7D1E0",
  chipColorTWo: "#D7E4DE",
  chipColorThree: "#FEF0CE",
  chipColorFour: "#FEDFCE",
  redB03084: "#B03084",
  blue05B0D1: "#05B0D1",
  yellowFBBB00: "#FBBB00",
  grey607384: "#607384",
  colorD3D3D3: "#D3D3D3",
  colorE0D8EE: "#E0D8EE",
  checkBlackColor: "#1F2B37",
  colorF9F9F9: "#F9F9F9",
  btnYlwColor: "#f7e910",
  cardbg: "rgb(240, 248, 255)"
};

export const pallete = (mode: PaletteMode): PaletteOptions => {
  return {
    mode,
    background: {
      default: mode === "light" ? "#f5f8fa" : "#000",
      paper: mode === "light" ? "#fff" : "#000"
    },
    //global
    primary: {
      main: primaryColors.primary,
      dark: primaryColors.primary_600
    },
    secondary: {
      main: primaryColors.secondary
    },
    info: {
      main: primaryColors.info
    },
    error: {
      main: primaryColors.errorMain
    },
    warning: {
      main: primaryColors.warningMain
    },

    text: {
      primary: primaryColors.disabledBg
    },
    common: {
      black: "#000",
      white: "#fff"
    }
  };
};
