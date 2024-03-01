"use client";
import GenericLayout from "@/components/genericSection/genericHeadingLayout/GenericLayout";
import { Divider } from "@/ui-components/divider/Divider";
import React from "react";
import explorerstyles from "./explorer.module.css";
import ExplorerCard from "./ExplorerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderButtons from "@/ui-components/swiper/SliderButtons";

import { Autoplay, Navigation } from "swiper";

function Explorer() {
  const arr = [
    {
      id: 1,
      title: "ARE AWESOME",
      tagline: "NEXTJS 13 & SWIPER SLIDER",
      image: "/image1.jpg",
      buttons: [
        {
          id: 1,
          text: "Roberto Nickson",
          link: "https://www.pexels.com/@rpnickson/",
          type: "btn-dark btn-circle",
        },
      ],
    },
    {
      id: 2,
      title: "GIVE IT A SHOOT",
      tagline: "IF YOU LIKE IT",
      image: "/image2.jpg",
      buttons: [
        {
          id: 1,
          text: "Julia M Cameron",
          link: "https://www.pexels.com/@julia-m-cameron/",
          type: "btn-dark btn-circle",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-between w-full">
      <GenericLayout
        heading={"Hear What Our Explorers Say"}
        subheading={
          <div className="mt-[8px]">
            <span className={explorerstyles.highlighted}>
              Real Stories, Real Experiences –
            </span>
            <span>Our Users Share Their Quest Journeys</span>
          </div>
        }
      />
      <div className="flex gap-[16px] w-full">
        <div className="d-none d-sm-block"></div>
        <Swiper
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
        >
          {arr.map(({ id, image, tagline, title, buttons }) => (
            <SwiperSlide key={id}>
              <ExplorerCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Divider />
    </div>
  );
}

export default Explorer;
