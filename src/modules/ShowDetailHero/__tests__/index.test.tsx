import { render } from '@testing-library/react';

import { ShowDetail } from '@/types/show';

import ShowDetailHero from '..';

const showDetail = {
  adult: false,
  backdrop_path: '/3GQKYh6Trm8pxd2AypovoYQf4Ay.jpg',
  created_by: [],
  episode_run_time: [],
  first_air_date: '2019-04-06',
  genres: [
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 10759,
      name: 'Action & Adventure',
    },
    {
      id: 10765,
      name: 'Sci-Fi & Fantasy',
    },
  ],
  homepage: 'https://kimetsu.com/anime',
  id: 85937,
  in_production: true,
  languages: ['ja'],
  last_air_date: '2024-06-30',
  last_episode_to_air: {
    id: 5337557,
    name: 'The Hashira Unite',
    overview:
      'During a silent night when the moon shines, Kagaya finally meets Muzan Kibutsuji, who appears at the Ubuyashiki Mansion.',
    vote_average: 9,
    vote_count: 3,
    air_date: '2024-06-30',
    episode_number: 8,
    episode_type: 'finale',
    production_code: '',
    runtime: 41,
    season_number: 5,
    show_id: 85937,
    still_path: '/a8QEWBNIfRzXN7g5WOdrPS3QeKy.jpg',
  },
  name: 'Demon Slayer: Kimetsu no Yaiba',
  next_episode_to_air: null,
  networks: [
    {
      id: 1,
      logo_path: '/4x4GsmRmSLLL0RVNKsoqAVH43tz.png',
      name: 'Fuji TV',
      origin_country: 'JP',
    },
  ],
  number_of_episodes: 63,
  number_of_seasons: 5,
  origin_country: ['JP'],
  original_language: 'ja',
  original_name: '鬼滅の刃',
  overview:
    'It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.',
  popularity: 388.597,
  poster_path: '/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg',
  production_companies: [
    {
      id: 5887,
      logo_path: '/m6FEqz8rQECnmfjEwjNhNAlmhCJ.png',
      name: 'ufotable',
      origin_country: 'JP',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'JP',
      name: 'Japan',
    },
  ],
  seasons: [
    {
      air_date: '2020-08-26',
      episode_count: 18,
      id: 131803,
      name: 'Specials',
      overview: '',
      poster_path: '/dWdriunpZSHsKX5xrR5WwaY5c3R.jpg',
      season_number: 0,
      vote_average: 0,
    },
  ],
  spoken_languages: [
    {
      english_name: 'Japanese',
      iso_639_1: 'ja',
      name: '日本語',
    },
  ],
  status: 'In Production',
  tagline: '',
  type: 'Scripted',
  vote_average: 0,
  vote_count: 0,
};

describe('PosterCard', () => {
  it('should render correctly', () => {
    const { getByText, getByAltText } = render(
      <ShowDetailHero showDetail={showDetail} />
    );

    expect(getByAltText('Demon Slayer: Kimetsu no Yaiba')).toBeInTheDocument();
    expect(getByText('Demon Slayer: Kimetsu no Yaiba')).toBeInTheDocument();
    expect(getByText('2019')).toBeInTheDocument();
    expect(getByText('1 Season')).toBeInTheDocument();
    expect(getByText('Japanese')).toBeInTheDocument();
    expect(
      getByText(
        'It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.'
      )
    ).toBeInTheDocument();
    expect(getByText('Animation')).toBeInTheDocument();
    expect(getByText('Action & Adventure')).toBeInTheDocument();
    expect(getByText('Sci-Fi & Fantasy')).toBeInTheDocument();
  });
});
