/* eslint-disable mui-path-imports/mui-path-imports */
/* eslint-disable import/order */
/* eslint-disable no-undef */
import React from "react";
import useOnlineStatus from "@/hooks/useDetectOnline";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";
import Seo from "@/components/Seo/Seo";
import { Backdrop, Box, CircularProgress } from "@mui/material";

interface wrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = (props: wrapperProps) => {
  const { children } = props;

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter();

  const routerText = router.pathname.split("");

  routerText.shift();
  const favText = routerText.join("").toString().toUpperCase();
  const projectName = "KushiClubs";

  useOnlineStatus();

  return (
    <>
      {/* <NextProgress height={8} color="#266C87" /> */}
      <Seo
        title={
          router.pathname === "/"
            ? `${projectName}`
            : `${projectName} || ${favText}`
        }
        canonical=""
        description=""
        url=""
        image=""
      />
      <Header />

      <Box className="body_content">{children}</Box>

      <Footer />

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Wrapper;
