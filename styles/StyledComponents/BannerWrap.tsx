import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const Bannerwrap = styled(Box, {
  shouldForwardProp: (data) => data !== "fontsColor"
})<{ fontsColor: string }>`
  padding: 150px 0 0 0;
  position: relative;
  z-index: 1;
  .banner_fig {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .banner_wrap {
    text-align: center;
    h1 {
      color: ${({ fontsColor }) => fontsColor};
    }
    p {
      color: ${({ fontsColor }) => fontsColor};
      font-size: 19px;
      max-width: 1040px;
      margin: 0 auto 20px auto;
    }
  }
  .search_sec {
    max-width: 585px;
    margin: 0 auto 20px auto;
    .MuiInputBase-root {
      border: 0;
      background-color: ${primaryColors?.white};
      padding: 7px;
      fieldset {
        border-color: ${primaryColors?.white};
      }
      input {
        border: 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: ${primaryColors?.auth_input_bg};
        background-color: transparent;
        border-radius: 0;
        transition: none;
        &::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: ${primaryColors?.auth_input_bg};
          opacity: 1;
        }

        &::-moz-placeholder {
          /* Firefox 19+ */
          color: ${primaryColors?.auth_input_bg};
          opacity: 1;
        }

        &:-ms-input-placeholder {
          /* IE 10+ */
          color: ${primaryColors?.auth_input_bg};
          opacity: 1;
        }

        &:-moz-placeholder {
          /* Firefox 18- */
          color: ${primaryColors?.auth_input_bg};
          opacity: 1;
        }
      }
    }
  }
`;
