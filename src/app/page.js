// import Image from 'next/image';

import Header from '@components/Header';
import Footer from '@components/Footer';

import Slider from '@components/Slider';

export default function Home() {
  return (
    <div className="site">
      <Header />
      <main className="container mx-auto">
        <Slider />
      </main>
      <Footer />
    </div>
  );
}
