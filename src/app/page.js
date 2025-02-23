// import Image from 'next/image';

import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="site">
      <Header />
      <main className="container mx-auto">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          Homepage
        </div>
      </main>
      <Footer />
    </div>
  );
}
