/* eslint-disable mui-path-imports/mui-path-imports */
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const TabBodyContentWrapper = styled(Box)`
  .main_title {
    text-align: right;
    h2 {
        color: ${primaryColors?.black};
      font-size: 2rem;
      max-width: 248px;
      margin-left: auto;
    }
    .heading-divider {
      display: inline-block;
      border: 0;
      border-top: 3px solid #f47b21;
      height: 0;
      width: 60px;
      margin-left: auto;
      margin-bottom: 1.5rem;
      margin-top: 1rem;
    }
    p {
      text-align: justify;
      font-weight: 300;
      color: ${primaryColors?.black};
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
`;

interface tabContentProps {
  mainImage: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  children?: React.ReactNode;
}

export default function TabBodyContent({
  mainImage,
  title,
  children,
  imageWidth,
  imageHeight
}: tabContentProps) {
  return (
    <TabBodyContentWrapper>
      <Grid container spacing={4}>
        <Grid item lg={6} xs={12}>
          <Box className="tab_image">
            <figure>
              <Image
                src={mainImage}
                alt="image"
                width={imageWidth!}
                height={imageHeight!}
              />
            </figure>
          </Box>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Box className="tab_content">
            <Box className="main_title">
              <Typography variant="h2">{title}</Typography>
              <hr className="heading-divider mb-4" />
              {children}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </TabBodyContentWrapper>
  );
}
