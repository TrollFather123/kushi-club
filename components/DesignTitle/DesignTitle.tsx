/* eslint-disable mui-path-imports/mui-path-imports */
/* eslint-disable react/self-closing-comp */

import { DesignTitleWrapper } from "@/styles/StyledComponents/DesignTitleWrapper";

import { Typography } from "@mui/material";
import React from "react";

interface designTitleProps {
  title: string;
  children?: React.ReactNode;
  fontsColor: string;
}

export default function DesignTitle({
  title,
  children,
  fontsColor
}: designTitleProps) {
  const fontColor = fontsColor;
  return (
    <DesignTitleWrapper fontColor={fontColor}>
      <Typography variant="h2">{title}</Typography>
      <hr className="heading-divider mb-4"></hr>
      {children}
    </DesignTitleWrapper>
  );
}
