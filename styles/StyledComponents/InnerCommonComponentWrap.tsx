/* eslint-disable mui-path-imports/mui-path-imports */
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const InnerCommonComponentWrap = styled(Box)`
  .tab_sec {
    margin-top: 160px;
    .tab_top_wrap {
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
      margin-bottom: 75px;
      padding: 1.25rem;
      padding-bottom: 0;
    }
    .MuiTabs-flexContainer {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    .MuiTab-root {
      font-size: 0.875rem;
      font-weight: 700;
      color: #666;
      min-height: 135px;
      border-radius: 0;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      text-align: center;
      justify-content: flex-start;
      border-bottom: 3px solid transparent;
      &:hover {
        border-bottom: 3px solid #6badf7;
      }
    }
    .MuiTabs-indicator {
      height: 3px;
      background-color: #6badf7;
    }
  }
`;
