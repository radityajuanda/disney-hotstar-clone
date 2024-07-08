import { useCallback, useMemo, type MouseEvent } from "react";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";

import {
  useWatchlistDispatch,
  useWatchlistState,
} from "@/contexts/WatchlistContext";

import type { Show, ShowDetail } from "@/types/show";

import styles from "./styles.module.css";

interface WatchlistButtonProps {
  height?: string;
  show: Show | ShowDetail;
  width?: string;
}

const WatchlistButton = ({
  height = "40px",
  show,
  width = "100%",
}: WatchlistButtonProps) => {
  const { addToWatchlist, removeFromWatchlist } = useWatchlistDispatch();
  const { watchlist } = useWatchlistState();

  const isShowExistInWatchlist = useMemo(() => {
    return watchlist.findIndex((s) => s.id === show.id) >= 0;
  }, [show.id, watchlist]);

  const handleClickWatchlistButton = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isShowExistInWatchlist) {
      removeFromWatchlist(show);
    } else {
      addToWatchlist(show);
    }
  }, [addToWatchlist, isShowExistInWatchlist, removeFromWatchlist, show]);

  return (
    <button
      className={styles.watchlistButton}
      onClick={handleClickWatchlistButton}
      style={{ height, width }}
    >
      {isShowExistInWatchlist ? (
        <>
          <CheckOutlined />
          Added to Watchlist
        </>
      ) : (
        <>
          <PlusOutlined />
          Add to Watchlist
        </>
      )}
    </button>
  );
};

export default WatchlistButton;
