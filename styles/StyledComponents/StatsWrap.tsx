import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const StatsWrap = styled(Box)`
  padding: 180px 0;
  background-image: url(${assest?.stats_bg});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% 100%;
  .list_Sec {
    margin-top: 35px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: calc(100% / 4);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3{
            font-family: 'Roboto';
            font-size: 3.750rem;
            font-weight: 800;
            color: ${primaryColors?.white};
        }
        h5{
            font-family: 'Roboto';
            font-size: 1.250rem;
            font-weight: 700;
            color: ${primaryColors?.white};
        }
      }
    }
  }
`;