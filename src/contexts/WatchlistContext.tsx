'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import type { Show, ShowDetail } from '@/types/show';

interface WatchlistDispatchContextInterface {
  addToWatchlist: (show: Show | ShowDetail) => void;
  removeFromWatchlist: (show: Show | ShowDetail) => void;
}

interface WatchlistStateContextInterface {
  watchlist: (Show | ShowDetail)[];
}

export const WatchlistDispatchContext =
  createContext<WatchlistDispatchContextInterface>(
    {} as WatchlistDispatchContextInterface
  );

export const WatchlistStateContext =
  createContext<WatchlistStateContextInterface>({
    watchlist: [],
  });

export const useWatchlistDispatch = () => {
  return useContext(WatchlistDispatchContext);
};

export const useWatchlistState = () => {
  return useContext(WatchlistStateContext);
};

interface WatchlistContextProviderProps {
  children: ReactNode;
}

const WatchlistContextProvider = ({
  children,
}: WatchlistContextProviderProps) => {
  const [watchlist, setWatchlist] = useState<(Show | ShowDetail)[]>([]);

  const addToWatchlist = useCallback(
    (show: Show | ShowDetail) => {
      const newWatchlist = [...watchlist, show];
      setWatchlist(newWatchlist);
      window.localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
    },
    [watchlist]
  );

  const removeFromWatchlist = useCallback(
    (show: Show | ShowDetail) => {
      const newWatchlist = [...watchlist];
      const removedIndex = newWatchlist.findIndex((s) => s.id === show.id);
      newWatchlist.splice(removedIndex, 1);
      setWatchlist(newWatchlist);
      window.localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
    },
    [watchlist]
  );

  const memoDispatch = useMemo(
    () => ({
      addToWatchlist,
      removeFromWatchlist,
    }),
    [addToWatchlist, removeFromWatchlist]
  );

  const memoState = useMemo(
    () => ({
      watchlist,
    }),
    [watchlist]
  );

  useEffect(() => {
    // Set data from localstorage to state
    const lsWatchlist = window.localStorage.getItem('watchlist');
    if (lsWatchlist) {
      setWatchlist(JSON.parse(lsWatchlist));
    }
  }, []);

  return (
    <WatchlistDispatchContext.Provider value={memoDispatch}>
      <WatchlistStateContext.Provider value={memoState}>
        {children}
      </WatchlistStateContext.Provider>
    </WatchlistDispatchContext.Provider>
  );
};

export default WatchlistContextProvider;
