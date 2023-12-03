/* eslint-disable mui-path-imports/mui-path-imports */
/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import * as React from "react";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import assest from "@/json/assest";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrap";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button, Stack } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function Header(props: Props) {
  const navItems = [
    {
      name: "Products",
      route: "/product",
      submenu: [
        {
          linkName: " League Management ",
          subName: "Software to manage Leagues",
          icon: assest?.icon1,
          path: "/league-management"
        },
        {
          linkName: " Live Scoring App ",
          subName: "Tool for live scores ",
          icon: assest?.icon2,
          path: "/"
        },
        {
          linkName: " Live Stream ",
          subName: "Tool to live stream matches",
          icon: assest?.icon3,
          path: "/"
        }
      ]
    },
    {
      name: "Resources",
      route: "/resource",
      submenu: [
        {
          linkName: "Scoring Guide",
          subName: "",
          icon: "",
          path: "/"
        },
        {
          linkName: "Rank Calculator",
          subName: "",
          icon: "",
          path: "/"
        },
        {
          linkName: "FAQs",
          subName: "",
          icon: "",
          path: "/"
        }
      ]
    },
    {
      name: "Company",
      route: "/hosts"
    },
    {
      name: "Pricing",
      route: "/leasingagents"
    },
    {
      name: "More",
      route: "/drivers"
    }
  ];

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { userData, isLoggedIn } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={item?.route} key={item.name}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  // for adding class to header while scroll
  const [scroll, setScroll] = React.useState(false);

  const detectScroll = React.useCallback(() => {
    setScroll(window.scrollY > 60);
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  return (
    <HeaderWrap
      sx={{ display: "flex" }}
      className={scroll ? "fixed_header" : ""}
    >
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"
      >
        <Container fixed className="cus_container">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" className="headerLogo">
              <Image src={assest.logo_img} width={250} height={38} alt="Logo" />
            </Link>
            {isLoggedIn ? (
              <Box
                sx={{ display: { xs: "none", sm: "block" } }}
                className="navbar"
              >
                <CustomButtonPrimary
                  onClick={handleLogout}
                  type="button"
                  variant="text"
                >
                  <span>Logout</span>
                </CustomButtonPrimary>

                <CustomButtonPrimary type="button" variant="text">
                  <span>{userData?.email}</span>
                </CustomButtonPrimary>
              </Box>
            ) : (
              <Box
                sx={{ display: { xs: "none", sm: "block" } }}
                className="navbar"
              >
                {navItems.map((item, index) => (
                  <Button
                    disableRipple
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    className={router.pathname === item.route ? "active" : ""}
                  >
                    {item?.name}
                    {index !== 3 && (
                      <Box
                        className={
                          index !== 0 ? "menu-ddown slim" : "menu-ddown"
                        }
                      >
                        {item.submenu !== undefined &&
                          item.submenu.map((data) => (
                            <Stack
                              direction="row"
                              alignItems="center"
                              flexWrap="wrap"
                              className={
                                data?.icon ? "each_block" : "each_block no_icon"
                              }
                            >
                              <i>
                                {data?.icon && (
                                  <Image
                                    src={data?.icon}
                                    alt="icon"
                                    width={70}
                                    height={70}
                                  />
                                )}
                              </i>
                              <Box className="each_block_rgt">
                                <Link href={data?.path}>{data?.linkName}</Link>
                                {data?.subName && (
                                  <Typography>{data?.subName}</Typography>
                                )}
                              </Box>
                            </Stack>
                          ))}
                      </Box>
                    )}
                  </Button>
                ))}
              </Box>
            )}
            <Box className="hdr_rgt">
              <CustomButtonPrimary
                variant="contained"
                color="primary"
                type="button"
              >
                <Typography variant="caption">Login</Typography>
              </CustomButtonPrimary>
              <CustomButtonPrimary
                variant="contained"
                color="primary"
                type="button"
              >
                <Typography variant="caption">SignUp</Typography>
              </CustomButtonPrimary>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </HeaderWrap>
  );
}
