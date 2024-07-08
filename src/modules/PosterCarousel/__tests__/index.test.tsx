import { render } from '@testing-library/react';

import PosterCarousel from '..';

const shows = [
  {
    backdrop_path: '/wODqakS0jinTUECNS6n4VomQbew.jpg',
    id: 967847,
    title: 'Ghostbusters: Frozen Empire',
    original_title: 'Ghostbusters: Frozen Empire',
    overview:
      'When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age.',
    poster_path: '/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg',
    media_type: 'movie',
    adult: false,
    original_language: 'en',
    genre_ids: [14, 12, 35],
    popularity: 274.19,
    release_date: '2024-03-20',
    video: false,
    vote_average: 6.687,
    vote_count: 1071,
  },
  {
    backdrop_path: '/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg',
    id: 786892,
    title: 'Furiosa: A Mad Max Saga',
    original_title: 'Furiosa: A Mad Max Saga',
    overview:
      'As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.',
    poster_path: '/iADOJ8Zymht2JPMoy3R7xceZprc.jpg',
    media_type: 'movie',
    adult: false,
    original_language: 'en',
    genre_ids: [28, 12, 878],
    popularity: 4274.109,
    release_date: '2024-05-22',
    video: false,
    vote_average: 7.703,
    vote_count: 1844,
  },
];

describe('PosterCard', () => {
  it('should render correctly', () => {
    const { getByText, getAllByAltText } = render(
      <PosterCarousel shows={shows} title="This is a carousel" />
    );

    expect(getByText('This is a carousel')).toBeInTheDocument();
    expect(getAllByAltText('Ghostbusters: Frozen Empire').length).toBe(2);
    expect(getAllByAltText('Furiosa: A Mad Max Saga').length).toBe(2);
  });
});
