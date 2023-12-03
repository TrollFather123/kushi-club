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
            src={assest?.scoreboard_img}
            alt="inner banner"
            width={790}
            height={480}
          />
        </figure>
      </InnerBanner>
      <InnerCommonComponent
        tabList={tabContentList}
        designtitle="LED Scoreboard"
        titleDescription="Score board is a key product on the field for any cricket match. It is not easy for the players and spectators to keep track of scores in any paper or small phones so we have made this unique mini LED score board. This board is robust, mobile and highly power efficient. You can carry it on the field and keep track of your scores."
      />
      <StatsSec />
      <ClinetsSec />
      <PeopleSec />
    </Wrapper>
  );
}
