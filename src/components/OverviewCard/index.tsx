import type { MouseEventHandler } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { IMAGE_BASE_URL } from '@/constants/url';

import type { Show } from '@/types/show';

import WatchlistButton from '@/components/WatchlistButton';

import styles from './styles.module.css';

interface OverviewCardProps {
  onMouseEnter: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
  overviewPosition?: 'left' | 'middle' | 'right';
  show: Show;
  visible: boolean;
}

const OverviewCard = ({
  onMouseEnter,
  onMouseLeave,
  overviewPosition = 'middle',
  show,
  visible,
}: OverviewCardProps) => {
  return (
    <Link
      className={styles.posterCardWrapper}
      href={`/${show.media_type}/${show.id}`}
    >
      <div
        className={
          visible
            ? clsx(
                styles.overviewCard,
                styles[overviewPosition],
                visible && styles.visible
              )
            : clsx(styles.overviewCard, styles[overviewPosition])
        }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Image
          className={styles.overviewImage}
          src={`${IMAGE_BASE_URL}/w300${show.backdrop_path}`}
          alt={show.title || show.name || ''}
          width={300}
          height={169}
        />
        <WatchlistButton show={show} />
        <div className={styles.title}>
          <strong>{show.title || show.name}</strong>
        </div>
        <div className={styles.overviewWrapper}>
          <p className={styles.overview}>{show.overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default OverviewCard;
