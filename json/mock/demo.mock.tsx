/* eslint-disable import/order */
/* eslint-disable mui-path-imports/mui-path-imports */
/* eslint-disable react/no-unescaped-entities */
import TabBodyContent from "@/components/TabBodyContent/TabBodyContent";
import assest from "../assest";
import { Typography } from "@mui/material";

export const clientList = [
  {
    image: assest?.user,
    description:
      "It has been great working with the CricClubs team In 2019 having   made the move across for all our Domestic League administration and match Scoring requirements. The key feature for us was having our own Guernsey Cricket App available for download by players and fans alike. Not only does this provide up to the minute news on fixtures  and results but increases the profile of Guernsey Cricket. When we have run into problems the support service has jumped in to help  very quickly. We look forward to many more seasons with CricClubs and working on many more innovative ideas to promote our local game on their platform.",
    title: "Mark Latter",
    designation: "CEO/Director",
    location: "Guernsey",
    cricket_board: "Guernsey Cricket Board"
  },
  {
    image: assest?.user,
    description:
      "It has been great working with the CricClubs team In 2019 having   made the move across for all our Domestic League administration and match Scoring requirements. The key feature for us was having our own Guernsey Cricket App available for download by players and fans alike. Not only does this provide up to the minute news on fixtures  and results but increases the profile of Guernsey Cricket. When we have run into problems the support service has jumped in to help  very quickly. We look forward to many more seasons with CricClubs and working on many more innovative ideas to promote our local game on their platform.",
    title: "Mark Latter",
    designation: "CEO/Director",
    location: "Guernsey",
    cricket_board: "Guernsey Cricket Board"
  }
];

export const tabContentList = [
  {
    icon: assest?.tab1,
    tabLabel: "Dashboard",
    tabBodyComponent: (
      <TabBodyContent
        mainImage={assest?.tab_main_img1}
        imageHeight={1200}
        imageWidth={900}
        title="League Dashboard
        Home Page"
      >
        <Typography>
          CricClubs league management solution provides all the tools necessary
          for Cricket administrators to manage their league with ease. With an
          instant league website, 5-minute tournament setup, match center,
          automatic points table, comprehensive statistics, mobile app, News,
          Picture Gallery, Social media integrations and much more, CricClubs
          puts technology at your fingertips!
        </Typography>
        <Typography>
          A comprehensive dashboard which gives the full flexibility to manage
          your whole league. You can access the dashboard via control panel and
          explore the plethora of options for your league. Many salient features
          like series, matches, players, schedule, media and much more are
          available at your fingertips for smooth operation. Dashboard is a
          highly usable feature for a league admin where all the features are
          available upfront without much effort of finding. A full cockpit view
          of the features including pricing and billing are available at one
          glance.
        </Typography>
      </TabBodyContent>
    )
  },
  {
    icon: assest?.tab2,
    tabLabel: "Themes",
    tabBodyComponent: (
      <TabBodyContent
        mainImage={assest?.tab_main_img2}
        imageHeight={521}
        imageWidth={548}
        title="Themes"
      >
        <Typography>
          Whether you are an established brand or you are just trying to set up
          your first league, our platform gives you options to choose the best
          look and feel for your league. You can make your league look the way
          you want with options to choose colours, skin and also upload your own
          logo. Using our e-commerce store you can pick the right apparel to
          suit the theme of your league portal. We are exclusively giving our
          premium users with 10 different theme options to choose from. Applying
          a theme is a very simple and intuitive process. Once you login to your
          admin panel you will see the option to customize and there you will be
          provided with theme options. All you have to do is pick the right
          theme and hit apply, that's it your brand is live
        </Typography>
      </TabBodyContent>
    )
  }
];
