import Image from 'next/image';
import dayjs from 'dayjs';

import { IMAGE_BASE_URL } from '@/constants/url';

import { convertShowDurationToString } from '@/utils/showDuration';

import { Episode } from '@/types/episode';

import styles from './styles.module.css';

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  return (
    <div className={styles.episodeCard}>
      <Image
        className={styles.poster}
        src={`${IMAGE_BASE_URL}/w185${episode.still_path}`}
        width={185}
        height={104}
        alt={episode.name}
      />
      <div className={styles.content}>
        <div className={styles.title}>{episode.name}</div>
        <div className={styles.information}>
          <span>{`S${episode.season_number} E${episode.episode_number}`}</span> |{' '}
          <span>{dayjs(episode.air_date).format('D MMM YYYY')}</span> | <span>{convertShowDurationToString(episode.runtime)}</span>
        </div>
        <div className={styles.overview}>{episode.overview}</div>
      </div>
    </div>
  );
};

export default EpisodeCard;
