import Banner from "@/components/Banner/Banner";
import ProductSec from "@/components/ProductSec/ProductSec";
import assest from "@/json/assest";
import { searchList } from "@/json/mock/search.mock";
import Wrapper from "@/layout/wrapper/Wrapper";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function Home() {
  return (
    <Wrapper>
      <Banner banner_image={assest?.banner_back_image}>
        <Box className="banner_wrap">
          <Typography variant="h1">CRICKET LIKE NEVER BEFORE.</Typography>
          <Typography>
            CricClubs is one of the leading cricket technology platforms which
            helps all the stakeholders of cricket irrespective of their roles
            such as administrator, player, scorer, umpires,fans to experience
            cricket like never before.
          </Typography>
          <Box component="form" className="search_sec">
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={searchList.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search League / Tournament"
                  fullWidth
                  InputProps={{
                    ...params.InputProps,
                    type: "search"
                  }}
                />
              )}
            />
          </Box>
          <figure>
            <Image
              src={assest?.banner_image}
              alt="banner small image"
              width={1122}
              height={400}
            />
          </figure>
        </Box>
      </Banner>
      <ProductSec />
    </Wrapper>
  );
}
