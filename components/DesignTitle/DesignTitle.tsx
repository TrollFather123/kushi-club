/* eslint-disable mui-path-imports/mui-path-imports */
/* eslint-disable react/self-closing-comp */

import { DesignTitleWrapper } from "@/styles/StyledComponents/DesignTitleWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";

import { Box, Typography } from "@mui/material";
import React from "react";

interface designTitleProps {
  title: string;
  children?: React.ReactNode;
  fontsColor: string;
  btnTxt?: string;
}

export default function DesignTitle({
  title,
  children,
  fontsColor,
  btnTxt
}: designTitleProps) {
  const fontColor = fontsColor;
  return (
    <DesignTitleWrapper fontColor={fontColor}>
      {btnTxt && (
        <Box className='btn_otr'>
           <CustomButtonPrimary color="secondary" variant="contained">
          <Typography variant="caption">{btnTxt}</Typography>
        </CustomButtonPrimary>
        </Box>
      )}
      <Typography variant="h2">{title}</Typography>
      <hr className="heading-divider mb-4"></hr>
      {children}
    </DesignTitleWrapper>
  );
}
