// import Image from 'next/image';

import Header from '@components/Header';
import Footer from '@components/Footer';

import Section from '@components/Section';
import MovieList from '@components/MovieList';
import Filter from '@components/Filter';

export default function Movies() {
  return (
    <div className="site">
      <Header />
      <main>
        <Section
          backdrop
          titleAccent
          className="pt-[90px] pb-[100px]"
          title="Movies"
          titleSize="lg"
        >
          <div className="grid grid-cols-9 gap-4 py-[60px]">
            <div className="col-span-2">
              <Filter />
            </div>
            <div className="col-span-7">
              <MovieList />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
