/* eslint-disable mui-path-imports/mui-path-imports */
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const DesignTitleWrapper = styled(Box, {
  shouldForwardProp: (data) => data !== "fontColor"
})<{ fontColor: string }>`
  text-align: center;
  h2 {
    color: ${({ fontColor }) => fontColor};
    text-align: center;
  }
  .heading-divider {
    display: inline-block;
    border: 0;
    border-top: 3px solid #f47b21;
    height: 0;
    width: 60px;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }
  p {
    /* width: 50%;
    margin: 0 auto; */
    font-weight: 300;
    color: ${({ fontColor }) => fontColor};
  }
  .btn_otr {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;
