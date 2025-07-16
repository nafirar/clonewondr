import InvesmentIntro from "@/components/InvesmentIntro";
import FinancialDimensions from "@/components/FinancialDimensions";
import Loans from "@/components/Loans";
import Insight from "@/components/Insight";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Join from "@/components/Join";
import BerbagiTransaksiSwiper from "@/components/berbagiTransaksiSlider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <FinancialDimensions />
      <BerbagiTransaksiSwiper />
      <Insight />
      <InvesmentIntro />
      <Loans />
      <Join />
      <Footer />
    </>
  );
}
