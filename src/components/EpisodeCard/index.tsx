import Image from 'next/image';

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
          {`S${episode.season_number} E${episode.episode_number}`} |{' '}
          {episode.air_date} | {convertShowDurationToString(episode.runtime)}
        </div>
        <div className={styles.overview}>{episode.overview}</div>
      </div>
    </div>
  );
};

export default EpisodeCard;
