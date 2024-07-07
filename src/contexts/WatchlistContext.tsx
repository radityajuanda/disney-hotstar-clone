"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Show } from "@/types/show";

interface WatchlistDispatchContextInterface {
  addToWatchlist: (show: Show) => void;
  removeFromWatchlist: (show: Show) => void;
}

interface WatchlistStateContextInterface {
  watchlist: Show[];
}

const WatchlistDispatchContext =
  createContext<WatchlistDispatchContextInterface>(
    {} as WatchlistDispatchContextInterface
  );
const WatchlistStateContext = createContext<WatchlistStateContextInterface>({
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
  const [watchlist, setWatchlist] = useState<Show[]>([]);

  const addToWatchlist = useCallback(
    (show: Show) => {
      const newWatchlist = [...watchlist, show];
      setWatchlist(newWatchlist);
      window.localStorage.setItem("watchlist", JSON.stringify(watchlist));
    },
    [watchlist]
  );

  const removeFromWatchlist = useCallback(
    (show: Show) => {
      const newWatchlist = [...watchlist];
      const removedIndex = newWatchlist.findIndex((s) => s.id === show.id);
      newWatchlist.splice(removedIndex, 1);
      setWatchlist(newWatchlist);
      window.localStorage.setItem("watchlist", JSON.stringify(watchlist));
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
    const lsWatchlist = window.localStorage.getItem("watchlist");
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
