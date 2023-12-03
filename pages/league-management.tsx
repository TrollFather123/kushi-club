import InnerBanner from "@/components/InnerBanner/InnerBanner";
import InnerCommonComponent from "@/components/InnerCommonComponent/InnerCommonComponent";
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
            src={assest?.innerbanner1}
            alt="inner banner"
            width={790}
            height={480}
          />
        </figure>
      </InnerBanner>
      <InnerCommonComponent
        tabList={tabContentList}
        designtitle="League Management"
        titleDescription="CricClubs league management solution provides all the tools necessary for Cricket administrators to manage their league with ease. With an instant league website, 5-minute tournament setup, match center, automatic points table, comprehensive statistics, mobile app, News, Picture Gallery, Social media integrations and much more, CricClubs puts technology at your finger tips!"
      />
    </Wrapper>
  );
}
