// Import Swiper React components
"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

interface ImageItem {
  image: string;
}

interface Props {
  data: ImageItem[];
}

export default function Carosuel({ data }: Props) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          type: "fraction",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" h-[337px]">
              <Image
                width={150}
                className=" w-full h-full object-cover"
                height={177}
                src={item.image}
                alt="tarif"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
