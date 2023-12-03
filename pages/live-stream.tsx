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
            src={assest?.live_stream_img}
            alt="inner banner"
            width={790}
            height={480}
          />
        </figure>
      </InnerBanner>
      <InnerCommonComponent
        tabList={tabContentList}
        designtitle="Live Stream"
        titleDescription="Take your match to the next level! CricClubs experienced production crew will help seamlessly live stream your matches with multiple cameras and 20+ overlay graphics. The live video can be broadcasted to FB/Youtube/website or any broadcasting channel of your choice."
      />
      <StatsSec />
      <ClinetsSec />
      <PeopleSec />
    </Wrapper>
  );
}
