import Navbar from '../components/Navbar';
import SimpleCarousel from '../components/Carousel';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SimpleCarousel />
    </div>
  );
}