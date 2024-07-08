import { useCallback } from "react";

import PosterCard from "@/components/PosterCard";

import type { Show, ShowDetail } from "@/types/show";

import styles from "./styles.module.css";

interface PosterSectionProps {
  shows: (Show | ShowDetail)[];
  title: string;
}

const PosterSection = ({ shows, title }: PosterSectionProps) => {
  const getOverviewPosition = useCallback((index: number) => {
    if (index === 0 || (index > 6 && index % 6 === 1)) return "left";
    if (index % 6 === 0) return "right";
    return "middle";
  }, []);

  return (
    <div className={styles.posterSection}>
      <h3 className={styles.posterSectionTitle}>{title}</h3>
      <div className={styles.posters}>
        {shows.map((show, index) => (
          <PosterCard
            key={show.title || show.name}
            overviewPosition={getOverviewPosition(index)}
            show={show}
          />
        ))}
      </div>
    </div>
  );
};

export default PosterSection;
