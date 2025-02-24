'use client'
import useSwr from 'swr';

import Header from '@components/Header';
import Footer from '@components/Footer';

import Button from '@components/Button';
import Section from '@components/Section';
import Slider from '@components/Slider';
import MovieList from '@components/MovieList';
import { getMovies } from '@utils/movies';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data } = useSwr('/api/movies', fetcher);

  return (
    <div className="site">
      <Header />
      <main>
        <Section className="pt-[90px] pb-[36px]">
          <Slider />
        </Section>
        <Section
          backdrop
          titleAccent
          className="pt-[90px] pb-[100px]"
          title="Discover Movies"
          moduleContent={
            <>
              <Button>Popularity</Button>
              <Button variant="normal">Release Date</Button>
            </>
          }
        >
          <div className="py-8">
            <MovieList
              cols={5}
              data={getMovies(data)}
              max={10}
            />
          </div> 
        </Section>
      </main>
      <Footer />
    </div>
  );
}
