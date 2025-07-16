"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import BerbagiTransaksiCard from "./berbagiTransaksiCard";

export default function BerbagiTransaksiSwiper() {
  const cardsData = [
    {
      id: "transfer", // Unique ID for key prop
      title: "Transfer",
      frontDescription: "Kirim uang kapan aja, ke mana aja",
      backDescription:
        "Kirim uang ke mana aja dan atur jadwal transfer sesuai maumu. Bisa transfer ke banyak tujuan sekaligus!",
      image: "https://wondr.bni.co.id/api/image/layer_1_1751485455683.png",
    },
    {
      id: "mobile-tunai",
      title: "Mobile Tunai",
      frontDescription: "Tarik tunai bisa tanpa kartu",
      backDescription:
        "Gak bawa kartu? Gak masalah! Cukup buka aplikasi, tarik tunai segampang itu.",
      image:
        "https://wondr.bni.co.id/api/image/group_427323199_1751485555775.png",
    },
    {
      id: "e-wallet",
      title: "E-Wallet",
      frontDescription: "Cek dan top up saldo gak perlu pindah aplikasi",
      backDescription:
        "Gak perlu buka aplikasi, top up dan cek saldo e-Wallet bisa langsung di sini",
      image: "https://wondr.bni.co.id/api/image/illustration_1751485629668.png",
    },
    {
      id: "transfer-luar-negri",
      title: "Transfer Luar Negri",
      frontDescription: "Kirim uang antar negara dalam hitungan menit",
      backDescription:
        "Transfer ke berbagai negara gak perlu nunngu lama. Bisa cek status pengiriman juga.",
      image: "https://wondr.bni.co.id/api/image/layer_4_1751485713019.png",
    },
    {
      id: "lifestyle",
      title: "LifeStyle",
      frontDescription: "Ada tiket konser, undian, sampai tiket kereta api",
      backDescription:
        "Dari tiket kereta api, tiket konser, sampai undian berhadiah tersedia buat kamu.",
      image: "https://wondr.bni.co.id/api/image/left_arm_1751546357234.png",
    },
    {
      id: "Bayar-Beli",
      title: "Bayar & Beli",
      frontDescription: "Bisa bayar tagihan di puluhan layanan",
      backDescription:
        "Satu tempat bisa buat beli pulsa, bayar listrik, sampai zakat. Ada pengingat biar gak kelewat!",
      image: "https://wondr.bni.co.id/api/image/billpay_1751635640586.png",
    },
    {
      id: "QRIS",
      title: "QRIS",
      frontDescription: "Tinggal scan atau tap buat bayar-bayar",
      backDescription:
        "Bayar ini itu jadi bebas repot, bebas antri, tetap aman, dan praktis.",
      image:
        "https://wondr.bni.co.id/api/image/group_427323200_1751485932741.png",
    },
    {
      id: "TapCash",
      title: "TapCash",
      frontDescription: "Bayar tol sampai parkir tinggal tap aja",
      backDescription:
        "Tinggal tempelin kartu ke HP buat cek dan isi saldo. Pakai Express Top Up bisa tanpa login.",
      image: "https://wondr.bni.co.id/api/image/tapcash_new_1751635836436.png",
    },
  ];
  return (
    <section className="py-8 md:py-72 bg-white">
      <div className="container-72 text-center">
        <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] !leading-snug lg:!leading-tight text-black text-center font-demibold  ">
          Berbagai transaksi cukup satu aplikasi
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
