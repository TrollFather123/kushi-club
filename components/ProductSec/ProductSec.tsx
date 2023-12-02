/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { CommonHeader } from "../CommonHeader/CommonHeader";

export const ProductWrapper = styled(Box)`
  background-image: url(${assest?.home_products_bg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`;
export const ProductCardWrap = styled(Box)`
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  background-color: ${primaryColors?.cardbg};
  padding: 45px 33px;
  text-align: center;
  i {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }
  h4 {
    font-family: "Roboto";
    font-size: 26px;
    color: ${primaryColors?.color333};
    font-weight: 400;
    margin-bottom: 10px;
  }
  p {
    font-weight: 300;
  }
`;

interface productProps {
  icon: string;
  title: string;
  description: string;
}

export const ProductCard = ({ description, icon, title }: productProps) => {
  return (
    <ProductCardWrap>
      <i>
        <Image src={icon} alt="icon" width={81} height={70} />
      </i>
      <Typography variant="h4">{title}</Typography>
      <Typography>{description}</Typography>
    </ProductCardWrap>
  );
};

export default function ProductSec() {
  const ProductCardList = [
    {
      icon: assest?.icon1,
      title: "League Management",
      description:
        "CricClubs league management solution is a complete package for cricket admins to smoothly conduct their leagues with ease. The entire league management setup can be completed within 5 mins."
    },
    {
      icon: assest?.icon2,
      title: "League Management",
      description:
        "CricClubs league management solution is a complete package for cricket admins to smoothly conduct their leagues with ease. The entire league management setup can be completed within 5 mins."
    },
    {
      icon: assest?.icon3,
      title: "League Management",
      description:
        "CricClubs league management solution is a complete package for cricket admins to smoothly conduct their leagues with ease. The entire league management setup can be completed within 5 mins."
    },
    {
      icon: assest?.icon4,
      title: "League Management",
      description:
        "CricClubs league management solution is a complete package for cricket admins to smoothly conduct their leagues with ease. The entire league management setup can be completed within 5 mins."
    },
    {
      icon: assest?.icon5,
      title: "League Management",
      description:
        "CricClubs league management solution is a complete package for cricket admins to smoothly conduct their leagues with ease. The entire league management setup can be completed within 5 mins."
    },
    {
      icon: assest?.icon6,
      title: "League Management",
      description:
        "CricClubs league management solution is a complete package for cricket admins to smoothly conduct their leagues with ease. The entire league management setup can be completed within 5 mins."
    }
  ];
  return (
    <ProductWrapper className="cmn_gap">
      <Container fixed>
        <CommonHeader title="Products" />
        <Box className="product_sec">
          <Grid container spacing={6}>
            {ProductCardList?.map((item, index) => (
              <Grid item md={4} xs={12} key={index}>
                <ProductCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ProductWrapper>
  );
}
