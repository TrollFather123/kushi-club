/* eslint-disable mui-path-imports/mui-path-imports */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";

export const ClinetsSecWrap = styled(Box)`
  padding: 120px 0;
  .clinets_inr {
    width: 100%;
    max-width: 970px;
    height: 570px;
    margin: 0 auto;
    background-image: url(${assest.test_bg});
    background-repeat: no-repeat;
    background-position: center 20px;
    background-size: contain;
    position: relative;
  }
  .testimonial-text {
    margin: 120px 0 20px 0;
    p {
      font-size: 1.125rem;
      font-weight: 300;
      color: ${primaryColors.textPrimaryColor};
    }
  }
  .quote {
    position: absolute;
    left: 35px;
    top: 0;
    width: 125px;
  }
  .tstnl-details {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    .dtls_img {
      img {
        border-radius: 100%;
      }
    }
    .dtls_btm {
      margin-left: 6px;
      text-align: left;
      span {
        font-size: 1.125rem;
        font-weight: 300;
        color: ${primaryColors.textPrimaryColor};
        display: inline-block;
        margin: 2px 0;
      }
      h5 {
        font-size: 20px;
        font-weight: 400;
        line-height: 1.2;
        font-family: "Roboto", sans-serif;
        color: ${primaryColors.textPrimaryColor};
      }
    }
  }
  .item_card {
    position: relative;
    font-size: 1.125rem;
    font-weight: 100;
    color: ${primaryColors.textPrimaryColor};
    max-width: 888px;
    margin: 0 auto;
    margin-bottom: 25px;
    border-radius: 20px;
    height: auto;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    p {
      text-align: start;
    }
    .card-body {
      padding: 3rem;
    }
  }
  .slick-slide {
    > div {
      text-align: center;
    }
  }
  .clinets_outr {
    h2 {
      padding-left: 3rem;
      margin: 1.5rem 0 1.5rem 3rem;
    }
  }
`;

export const SliderButtonStack = styled(Stack)`
  position: absolute;
  left: 20%;
  bottom: 0;
  button {
    position: relative;
    background: ${primaryColors?.white};
    border-radius: 50%;
    height: 40px;
    width: 40px;
    transition: all 0.3s;
    justify-content: center;
    align-items: center;
    min-width: auto;
    color: #0876f0;
    svg {
      width: 15px;
      height: 15px;
      fill: currentColor;
    }
    &:not(:last-child){
        margin-right: 10px;
    }
  }
`;
