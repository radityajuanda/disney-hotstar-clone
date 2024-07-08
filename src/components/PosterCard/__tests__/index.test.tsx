import { render } from '@testing-library/react';

import PosterCard from '..';

const show = {
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
};

describe('PosterCard', () => {
  it('should render correctly', () => {
    const { getAllByAltText } = render(<PosterCard show={show} />);

    expect(getAllByAltText(show.title).length).toBe(2);
  });
});
