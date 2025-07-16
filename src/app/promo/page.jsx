import EmblaCarousel from "@/components/promo/EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true };

export default async function Promo() {
  // level 2: SSR
  const response = await fetch("http://localhost:8080/promos");
  const data = await response.json();

  console.log(`${new Date().getTime()} render server for promo list`);

  return <EmblaCarousel slides={data} options={OPTIONS} />;
}
