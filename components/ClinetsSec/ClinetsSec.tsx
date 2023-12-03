/* eslint-disable react/no-array-index-key */
/* eslint-disable no-var */
/* eslint-disable mui-path-imports/mui-path-imports */

import { Box, Button, Container, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import assest from "@/json/assest";
import Slider from "react-slick";
import Image from "next/image";

import { clientList } from "@/json/mock/demo.mock";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  ClinetsSecWrap,
  SliderButtonStack
} from "@/styles/StyledComponents/ClinetsSecWrap";
import { useRef } from "react";

interface ItemCardProps {
  image: string;
  description: string;
  title: string;
  designation: string;
  location: string;
  cricket_board: string;
}

export const ItemCard = ({ ...props }: ItemCardProps) => {
  const { description, designation, image, location, title, cricket_board } =
    props;
  return (
    <Box className="item_card">
      <Box className="card-body">
        <Image
          src={assest.quote}
          alt=""
          width={125}
          height={96}
          className="quote"
        />
        <Box className="testimonial-text">
          <Typography>{description}</Typography>
        </Box>
        <Box className="tstnl-details">
          <Box className="dtls_img">
            <Image src={image} alt="test-img" width={85} height={85} />
          </Box>

          <Box className="dtls_btm">
            <Typography variant="h5">
              {title}({designation})
            </Typography>
            <span>{cricket_board}</span>
            <br />
            <span>{location}</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default function ClinetsSec() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  const sliderRef = useRef<any>();

  const slideNext = () =>{
    sliderRef.current.slickNext()
  }

  const slidePrev = () =>{
    sliderRef.current.slickPrev()
  }
  return (
    <ClinetsSecWrap>
      <Container fixed>
        <Box className="clinets_outr">
          <Typography variant="h2">Words from our clients</Typography>
          <Box className="clinets_inr">
            <Box className="clinets_slider">
              <Slider {...settings} ref={sliderRef}>
                {clientList?.map((item, index) => (
                  <ItemCard {...item} key={index} />
                ))}
              </Slider>
            </Box>
            <SliderButtonStack direction="row" alignItems="center">
              <Button className="prev_btn" onClick={()=>slidePrev()}>
                <ArrowBackIosIcon />
              </Button>
              <Button className="next_btn" onClick={()=>slideNext()}>
                <ArrowForwardIosIcon />
              </Button>
            </SliderButtonStack>
          </Box>
        </Box>
      </Container>
    </ClinetsSecWrap>
  );
}
