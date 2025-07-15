import InvesmentIntro from "@/components/InvesmentIntro";
import FinancialDimensions from "@/components/FinancialDimensions";
import Footer from "@/components/Footer";
import SimpleCarousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <SimpleCarousel />
      <FinancialDimensions />
      <InvesmentIntro />
      <Footer />
    </>
  );
}
