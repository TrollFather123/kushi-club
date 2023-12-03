/* eslint-disable react/no-unescaped-entities */
/* eslint-disable mui-path-imports/mui-path-imports */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography
} from "@mui/material";
import Image from "next/image";
import React from "react";

export const CountrySecWrap = styled(Box)`
  background-image: url(${assest.country_bg});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% 100%;
  padding: 200px 0 120px 0;
  .country_list {
    padding-left: 1rem;
    li {
      margin-top: 3rem;
      display: block;
      &:first-child {
        margin-top: 0;
      }
      strong {
        font-size: 3.75rem;
        font-weight: 800;
        display: block;
        line-height: 1;
        color: ${primaryColors.white};
      }
      p {
        color: ${primaryColors.white};
        font-weight: 400;
        line-height: 1.2;
        font-size: 1.25rem;
      }
    }
  }
  .country_top {
    margin-bottom: 3rem;
    h2 {
      color: ${primaryColors.white};
      text-align: center;
      margin: 1.5rem 0;
    }
    p {
      color: ${primaryColors.white};
      font-weight: 300;
    }
  }
`;

export default function CountrySec() {
   
  return (
    <CountrySecWrap>
      <Container fixed>
        <Box className="country_top">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="h2">Why Cricclubs</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body1">
                CricClubs is a leading cricket technology company that is used
                in more than 58+countries and 30000+ leagues along with 30+
                NGB's across the world. CricClubs is known for ease of
                navigation, comprehensive league management and is absolutely
                loved by our users. CricClubs believes that your league
                information, matches, scorecards, statistics etc should be
                freely and easily accessible by your players, fans, and
                audience.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box className="country_btm">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={7}>
              <Image src={assest.map_image} alt="" width={614} height={587} />
            </Grid>
            <Grid item xs={12} md={5}>
              <Box className="country_list">
                <List disablePadding>
                  <ListItem disablePadding>
                    <strong>58+</strong>
                    <Typography variant="body1">Countries</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <strong>30K+</strong>
                    <Typography variant="body1">Leagues</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <strong>30+</strong>
                    <Typography variant="body1">NGB's</Typography>
                  </ListItem>
                  <ListItem disablePadding>
                    <strong>5M+</strong>
                    <Typography variant="body1">Users</Typography>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </CountrySecWrap>
  );
}
