import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  background: transparent;
  box-shadow: 0px 4px 58px rgba(0, 0, 0, 0.07);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9;
  &.fixed_header {
    background: ${primaryColors?.primary1};
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  }
  .hdr_rgt {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    button {
      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }

  .headerContainer {
    background-color: transparent !important;
    padding: 20px 0;
    transition: all 0.4s;
    box-shadow: 0;
  }

  .headerLogo {
    width: 230px;
    display: inline-block;
    transition: all 0.4s;
  }
  .navbar {
    margin: auto;
    a {
      margin-right: 30px;
      position: relative;
      display: inline-block;
      font-size: 16px;
      font-weight: 700;
      color: ${primaryColors?.white};
      &:hover {
        color: ${primaryColors?.btnYlwColor};
      }
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: ${primaryColors?.btnYlwColor};
      }
    }
  }
`;
