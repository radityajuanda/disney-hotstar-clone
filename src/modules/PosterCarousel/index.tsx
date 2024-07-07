import {
  DragEvent,
  MouseEvent,
  TouchEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import PosterCard from '@/components/PosterCard';

import type { Show } from '@/types/show';

import styles from './styles.module.css';

interface PosterCarouselProps {
  shows: Show[];
  title: string;
}

const PosterCarousel = ({ shows, title }: PosterCarouselProps) => {
  const [carouselPage, setCarouselPage] = useState(1);
  const [isHoveringCarousel, setIsHoveringCarousel] = useState(false);
  const [isDraggingCarousel, setIsDraggingCarousel] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef<number | null>(0);
  const draggingXRef = useRef<number | null>(0);

  const itemPerPage = useMemo(() => 7, []);
  const totalCarouselPage = useMemo(
    () => Math.ceil(shows.length / itemPerPage),
    [itemPerPage, shows.length]
  );

  const getOverviewPosition = useCallback(
    (index: number) => {
      if (index === 0 || (index > 6 && index % 6 === 1)) return 'left';
      if (index === shows.length - 1) return 'right';
      return 'middle';
    },
    [shows.length]
  );

  const handleMouseEnterCarousel = useCallback(
    () => setIsHoveringCarousel(true),
    []
  );

  const handleMouseLeaveCarousel = useCallback(
    () => setIsHoveringCarousel(false),
    []
  );

  const scrollCarouselToPage = useCallback(
    (page: number) => {
      if (!carouselRef.current) {
        return;
      }

      const nextPageFirstItemIndex = (page - 1) * itemPerPage;

      carouselRef.current.scrollTo({
        left: (
          carouselRef.current.children[nextPageFirstItemIndex] as HTMLElement
        ).offsetLeft,
        top: 0,
        behavior: 'smooth',
      });

      setCarouselPage(page);
    },
    [itemPerPage]
  );

  const handleMouseDownCarousel = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      dragStartXRef.current = e.clientX;
      draggingXRef.current = e.clientX;
    },
    []
  );

  const handleMouseMoveCarousel = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!carouselRef.current || !dragStartXRef.current || !draggingXRef.current) return;

      isDraggingRef.current = true;
      setIsDraggingCarousel(true);

      const dragDistance = e.clientX - draggingXRef.current;
      draggingXRef.current = e.clientX;

      if (dragDistance < 0) {
        carouselRef.current.scrollLeft =
          carouselRef.current.scrollLeft + Math.abs(dragDistance);
      } else {
        carouselRef.current.scrollLeft =
          carouselRef.current.scrollLeft - Math.abs(dragDistance);
      }
    },
    []
  );

  const handleMouseUpCarousel = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current?.clientWidth || !dragStartXRef.current) return;

    const dragDistance = e.clientX - dragStartXRef.current;
    if (Math.abs(dragDistance) > carouselRef.current.clientWidth / 2) {
      if (dragDistance < 0 && carouselPage < totalCarouselPage) {
        scrollCarouselToPage(carouselPage + 1);
      } else if (dragDistance > 0 && carouselPage > 0) {
        scrollCarouselToPage(carouselPage - 1);
      }
    } else {
      scrollCarouselToPage(carouselPage);
    }

    setIsDraggingCarousel(false);
    dragStartXRef.current = null;
    draggingXRef.current = null;
    isDraggingRef.current = false;
  }, [carouselPage, scrollCarouselToPage, totalCarouselPage]);

  const handleClickPrevPage = useCallback(() => {
    if (!carouselRef.current || carouselPage === 1) {
      return;
    }

    scrollCarouselToPage(carouselPage - 1);
  }, [carouselPage, scrollCarouselToPage]);

  const handleClickNextPage = useCallback(() => {
    if (!carouselRef.current || carouselPage === totalCarouselPage) {
      return;
    }

    scrollCarouselToPage(carouselPage + 1);
  }, [carouselPage, scrollCarouselToPage, totalCarouselPage]);

  return (
    <div className={styles.posterCarousel}>
      <h3 className={styles.posterCarouselTitle}>{title}</h3>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carousel}
          ref={carouselRef}
          onMouseEnter={handleMouseEnterCarousel}
          onMouseLeave={handleMouseLeaveCarousel}
          onMouseDown={handleMouseDownCarousel}
          onMouseMove={handleMouseMoveCarousel}
          onMouseUp={handleMouseUpCarousel}
        >
          {shows.map((show, index) => (
            <PosterCard
              key={show.title || show.name}
              overviewPosition={getOverviewPosition(index)}
              show={show}
            />
          ))}
          {carouselPage > 1 && (
            <button
              type="button"
              className={clsx(
                styles.carouselNav,
                styles.left,
                isHoveringCarousel && styles.visible,
                isDraggingCarousel && styles.isDragging,
              )}
              onClick={handleClickPrevPage}
            >
              <LeftOutlined />
            </button>
          )}
          {carouselPage < totalCarouselPage && (
            <button
              type="button"
              className={clsx(
                styles.carouselNav,
                styles.right,
                isHoveringCarousel && styles.visible,
                isDraggingCarousel && styles.isDragging,
              )}
              onClick={handleClickNextPage}
            >
              <RightOutlined />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PosterCarousel;
