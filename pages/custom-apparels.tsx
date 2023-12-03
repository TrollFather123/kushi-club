import ClinetsSec from "@/components/ClinetsSec/ClinetsSec";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import InnerCommonComponent from "@/components/InnerCommonComponent/InnerCommonComponent";
import PeopleSec from "@/components/PeopleSec/PeopleSec";
import StatsSec from "@/components/StatsSec/StatsSec";
import assest from "@/json/assest";
import { tabContentList } from "@/json/mock/demo.mock";
import Wrapper from "@/layout/wrapper/Wrapper";
import Image from "next/image";
import React from "react";

export default function Index() {
  return (
    <Wrapper>
      <InnerBanner>
        <figure>
          <Image
            src={assest?.custom_set_img}
            alt="inner banner"
            width={790}
            height={480}
          />
        </figure>
      </InnerBanner>
      <InnerCommonComponent
        tabList={tabContentList}
        designtitle="Custom Apparels / Balls"
        titleDescription="CricClubs manufactures high-quality customizable uniform kits and various types of Cricket balls at very affordable prices. Who does not love to wear a jersey of their own and playing with their own kit? we heard you and we made this for you. Your team can now don a branded jersey."
        designTitleBtnTxt="Order Now"
      />
      <StatsSec />
      <ClinetsSec />
      <PeopleSec />
    </Wrapper>
  );
}
