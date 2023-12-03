/* eslint-disable mui-path-imports/mui-path-imports */
import assest from "@/json/assest";
import styled from "@emotion/styled";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const BrandsSecWrap = styled(Box)`
  background-image: url(${assest.brand_image_bg});
  background-repeat: no-repeat;
  background-position: right center;
  padding-bottom: 48px;
  .brand_inr {
    h2 {
      text-align: end;
      margin-bottom: 3rem;
    }
    .card {
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
      border-radius: 0;
      padding: 1.25rem;
      img {
        max-width: 68px;
        margin: 0 auto;
      }
    }
  }
  .border {
    border: 1px solid #dee2e6 !important;
  }
`;

export default function BrandsSec() {
  const brandImages = [
    {
      image: `${assest.brand_image1}`
    },
    {
      image: `${assest.brand_image2}`
    },
    {
      image: `${assest.brand_image1}`
    },
    {
      image: `${assest.brand_image2}`
    },
    {
      image: `${assest.brand_image1}`
    },
    {
      image: `${assest.brand_image2}`
    },
    {
      image: `${assest.brand_image1}`
    },
    {
      image: `${assest.brand_image2}`
    },
    {
      image: `${assest.brand_image1}`
    },
    {
      image: `${assest.brand_image2}`
    },
    {
      image: `${assest.brand_image1}`
    },
    {
      image: `${assest.brand_image2}`
    },
    {
      image: `${assest.brand_image1}`
    },
    {
      image: `${assest.brand_image2}`
    },
    {
      image: `${assest.brand_image1}`
    },
    {
      image: `${assest.brand_image2}`
    },
    {
      image: `${assest.brand_image1}`
    },
    {
      image: `${assest.brand_image2}`
    }
  ];
  return (
    <BrandsSecWrap>
      <Container fixed>
        <Box className="brand_inr">
          <Typography variant="h2">Cricclubs is used by</Typography>
          <Grid container spacing={0} className="border">
            {brandImages.map((data) => (
              <Grid item xs={12} md={2} className="card">
                <Image src={data.image} alt="" width={68} height={68} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </BrandsSecWrap>
  );
}
