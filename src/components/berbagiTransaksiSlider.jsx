"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import BerbagiTransaksiCard from "./berbagiTransaksiCard";
import { useTranslations } from "next-intl";

export default function BerbagiTransaksiSwiper() {
  const t = useTranslations("fiturs");
  const cardsData = [
    {
      id: "transfer", // Unique ID for key prop
      title: t("fitur1.title"),
      frontDescription: t("fitur1.frontDescription"),
      backDescription: t("fitur1.backDescription"),
      image: "https://wondr.bni.co.id/api/image/layer_1_1751485455683.png",
    },
    {
      id: "mobile-tunai",
      title: t("fitur2.title"),
      frontDescription: t("fitur2.frontDescription"),
      backDescription: t("fitur2.backDescription"),
      image:
        "https://wondr.bni.co.id/api/image/group_427323199_1751485555775.png",
    },
    {
      id: "e-wallet",
      title: t("fitur3.title"),
      frontDescription: t("fitur3.frontDescription"),
      backDescription: t("fitur3.backDescription"),
      image: "https://wondr.bni.co.id/api/image/illustration_1751485629668.png",
    },
    {
      id: "transfer-luar-negri",
      title: t("fitur4.title"),
      frontDescription: t("fitur4.frontDescription"),
      backDescription: t("fitur4.backDescription"),
      image: "https://wondr.bni.co.id/api/image/layer_4_1751485713019.png",
    },
    {
      id: "lifestyle",
      title: t("fitur5.title"),
      frontDescription: t("fitur5.frontDescription"),
      backDescription: t("fitur5.backDescription"),
      image: "https://wondr.bni.co.id/api/image/left_arm_1751546357234.png",
    },
    {
      id: "Bayar-Beli",
      title: t("fitur6.title"),
      frontDescription: t("fitur6.frontDescription"),
      backDescription: t("fitur6.backDescription"),
      image: "https://wondr.bni.co.id/api/image/billpay_1751635640586.png",
    },
    {
      id: "QRIS",
      title: t("fitur7.title"),
      frontDescription: t("fitur7.frontDescription"),
      backDescription: t("fitur7.backDescription"),
      image:
        "https://wondr.bni.co.id/api/image/group_427323200_1751485932741.png",
    },
    {
      id: "TapCash",
      title: t("fitur8.title"),
      frontDescription: t("fitur8.frontDescription"),
      backDescription: t("fitur8.backDescription"),
      image: "https://wondr.bni.co.id/api/image/tapcash_new_1751635836436.png",
    },
  ];
  return (
    <section className="py-8 md:py-72 bg-white">
      <div className="container-72 text-center">
        <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] !leading-snug lg:!leading-tight text-black text-center font-demibold  ">
          {t("title")}
        </h2>
      </div>
      <div className="text-center">
        <Swiper
          className="swiper-horizontal mt-4 md:mt-10 pb-2 swiper-backface-hidden"
          style={{ paddingBottom: "8px" }}
          slidesPerView={"auto"} // Important for horizontal spacing in Swiper
          spaceBetween={25} // Adjust as needed between cards
        >
          {/* Map over your cardsData to render each TransferCard in its own SwiperSlide */}
          {cardsData.map((card) => (
            <SwiperSlide
              key={card.id} // Crucial for React to identify each unique item
            >
              <BerbagiTransaksiCard data={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
