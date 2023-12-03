/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable mui-path-imports/mui-path-imports */
import { PaletteMode } from "@mui/material";
import type { ThemeOptions } from "@mui/material/styles";
import { pallete, primaryColors } from "./_muiPalette";

/**
 * The function `MuiThemeOptions` returns a configuration object for the Material-UI theme based on the
 * provided mode (light or dark) and includes customizations for various components and typography.
 * @param {PaletteMode} mode - The `mode` parameter is of type `PaletteMode` and is used to determine
 * the color palette mode for the theme. The `PaletteMode` type can have two possible values: "light"
 * or "dark".
 * @returns The function `MuiThemeOptions` returns a `ThemeOptions` object.
 */
export const MuiThemeOptions = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: pallete(mode),
    typography: {
      fontFamily: ["Roboto"].join(","),
      fontSize: 16,
      h1: {
        fontSize: "60px",
        lineHeight: "1em",
        fontWeight: "700",
        fontFamily: "bisonbold",
        marginBottom: "15px !important",
        "@media(max-width:991px)": {
          fontSize: "50px",
          lineHeight: "1em"
        }
      },
      h2: {
        fontSize: "3rem",
        lineHeight: "1.1em",
        fontWeight: "700",
        fontFamily: "bisonbold",
        "@media(max-width:991px)": {
          fontSize: "22px",
          lineHeight: "26px"
        }
      },
      h3: {
        fontSize: "40px",
        lineHeight: "1.1em",
        fontWeight: "800",
        fontFamily: "bisonbold",
        "@media(max-width:991px)": {
          fontSize: "18px",
          lineHeight: "1.1em"
        }
      },
      h4: {
        fontSize: "25px",
        lineHeight: "1.3",
        fontWeight: "500",
        fontFamily: "bisonbold",
        "@media(max-width:991px)": {
          fontSize: "16px",
          lineHeight: "1.3"
        }
      },
      h5: {
        fontSize: "1.25rem",
        lineHeight: "1.4",
        fontWeight: "500",
        fontFamily: "bisonbold",
        "@media(max-width:991px)": {
          fontSize: "12px",
          lineHeight: "1.4"
        }
      },
      h6: {
        fontSize: "12px",
        lineHeight: "1.5",
        fontWeight: "500",
        fontFamily: "bisonbold",
        "@media(max-width:991px)": {
          fontSize: "12px",
          lineHeight: "1.5"
        }
      },
      body1: {
        fontSize: "1rem",
        lineHeight: "1.5em",
        color: primaryColors?.textPrimaryColor,
        fontWeight: 500
      },
      body2: {
        fontSize: "13px",
        lineHeight: "1.5em",
        color: primaryColors?.textPrimaryColor,
        fontWeight: 500
      },
      caption: {
        fontSize: "15px",
        lineHeight: "1.5em",
        color: primaryColors?.textPrimaryColor,
        fontWeight: 500
      }
    },

    components: {
      MuiSkeleton: {
        defaultProps: {
          animation: "wave"
        }
      },
      MuiCard: {
        styleOverrides: {
          root: ({ ownerState, theme }) => {
            return {
              borderRadius: "8px",
              boxShadow: `0px 4px 24px 0px ${primaryColors.cardShadow}`
            };
          }
        }
      },
      MuiChip: {
        styleOverrides: {
          root: ({ ownerState, theme }) => {
            if (
              ownerState.variant === "filled" &&
              ownerState.color === "default"
            ) {
              return {
                backgroundColor: primaryColors?.chipColorOne,
                color: primaryColors.primary1,
                "&:hover": {
                  backgroundColor: primaryColors?.chipColorOne,
                  color: primaryColors.primary1
                }
              };
            }
            if (
              ownerState.variant === "filled" &&
              ownerState.color === "success"
            ) {
              return {
                backgroundColor: primaryColors?.chipColorTWo,
                color: primaryColors?.deepGreen,

                "&:hover": {
                  backgroundColor: primaryColors?.chipColorTWo,
                  color: primaryColors?.deepGreen
                }
              };
            }

            if (
              ownerState.variant === "filled" &&
              ownerState.color === "secondary"
            ) {
              return {
                backgroundColor: primaryColors?.chipColorThree,
                color: primaryColors?.warningMain,
                "&:hover": {
                  background: primaryColors?.chipColorThree,
                  color: primaryColors?.warningMain
                }
              };
            }

            if (
              ownerState.variant === "filled" &&
              ownerState.color === "error"
            ) {
              return {
                backgroundColor: primaryColors?.chipColorFour,
                color: primaryColors?.chipErrorText,
                "&:hover": {
                  backgroundColor: primaryColors?.chipColorFour,
                  color: primaryColors?.chipErrorText
                }
              };
            }

            if (
              ownerState.variant === "filled" &&
              ownerState.color === "warning"
            ) {
              return {
                backgroundColor: primaryColors?.warning_color,
                color: primaryColors?.warning_text,
                "&:hover": {
                  backgroundColor: primaryColors?.warning_color,
                  color: primaryColors?.warning_text
                }
              };
            }

            if (
              ownerState.variant === "outlined" &&
              ownerState.color === "info"
            ) {
              return {
                backgroundColor: primaryColors?.white,
                color: primaryColors?.color7A7A7A,
                border: `1px solid ${primaryColors?.colorD9D9D9}`,

                "&:hover": {
                  background: primaryColors?.disabledBg,
                  borderColor: primaryColors?.disabledBg,

                  color: primaryColors?.white
                }
              };
            }
          }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
          root: () => {
            return {
              "@media(max-width:991px)": {
                minHeight: "20px"
              }
            };
          }
        }
      },
      MuiMenu: {
        defaultProps: {
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "right"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "right"
          },
          PaperProps: {
            elevation: 0
          }
        },
        styleOverrides: {
          paper: ({ theme }) => {
            return {
              overflow: "visible !important",
              filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32))",
              marginTop: "6px",

              "@media(max-width:991px)": {
                marginTop: "0"
              }
            };
          },
          list: () => {
            return {
              paddingTop: "4px",
              paddingBottom: "4px"
            };
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => {
            if (
              ownerState.variant === "contained" &&
              ownerState.color === "primary"
            ) {
              return {
                // backgroundColor: primaryColors?.primary,
                background: primaryColors?.btnYlwColor,
                borderRadius: "0px !important",
                transform: "skew(-40deg)",
                "& .MuiTypography-root": {
                  transform: "skew(40deg)"
                },

                "&:hover": {
                  background: primaryColors?.primary,
                  color: primaryColors?.white
                }
              };
            }
            if (
              ownerState.variant === "contained" &&
              ownerState.color === "success"
            ) {
              return {
                backgroundColor: primaryColors?.primary1,
                borderRadius: "5px",
                padding: "25px 35px !important",

                "&:hover": {
                  background: primaryColors?.primary,
                  color: primaryColors?.white
                },
                "& .MuiTypography-root": {
                  textTransform: "uppercase",
                  fontWeight: 800
                }
              };
            }

            if (
              ownerState.variant === "contained" &&
              ownerState.color === "secondary"
            ) {
              return {
                backgroundColor: primaryColors?.buttonSecondary,
                color: primaryColors?.white,
                borderRadius: "5px",
                "&:hover": {
                  background: primaryColors?.primary,
                  color: primaryColors?.white
                }
              };
            }

            if (
              ownerState.variant === "contained" &&
              ownerState.color === "error"
            ) {
              return {
                backgroundColor: primaryColors?.errorMain,
                color: primaryColors?.white,
                border: `1px solid ${primaryColors?.errorMain}`,
                "&:hover": {
                  background: primaryColors?.errorMain,
                  color: primaryColors?.white
                }
              };
            }
            if (
              ownerState.variant === "outlined" &&
              ownerState.color === "info"
            ) {
              return {
                backgroundColor: primaryColors?.white,
                color: primaryColors?.color7A7A7A,
                border: `1px solid ${primaryColors?.colorD9D9D9}`,

                "&:hover": {
                  background: primaryColors?.primary,
                  borderColor: primaryColors?.primary,

                  color: primaryColors?.white
                }
              };
            }

            if (
              ownerState.variant === "outlined" &&
              ownerState.color === "inherit"
            ) {
              return {
                backgroundColor: primaryColors?.white,
                color: primaryColors?.black,
                border: `1px solid ${primaryColors?.disabledBg}`,

                "&:hover": {
                  background: primaryColors?.disabledBg,
                  borderColor: primaryColors?.disabledBg,

                  color: primaryColors?.black
                }
              };
            }
          }
        },
        defaultProps: {
          disableElevation: true
        }
      },

      MuiBackdrop: {
        styleOverrides: {
          root: {
            // backdropFilter: "blur(4px)"
          }
        }
      },
      MuiTabs: {
        styleOverrides: {
          indicator: ({ theme }) => ({
            backgroundColor: theme?.palette?.primary.main
          })
        }
      }
    }
  };
};
