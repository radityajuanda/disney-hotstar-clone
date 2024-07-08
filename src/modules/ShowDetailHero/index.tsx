import { useMemo } from 'react';
import Image from 'next/image';

import { IMAGE_BASE_URL } from '@/constants/url';

import { convertShowDurationToString } from '@/utils/showDuration';

import type { ShowDetail } from '@/types/show';

import WatchlistButton from '@/components/WatchlistButton';

import styles from './styles.module.css';

interface ShowDetailHeroProps {
  showDetail: ShowDetail;
}

const ShowDetailHero = ({ showDetail }: ShowDetailHeroProps) => {
  const showDuration = useMemo(() => {
    if (showDetail.runtime) {
      return convertShowDurationToString(showDetail.runtime);
    }

    if (showDetail.seasons) {
      return `${showDetail.seasons.length} Season${
        showDetail.seasons.length > 1 ? 's' : ''
      }`;
    }

    return '';
  }, [showDetail.runtime, showDetail.seasons]);

  return (
    <div className={styles.hero}>
      <div className={styles.banner}>
        <Image
          src={`${IMAGE_BASE_URL}/original${showDetail.backdrop_path}`}
          width={3840}
          height={2160}
          alt={showDetail.title || showDetail.name || ''}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{showDetail.title || showDetail.name}</h2>
        <div className={styles.information}>
          <span>
            {showDetail.release_date?.slice(0, 4) ||
              showDetail.first_air_date?.slice(0, 4)}
          </span>{' '}
          | <span>{showDuration}</span> |{' '}
          <span>
            {showDetail.spoken_languages.length > 1
              ? `${showDetail.spoken_languages.length} Languages`
              : showDetail.spoken_languages[0].english_name}
          </span>
        </div>
        <div className={styles.overview}>{showDetail.overview}</div>
        <div className={styles.genre}>
          {showDetail.genres.map(
            (genre, index) => <>{index > 0 ? ' | ' : ''}<span>{genre.name}</span></>
          )}
        </div>
        <WatchlistButton show={showDetail} />
      </div>
    </div>
  );
};

export default ShowDetailHero;
