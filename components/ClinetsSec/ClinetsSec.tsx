/* eslint-disable no-var */
/* eslint-disable mui-path-imports/mui-path-imports */
import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import assest from "@/json/assest";
import Slider from "react-slick";
import Image from "next/image";
import { primaryColors } from "@/themes/_muiPalette";

export const ClinetsSecWrap = styled(Box)`
  padding: 120px 0;
  .clinets_inr {
    width: 100%;
    max-width: 970px;
    height: 570px;
    margin: 0 auto;
    background-image: url(${assest.test_bg});
    background-repeat: no-repeat;
    background-position: center 20px;
    background-size: contain;
  }
  .testimonial-text {
    margin: 120px 0 20px 0;
    p {
      font-size: 1.125rem;
      font-weight: 300;
      color: ${primaryColors.textPrimaryColor};
    }
  }
  .quote {
    position: absolute;
    left: 35px;
    top: 0;
    width: 125px;
  }
  .tstnl-details {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 20px;
    .dtls_img {
      img {
        border-radius: 100%;
      }
    }
    .dtls_btm {
      margin-left: 6px;
      text-align: left;
      span {
        font-size: 1.125rem;
        font-weight: 300;
        color: ${primaryColors.textPrimaryColor};
        display: inline-block;
        margin: 2px 0;
      }
      h5 {
        font-size: 20px;
        font-weight: 400;
        line-height: 1.2;
        font-family: "Roboto", sans-serif;
        color: ${primaryColors.textPrimaryColor};
      }
    }
  }
  .item_card {
    position: relative;
    font-size: 1.125rem;
    font-weight: 100;
    color: ${primaryColors.textPrimaryColor};
    max-width: 888px;
    margin: 0 auto;
    margin-bottom: 25px;
    border-radius: 20px;
    height: auto;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    p {
      text-align: start;
    }
    .card-body {
      padding: 3rem;
    }
  }
  .slick-slide {
    > div {
      text-align: center;
    }
  }
  .clinets_outr {
    h2 {
      padding-left: 3rem;
      margin: 1.5rem 0 1.5rem 3rem;
    }
  }
`;

export default function ClinetsSec() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <ClinetsSecWrap>
      <Container fixed>
        <Box className="clinets_outr">
          <Typography variant="h2">Words from our clients</Typography>
          <Box className="clinets_inr">
            <Box className="clinets_slider">
              <Slider {...settings}>
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
                      <Typography>
                        It has been great working with the CricClubs team In
                        2019 having made the move across for all our Domestic
                        League administration and match Scoring requirements.
                        The key feature for us was having our own Guernsey
                        Cricket App available for download by players and fans
                        alike. Not only does this provide up to the minute news
                        on fixtures and results but increases the profile of
                        Guernsey Cricket. When we have run into problems the
                        support service has jumped in to help very quickly. We
                        look forward to many more seasons with CricClubs and
                        working on many more innovative ideas to promote our
                        local game on their platform.
                      </Typography>
                    </Box>
                    <Box className="tstnl-details">
                      <Box className="dtls_img">
                        <Image
                          src={assest.user}
                          alt="test-img"
                          width={85}
                          height={85}
                        />
                      </Box>

                      <Box className="dtls_btm">
                        <Typography variant="h5">
                          Mark Latter (CEO/Director)
                        </Typography>
                        <span>Guernsey Cricket Board</span>
                        <br />
                        <span>Guernsey</span>
                      </Box>
                    </Box>
                  </Box>
                </Box>

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
                      <Typography>
                        Cricket Leinster needed a live scoring solution that was
                        available on all phones, tablets and laptops, and that
                        could also provide overlays for matches being streamed.
                        CricClubs was the best solution we found. On top of this
                        their support and help has been second to none, with
                        CricClubs continually developing to suit our needs.
                      </Typography>
                    </Box>
                    <Box className="tstnl-details">
                      <Box className="dtls_img">
                        <Image
                          src={assest.user}
                          alt="test-img"
                          width={85}
                          height={85}
                        />
                      </Box>

                      <Box className="dtls_btm">
                        <Typography variant="h5">
                          Mark Latter (CEO/Director)
                        </Typography>
                        <span>Guernsey Cricket Board</span>
                        <br />
                        <span>Guernsey</span>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Slider>
            </Box>
          </Box>
        </Box>
      </Container>
    </ClinetsSecWrap>
  );
}
