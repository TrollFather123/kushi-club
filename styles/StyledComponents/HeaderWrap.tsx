import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  background: transparent;
  /* box-shadow: 0px 4px 58px rgba(0, 0, 0, 0.07); */
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
    button {
      margin-right: 30px;
      position: relative;
      display: inline-block;
      font-size: 16px;
      font-weight: 700;
      position: relative;
      color: ${primaryColors?.white};
      &:hover {
        color: ${primaryColors?.btnYlwColor};
        .menu-ddown {
          display: block;
        }
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
  .menu-ddown {
    display: none;
    position: absolute;
    top: 40px;
    left: 0;
    width: 350px;
    padding: 20px 0 10px 0;
    z-index: 99;
    text-align: left;
    font-size: 0.875em;
    font-weight: bold;
    color: #0089ee;
    background-color: ${primaryColors?.white};
    transition: 0.3s all;
    -webkit-transition: 0.3s all;
    -moz-transition: 0.3s all;
    -o-transition: 0.3s all;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
    .each_block {
      padding: 10px 25px;
      i {
        width: 50px;
        height: 50px;
        flex-basis: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .each_block_rgt {
        flex-basis: calc(100% - 50px);
        max-width: calc(100% - 50px);
        padding-left: 15px;
        a {
          text-transform: uppercase;
          display: block;
          color: ${primaryColors.color333};
          font-size: .875em;
          font-weight: 700;
        }
        p {
          font-weight: 100;
          font-size: 12px;
        }
      }
      &.no_icon{
        i{
          width: 0;
          height: 0;
          flex-basis: 0;
        }
        .each_block_rgt {
          flex-basis: 100%;
          max-width: 100%;
          padding: 0;
        }
      }
    }
    &:before {
      position: absolute;
      top: -10px;
      left: 20px;
      content: url(${assest.top_arrow});
    }
    &.slim {
      width: 180px;
    }
  }
`;
