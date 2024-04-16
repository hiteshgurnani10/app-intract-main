import React, { FC, useState } from "react";
import faqcard from "./faqcard.module.css";
import addbuton from "./assets/Add.svg";
import Image from "next/image";
import AnimateHeight from "react-animate-height";
import FaqText from "./FaqText.tsx/FaqText";
import clsx from "clsx";
import { isMobile } from "react-device-detect";
interface IFAQcard {
  text: string;
  index: number;
}
const FAQcard: FC<IFAQcard> = (props) => {
  const [open, setOpen] = useState(false);
  const subtext = [
      "- Intract excels in facilitating advanced on-chain interactions by focusing on real users rather than bots. Intract guarantees a larger user base through dedicated campaign success and comprehensive co-marketing support",
      "- We do not charge any fees for running quests, allowing you to focus on creating the most engaging and effective campaign possible without worrying about any other additional costs.",
      "- Absolutely! Intract guarantees to attract more real users by offering top-notch dedicated campaign success and comprehensive co-marketing support. With access to our extensive network of over 10 million users and more than 1,000 key opinion leaders (KOLs), your quest is set to make a significant impact.",
      "- The number of users a campaign attracts can vary greatly, influenced by factors such as the complexity and appeal of the campaign, as well as the type of the reward pool. While results can range from as few as 1,000 users to as many as 1 million, the exact number will depend on the specific characteristics of your campaign.",
      "- You can secure co-marketing support by advancing through the tiers of the Intract Credit System. Each tier offers different levels of marketing support, enabling you to amplify your campaign’s visibility and success as you progress",
    "- Intract boasts a diverse user base spread across more than 250 countries worldwide, top 10 being Vietnam, United States, Hong Kong, Nigeria, Ukraine, India, Indonesia, United Kingdom, Netherlands and Germany." ];
  return (
    <>
      <article
        className={clsx(faqcard.faq_card, "cursor-pointer")}
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center w-full justify-between">
          <div
            className={faqcard.faq_text && (!open ? "text-[#FFFFFFCC]" : "")}
          >
            {props.text}
          </div>
          <div
            onClick={() => setOpen(!open)}
            className={clsx("cursor-pointer relative p-3.5", faqcard.button_bg)}
          >
            <Image className="absolute" src={addbuton} alt={"add-button"} />
            <Image
              className={
                clsx(open
                  ? "rotate-180 transition ease-in delay-10000 duration-10000 "
                  : "rotate-90 transition ease-in delay-10000 duration-10000",faqcard.plus_minus)
                
              }
              src={addbuton}
              alt={"add-button"}
            />
          </div>
        </div>
        <AnimateHeight height={open ? (isMobile ? 'auto' : 70) : 0} duration={300}>
          <div className="flex flex-col">
            <FaqText text={subtext[props.index]} />
            {/* <p className={clsx("mt-[24px]", faqcard.explore_more)}>
              Explore More
            </p> */}
          </div>
        </AnimateHeight>
      </article>
    </>
  );
};

export default FAQcard;
