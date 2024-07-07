'use client';

import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';

import getTVSeriesDetail from '@/api/getTVSeriesDetail';
import getSimilarTVSeries from '@/api/getSimilarTVSeries';
import getTVSeriesSeasonDetail from '@/api/getTVSeriesSeasonDetail';

import ShowDetailHero from '@/modules/ShowDetailHero';
import PosterCarousel from '@/modules/PosterCarousel';

import styles from './Content.module.css';
import { useEffect, useState } from 'react';
import EpisodeList from '@/modules/EpisodeList';

interface TVSeriesDetailContentProps {
  id: number;
}

const TVSeriesDetailContent = ({ id }: TVSeriesDetailContentProps) => {
  const [selectedSeason, setSelectedSeasons] = useState(1);

  const { data: tvSeriesDetail } = useQuery({
    queryKey: ['getTVSeriesDetail', id],
    queryFn: () => getTVSeriesDetail(Number(id)),
  });

  const { data: similarTVSeries } = useQuery({
    queryKey: ['getSimilarTVSeries', id],
    queryFn: () => getSimilarTVSeries(Number(id)),
  });

  const { data: seasonDetail } = useQuery({
    queryKey: ['getTVSeriesSeasonDetail', id, selectedSeason],
    queryFn: () => getTVSeriesSeasonDetail(Number(id), selectedSeason),
  });

  console.log(tvSeriesDetail);
  console.log(seasonDetail);

  if (!tvSeriesDetail) return null;
  return (
    <div className={styles.tvSeriesDetailContent}>
      <ShowDetailHero showDetail={tvSeriesDetail} />
      <div className={styles.seasons}>
        {tvSeriesDetail.seasons
          .filter((season) => season.season_number)
          .map((season, index) => (
            <button
              className={clsx(
                styles.season,
                selectedSeason === index + 1 && styles.selected
              )}
              key={season.name}
              onClick={() => setSelectedSeasons(index + 1)}
              type="button"
            >
              Season {season.season_number}
            </button>
          ))}
      </div>
      <EpisodeList episodes={seasonDetail?.episodes ?? []} />
      <PosterCarousel
        shows={similarTVSeries?.results ?? []}
        title="More Like This"
      />
    </div>
  );
};

export default TVSeriesDetailContent;
