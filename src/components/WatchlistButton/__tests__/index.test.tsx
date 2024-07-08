import { fireEvent, render, waitFor } from '@testing-library/react';

import WatchlistButton from '..';
import {
  WatchlistDispatchContext,
  WatchlistStateContext,
} from '@/contexts/WatchlistContext';

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

describe('WatchlistButton', () => {
  it('should render correctly - show is not in watchlist', () => {
    const addToWatchlist = jest.fn();

    const { getByText } = render(
      <WatchlistDispatchContext.Provider
        value={{ addToWatchlist, removeFromWatchlist: () => {} }}
      >
        <WatchlistStateContext.Provider value={{ watchlist: [] }}>
          <WatchlistButton show={show} />
        </WatchlistStateContext.Provider>
      </WatchlistDispatchContext.Provider>
    );

    const watchlistButton = getByText('Add to Watchlist');
    expect(watchlistButton).toBeInTheDocument();

    fireEvent.click(watchlistButton);

    expect(addToWatchlist).toHaveBeenCalledWith(show);
    waitFor(() => expect(getByText('Added to Watchlist')).toBeInTheDocument());
  });

  it('should render correctly - show is in watchlist', () => {
    const removeFromWatchlist = jest.fn();

    const { getByText } = render(
      <WatchlistDispatchContext.Provider
        value={{ addToWatchlist: () => {}, removeFromWatchlist }}
      >
        <WatchlistStateContext.Provider value={{ watchlist: [show] }}>
          <WatchlistButton show={show} />
        </WatchlistStateContext.Provider>
      </WatchlistDispatchContext.Provider>
    );

    const watchlistButton = getByText('Added to Watchlist');
    expect(watchlistButton).toBeInTheDocument();

    fireEvent.click(watchlistButton);

    expect(removeFromWatchlist).toHaveBeenCalledWith(show);
    waitFor(() => expect(getByText('Add to Watchlist')).toBeInTheDocument());
  });
});
