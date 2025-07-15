import EmblaCarousel from "@/components/promo/EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Promo() {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
}
