import React from "react";
import businessLandingStyles from "./businessLanding.module.css";
import Explore from "./ExploreSection/Explore";
import OurProducts from "./OurProducts/OurProducts";
import Values from "./Values/Values";
import PopularQuest from "./PopularQuests/PopularQuest";
import Numbers from "./Numbers/Numbers";
import tear from "./assets/tear.svg";
import Image from "next/image";
import Explorer from "./Explorer/Explorer";
import FAQ from "./FAQs/FAQ";
import { Divider } from "@/ui-components/divider/Divider";
import ExploreLast from "./ExploreLast/ExploreLast";
import Users from "./Users/Users";
function BusinessLanding() {
  return (
    <div className={businessLandingStyles.container}>
      <div className={businessLandingStyles.businessLandingContainer}>
        <Explore />
        <Divider className="md:my-24" />
        <OurProducts />
        <Divider className="md:my-24 xs:my-[64px]" />
        <Values />
        {/* <Divider className="md:my-24 xs:my-[64px]" /> */}
        <PopularQuest />
        <Divider className="md:my-12 xs:my-[64px]" />
        {/* <Users /> */}
        <Numbers />
        <div className={businessLandingStyles.tearContainer}>
          <Image src={tear} alt="Tear" />
        </div>
        <Explorer />
        <Divider />
        <FAQ />
        <Divider />
        <ExploreLast />
      </div>
    </div>
  );
}

export default BusinessLanding;
