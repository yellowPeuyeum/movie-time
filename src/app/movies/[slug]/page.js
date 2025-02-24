'use client'

import useSwr from 'swr';
import { useParams } from 'next/navigation'
import Header from '@components/Header';
import Footer from '@components/Footer';

import Banner from '@components/Banner';
import Section from '@components/Section';
import OverviewDetail from '@components/OverviewDetail';
import MovieList from '@components/MovieList';
import Reviews from '@components/Reviews';
import { getMovies } from '@utils/movies';

const metaList = [
  { label: 'User Score', value: '3621 Votes' },
  { label: 'Status', value: 'Released' },
  { label: 'Language', value: 'English' },
  { label: 'Budget', value: '$200,000,000.00' },
  { label: 'Production', value: 'DC Entertainment' },
];

const reviews = [
  {
    name: 'John Doe',
    date: new Date('1 August 2020').valueOf(),
    rate: '7.0',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing, elit. Voluptatibus, incidunt. Corrupti doloribus nulla cum aperiam eligendi vero, illo, ut consequuntur facilis fuga totam dolorem ex saepe consequatur, distinctio incidunt adipisci temporibus maxime molestias iste laboriosam nemo voluptas quaerat harum dolor. Adipisci iure blanditiis dolores, quidem quod fuga odit accusamus tempore sunt ratione soluta quas similique harum nisi nobis molestiae dolore. Iste odit suscipit ipsum minima qui cum neque nesciunt corrupti consectetur quisquam aut sapiente est, fuga nihil dolorum exercitationem quasi provident quis nulla. Facilis voluptas pariatur nostrum dignissimos consectetur minus similique fugiat nesciunt explicabo beatae odit totam doloremque sit ex culpa laudantium, dolorem nihil cupiditate molestias ut cum distinctio optio dicta omnis modi? Praesentium magnam rerum quas et sint molestiae, accusantium odit mollitia animi qui a nam voluptate sit ipsa molestias excepturi ullam repellendus consectetur, voluptas temporibus voluptates libero harum id veritatis recusandae. Enim aspernatur nesciunt nihil nobis praesentium, ex neque voluptas illum suscipit iusto quae culpa fugiat ut vel at voluptates tempora delectus, voluptate vero beatae, animi? Cupiditate, neque, nostrum. Dignissimos quam deleniti reiciendis dolorum aliquid ipsum eveniet? Eveniet, facilis excepturi eligendi. Debitis tempore similique sit tempora adipisci officia eligendi saepe odio iure ratione dolorem odit error atque nisi consequatur vel nostrum libero nobis, animi aut. Corrupti tempore, laboriosam in expedita quo assumenda magnam. Beatae asperiores, qui nobis nesciunt numquam debitis ad quos iste necessitatibus dicta laudantium explicabo facere, exercitationem quod porro facilis impedit illo! Sint iusto cum officiis, exercitationem delectus debitis eum quis provident, aliquam omnis commodi fugiat, eligendi explicabo nam laboriosam quos dolorum soluta facere deleniti at asperiores! Rerum veniam numquam nam! Delectus laudantium ratione illo officiis dignissimos hic! Ut fugit omnis, adipisci cum assumenda totam aut autem odit rerum! Doloribus quae perspiciatis vero. Autem sunt temporibus accusamus tenetur aliquid eos dicta. Quam, fugiat in. Optio, aliquam!`
  },
  {
    name: 'Adam Smith',
    date: new Date('1 September 2020').valueOf(),
    rate: '8.0',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing, elit. Voluptatibus, incidunt. Corrupti doloribus nulla cum aperiam eligendi vero, illo, ut consequuntur facilis fuga totam dolorem ex saepe consequatur, distinctio incidunt adipisci temporibus maxime molestias iste laboriosam nemo voluptas quaerat harum dolor. Adipisci iure blanditiis dolores, quidem quod fuga odit accusamus tempore sunt ratione soluta quas similique harum nisi nobis molestiae dolore.`
  }
];

// const API_URL = 'http://localhost:3000';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MovieDetail() {
  // const { slug } = await params;
  const { slug } = useParams()

  const { data, isLoading } = useSwr(`/api/movies?id=${slug || ''}`, fetcher);
  const { data: recommendations } = useSwr('/api/movies', fetcher);

  if (isLoading) return null;

  return (
    <div className="site">
      <Header variant="absolute" />
      <main className="bg-white relative">
        <Banner
          alt="movie banner"
          img={data.PosterHi}
        />
        <OverviewDetail
          description={data.PlotFull || data.Plot}
          genre="Fantasy, Action, Adventure"
          metaList={metaList}
          poster={data.Poster}
          rating="7.0"
          title={data.Title}
          year={data.Year}
        />
        <Section
          className="pt-[44px] pb-[58px]"
          title="REVIEWS"
          // titleSize="sm"
          variant="light"
        >
          <div className="pt-6" />
          <Reviews data={reviews} spacing={8} />
        </Section>
        <Section
          className="pt-[44px] pb-[58px] bg-[var(--background)]"
          title="RECOMMENDATION MOVIES"
        >
          <div className="pt-6">
            <MovieList
              data={getMovies(recommendations)}
              cols={5}
              max={5}
            />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
