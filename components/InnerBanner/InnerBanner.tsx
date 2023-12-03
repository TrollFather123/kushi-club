/* eslint-disable mui-path-imports/mui-path-imports */
import assest from "@/json/assest";
import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import React from "react";

export const InnerBannerWrap = styled(Box)`
  padding-top: 170px;
  background-image: url(${assest?.inner_banner_bg});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% auto;
  height: 680px;
  .inner_banner_wrap {
    display: flex;
    justify-content: center;
    figure {
      line-height: 0;
      font-size: 0;
    }
  }
`;
interface bannerProps {
  children: React.ReactNode;
}

export default function InnerBanner({ children }: bannerProps) {
  return (
    <InnerBannerWrap>
      <Container fixed>
        <Box className="inner_banner_wrap">{children}</Box>
      </Container>
    </InnerBannerWrap>
  );
}
