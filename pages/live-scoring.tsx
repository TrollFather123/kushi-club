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
            src={assest?.live_score_img}
            alt="inner banner"
            width={790}
            height={480}
          />
        </figure>
      </InnerBanner>
      <InnerCommonComponent
        tabList={tabContentList}
        designtitle="Live Scoring App"
        titleDescription="CricClubs best in class mobile app helps to update the scores through iOS/Android or on any PC. The scores get updated in real- time on the league web portal, mobile apps, overlay graphics, LED scoreboard so that players, fans, admins can follow any local game as it takes place live!"
      />
      <StatsSec />
      <ClinetsSec />
      <PeopleSec />
    </Wrapper>
  );
}
