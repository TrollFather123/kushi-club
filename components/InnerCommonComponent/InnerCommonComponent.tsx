/* eslint-disable react/no-array-index-key */
/* eslint-disable import/order */
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import DesignTitle from "../DesignTitle/DesignTitle";
import { primaryColors } from "@/themes/_muiPalette";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Image from "next/image";
import Container from "@mui/material/Container";

type tablistType = {
  icon: string;
  tabLabel: string;
  tabBodyComponent: React.ReactNode;
};

interface InnerCompProps {
  designtitle?: string;
  titleDescription?: string;
  tabList: tablistType[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export const InnerCommonComponentWrap = styled(Box)``;

export default function InnerCommonComponent({
  designtitle,
  titleDescription,
  tabList
}: InnerCompProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <InnerCommonComponentWrap className="cmn_gap">
      <DesignTitle title={designtitle!} fontsColor={primaryColors?.black}>
        <Typography>{titleDescription}</Typography>
      </DesignTitle>
      <Container fixed>
        <Box className="tab_sec">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              {tabList?.map((item, index) => (
                <Tab
                  icon={
                    <Image src={item?.icon} alt="icon" width={55} height={55} />
                  }
                  label={item?.tabLabel}
                  {...a11yProps(index)}
                  key={index}
                />
              ))}
            </Tabs>
          </Box>
          <Box className="tabpanel_otr">
            {tabList?.map((item, index) => (
              <CustomTabPanel value={value} index={index} key={index}>
                {item?.tabBodyComponent}
              </CustomTabPanel>
            ))}
          </Box>
        </Box>
      </Container>
    </InnerCommonComponentWrap>
  );
}
