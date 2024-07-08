import {
  MouseEvent,
  type MouseEventHandler,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IMAGE_BASE_URL } from '@/constants/url';

import type { Show, ShowDetail } from '@/types/show';

import OverviewCard from '@/components/OverviewCard';

import styles from './styles.module.css';

interface PosterCardProps {
  overviewPosition?: 'left' | 'middle' | 'right';
  show: Show | ShowDetail;
}

const PosterCard = ({ overviewPosition = 'middle', show }: PosterCardProps) => {
  const [shouldShowOverviewCard, setShouldShowOverviewCard] = useState(false);
  const isDraggedRef = useRef(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const mediaType = useMemo(() => {
    if (show.release_date) return 'movie';
    if (show.first_air_date) return 'tv';
  }, [show])

  const showOverviewCard: MouseEventHandler<HTMLDivElement> = useCallback(
    () => setShouldShowOverviewCard(true),
    []
  );

  const hideOverviewCard: MouseEventHandler<HTMLDivElement> = useCallback(
    () => setShouldShowOverviewCard(false),
    []
  );

  // Prevent default anchor behavior when dragging
  const handleMouseDown = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    isDraggedRef.current = true;
  }, []);

  // Prevent moving page until mouse up
  const handleMouseMove = useCallback(() => {
    if (linkRef.current && isDraggedRef.current) {
      linkRef.current.style.pointerEvents = 'none';
    }
  }, []);

  // Restore default anchor behavior
  const handleMouseUp = useCallback(() => {
    isDraggedRef.current = false;
    if (linkRef.current) {
      linkRef.current.style.pointerEvents = 'initial';
    }
  }, []);

  return (
    <div className={styles.posterCardWrapper} onMouseUp={handleMouseUp}>
      <Link
        href={`/${mediaType}/${show.id}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        ref={linkRef}
      >
        <Image
          alt={show.title || show.name || ''}
          className={styles.posterCard}
          height={513}
          onMouseEnter={showOverviewCard}
          onMouseLeave={hideOverviewCard}
          src={`${IMAGE_BASE_URL}/w342${show.poster_path}`}
          width={342}
        />
      </Link>
      <OverviewCard
        mediaType={mediaType}
        onMouseEnter={showOverviewCard}
        onMouseLeave={hideOverviewCard}
        overviewPosition={overviewPosition}
        show={show}
        visible={shouldShowOverviewCard}
      />
    </div>
  );
};

export default PosterCard;
