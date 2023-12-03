/* eslint-disable react/no-array-index-key */
/* eslint-disable import/order */
/* eslint-disable mui-path-imports/mui-path-imports */
import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import DesignTitle from "../DesignTitle/DesignTitle";
import { primaryColors } from "@/themes/_muiPalette";
import { StatsList } from "@/json/mock/demo.mock";
import { Container } from "@mui/system";
import { StatsWrap } from "@/styles/StyledComponents/StatsWrap";

interface statsListProps {
  count: string;
  title: string;
}

export const StatsListItems = ({ count, title }: statsListProps) => {
  return (
    <ListItem disablePadding>
      <Typography variant="h3">{count}+</Typography>
      <Typography variant="h5">{title}</Typography>
    </ListItem>
  );
};

export default function StatsSec() {
  return (
    <StatsWrap>
      <Container fixed>
        <DesignTitle
          title="CricClubs On The Globe"
          fontsColor={primaryColors?.white}
        />
        <Box className="list_Sec">
          <List disablePadding>
            {StatsList?.map((item, index) => (
              <StatsListItems {...item} key={index} />
            ))}
          </List>
        </Box>
      </Container>
    </StatsWrap>
  );
}
