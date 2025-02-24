'use client'
import useSwr from 'swr';
import { useSearchParams } from 'next/navigation';

import Header from '@components/Header';
import Footer from '@components/Footer';

import Section from '@components/Section';
import MovieList from '@components/MovieList';
import Filter from '@components/Filter';
import { getMovies } from '@utils/movies';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Movies() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q');

  const { data } = useSwr(`/api/movies?q=${q || ''}`, fetcher);

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
              <MovieList data={getMovies(data)} />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
