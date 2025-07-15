import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import SimpleCarousel from '../components/Carousel';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SimpleCarousel />
    </div>
  );
}