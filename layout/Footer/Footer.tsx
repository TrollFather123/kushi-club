/* eslint-disable react/jsx-no-useless-fragment */
import assest from "@/json/assest";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Link from "next/link";
import { List, ListItem, Grid, Typography, Stack } from "@mui/material";

import { useRouter } from "next/router";
import { primaryColors } from "@/themes/_muiPalette";

const FooterWrap = styled(Box)`
  background-image: url(${assest.footer_bg});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  padding: 90px 0 150px 0;
  .ftr_inr {
    p {
      font-size: 1.25rem;
      color: ${primaryColors.primary};
      margin-bottom: 1rem;
      font-weight: 700;
    }
  }
  .ftr_list {
    li {
      font-size: 1rem;
      font-weight: 300;
      a {
        color: ${primaryColors.textPrimaryColor};
        line-height: 200%;
      }
    }
  }
  .social {
    display: flex;
    align-items: center;
    li {
      width: auto;
      margin-right: 5px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .app_title {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
  .ftr-wrapper {
    padding-bottom: 3rem;
    border-bottom: 4px solid ${primaryColors.color007bff};
  }
  .btm_rgt {
    p {
      font-weight: 300;
      a {
        display: inline-block;
        color: ${primaryColors.color007bff};
        &:first-child {
          margin-left: 16px;
        }
      }
    }
  }
  .ftr_btm {
    padding-top: 48px;
  }
`;

const navItems = [
  {
    name: "home",
    route: "/"
  },
  {
    name: "About",
    route: "/about"
  },
  {
    name: "Products",
    route: "/products"
  },
  {
    name: "Package",
    route: "/package"
  },
  {
    name: "Contact",
    route: "/contact"
  }
];

const Footer = () => {
  const navItems = [
    {
      name: "League Management",
      route: "/"
    },
    {
      name: "Live Scoring App",
      route: "/about"
    },
    {
      name: "Live Stream",
      route: "/products"
    },
    {
      name: "Custom Apparel",
      route: "/package"
    },
    {
      name: "Scoreboard",
      route: "/contact"
    },
    {
      name: "Academy Management",
      route: "/contact"
    }
  ];
  const navItems2 = [
    {
      name: "Scoring Guide",
      route: "/"
    },
    {
      name: "Rank Calculator",
      route: "/about"
    },
    {
      name: "Videos",
      route: "/products"
    },
    {
      name: "FAQs",
      route: "/package"
    }
  ];
  const navItems3 = [
    {
      name: "About",
      route: "/"
    },
    {
      name: "Media",
      route: "/about"
    },
    {
      name: "Career",
      route: "/products"
    },
    {
      name: "Contact",
      route: "/package"
    }
  ];
  const navItems4 = [
    {
      name: "Blogs",
      route: "/"
    },
    {
      name: "Match Centre",
      route: "/about"
    }
  ];
  const SocialIcons = [
    {
      image: `${assest.social_icon1}`,
      path: "/"
    },
    {
      image: `${assest.social_icon2}`,
      path: "/"
    },
    {
      image: `${assest.social_icon3}`,
      path: "/"
    },
    {
      image: `${assest.social_icon4}`,
      path: "/"
    }
  ];
  const router = useRouter();
  return (
    <>
      <FooterWrap>
        <Container fixed>
          <Box className="ftr-wrapper">
            <Grid container spacing={2}>
              <Grid xs={12} item md={2.4}>
                <Box className="ftr_inr">
                  <Typography variant="body1">PRODUCTS</Typography>
                  <List disablePadding className="ftr_list">
                    {navItems.map((data) => (
                      <ListItem disablePadding>
                        <Link href={data.route}>{data.name}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
              <Grid xs={12} item md={2.4}>
                <Box className="ftr_inr">
                  <Typography variant="body1">RESOURCES</Typography>
                  <List disablePadding className="ftr_list">
                    {navItems2.map((data) => (
                      <ListItem disablePadding>
                        <Link href={data.route}>{data.name}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
              <Grid xs={12} item md={2.4}>
                <Box className="ftr_inr">
                  <Typography variant="body1">COMPANY</Typography>
                  <List disablePadding className="ftr_list">
                    {navItems3.map((data) => (
                      <ListItem disablePadding>
                        <Link href={data.route}>{data.name}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
              <Grid xs={12} item md={2.4}>
                <Box className="ftr_inr">
                  <Typography variant="body1">MORE</Typography>
                  <List disablePadding className="ftr_list">
                    {navItems4.map((data) => (
                      <ListItem disablePadding>
                        <Link href={data.route}>{data.name}</Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
              <Grid xs={12} item md={2.4}>
                <Box className="ftr_inr">
                  <Typography variant="body1">FOLLOW US</Typography>
                  <List disablePadding className="social">
                    {SocialIcons.map((data) => (
                      <ListItem disablePadding>
                        <Link href={data.path}>
                          <Image
                            alt=""
                            src={data.image}
                            width={30}
                            height={30}
                          />
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                  <Typography variant="body1" className="app_title">
                    DOWNLOAD APP
                  </Typography>
                  <Box className="app">
                    <Link href="/">
                      <Image
                        alt=""
                        src={assest.app_image1}
                        width={152}
                        height={57}
                      />
                    </Link>
                  </Box>
                  <Box className="app">
                    <Link href="/">
                      <Image
                        alt=""
                        src={assest.app_image2}
                        width={152}
                        height={57}
                      />
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="ftr_btm">
            <Stack
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
              direction="row"
            >
              <Link href="/">
                <Image src={assest.ftr_logo} alt="" width={177} height={35} />
              </Link>
              <Box className="btm_rgt">
                <Typography variant="body1">
                  © Copyright 2023 CricClubs.com. All rights reserved.{" "}
                  <Link href="/">Terms</Link> |{" "}
                  <Link href="/">Privacy Policy</Link>
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </FooterWrap>
    </>
  );
};

export default Footer;
