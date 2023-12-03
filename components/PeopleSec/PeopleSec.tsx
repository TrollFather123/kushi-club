/* eslint-disable react/self-closing-comp */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
// eslint-disable-next-line mui-path-imports/mui-path-imports
import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export const PeopleWrap = styled(Box)`
  background-image: url(${assest.people_bg});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  padding: 255px 0 80px 0;
  .people_inr {
    text-align: center;
    h2 {
      color: ${primaryColors.white};
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
      width: 50%;
      margin: 0 auto;
      font-weight: 300;
      color: ${primaryColors.white};
      a {
        font-size: 1.25rem;
        color: ${primaryColors.white};
        font-weight: 400;
      }
    }
    .text2 {
      margin: 1.5rem 0;
      width: 100%;
    }
  }
  .text-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function PeopleSec() {
  return (
    <PeopleWrap>
      <Container fixed>
        <Box className="people_inr">
          <Typography variant="h2">
            Speak to our people, to know more
          </Typography>
          <hr className="heading-divider mb-4"></hr>
          <Typography variant="body1">
            For more details on any of our products, pricing or demos you can
            reach us. Our awesome team is always there to quick response to all
            your queries
          </Typography>
          <Typography variant="body1" className="text2">
            <Link href="/">sales@cricclubs.com</Link>
          </Typography>
          <Box className="text-center">
            <CustomButtonPrimary variant="contained" color="secondary">
              <Typography variant="caption">Contact</Typography>
            </CustomButtonPrimary>
          </Box>
        </Box>
      </Container>
    </PeopleWrap>
  );
}
