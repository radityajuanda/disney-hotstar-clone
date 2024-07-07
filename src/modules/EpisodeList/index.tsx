import { Episode } from '@/types/episode';

import EpisodeCard from '@/components/EpisodeCard';

import styles from './styles.module.css';

interface EpisodeListProps {
  episodes: Episode[];
}

const EpisodeList = ({ episodes }: EpisodeListProps) => {
  return (
    <div className={styles.episodeList}>
      {episodes.map((episode) => (
        <EpisodeCard episode={episode} key={episode.name} />
      ))}
    </div>
  );
};

export default EpisodeList;
