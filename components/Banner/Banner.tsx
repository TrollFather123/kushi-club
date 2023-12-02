import { Bannerwrap } from "@/styles/StyledComponents/BannerWrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";
import React from "react";

interface bannerPrps {
  banner_image: string;
  children: React.ReactNode;
  textcolors?: string;
}

export default function Banner({
  banner_image,
  children,
  textcolors = "white"
}: bannerPrps) {
  const fontsColor = textcolors;
  return (
    <Bannerwrap fontsColor={fontsColor}>
      <figure className="banner_fig">
        <Image
          src={banner_image}
          alt="banner image"
          width={1920}
          height={1000}
        />
      </figure>
      <Box className="banner_txt">
        <Container fixed>{children}</Container>
      </Box>
    </Bannerwrap>
  );
}
