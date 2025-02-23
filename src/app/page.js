// import Image from 'next/image';

import Header from '@components/Header';
import Footer from '@components/Footer';

import Button from '@components/Button';
import Section from '@components/Section';
import Slider from '@components/Slider';
import MovieList from '@components/MovieList';

export default function Home() {
  return (
    <div className="site">
      <Header />
      <main>
        <section className="section">
          <Slider />
        </section>
        <Section
          className="pt-[90px] pb-[100px]"
          title="Discover Movies"
          titleAccent={true}
          moduleContent={
            <>
              <Button>Popularity</Button>
              <Button variant="normal">Release Date</Button>
            </>
          }
        >
          <div className="py-8">
            <MovieList cols={5} />
          </div> 
        </Section>
      </main>
      <Footer />
    </div>
  );
}
