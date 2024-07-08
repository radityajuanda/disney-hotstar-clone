import { render } from '@testing-library/react';
import EpisodeList from '..';

const episodes = [
  {
    air_date: '2019-04-06',
    episode_number: 1,
    episode_type: 'standard',
    id: 1675448,
    name: 'Cruelty',
    overview:
      'It is the Taisho Period (i.e. 1912-1926). Tanjiro Kamado is living a modest but blissful life in the mountains with his family. One day, when he returns from selling charcoal in town, he finds the remains of his slaughtered family in pools of blood after a demon attack. Tanjiro rushes down the snowy mountain with the sole survivor, his sister Nezuko, on his back. But on the way, Nezuko suddenly snarls, turning on Tanjiro.',
    production_code: '',
    runtime: 23,
    season_number: 1,
    show_id: 85937,
    still_path: '/liyqZVGyEf5e4TEI2JuKU0aaldI.jpg',
    vote_average: 8.2,
    vote_count: 32,
    crew: [
      {
        job: 'Key Animation',
        department: 'Visual Effects',
        credit_id: '5f8eea67f8aee80033c3c633',
        adult: false,
        gender: 1,
        id: 2817408,
        known_for_department: 'Visual Effects',
        name: 'Akane Okabe',
        original_name: 'Akane Okabe',
        popularity: 1.88,
        profile_path: null,
      },
    ],
    guest_stars: [
      {
        character: 'Giyu Tomioka (voice)',
        credit_id: '5ec58f039979d20020306a36',
        order: 4,
        adult: false,
        gender: 2,
        id: 9705,
        known_for_department: 'Acting',
        name: 'Takahiro Sakurai',
        original_name: '櫻井孝宏',
        popularity: 34.045,
        profile_path: '/8s8owcKmpRAuhzEGjSdRpztthUg.jpg',
      },
    ],
  },
  {
    air_date: '2019-04-13',
    episode_number: 2,
    episode_type: 'standard',
    id: 1732614,
    name: 'Trainer Sakonji Urokodaki',
    overview:
      "At Giyu Tomioka's urging, Tanjiro heads for Mt. Sagiri with his sister Nezuko who's been turned into a demon. During the night, Tanjiro catches the smell of blood from inside a temple. He enters, thinking that someone might be hurt, only to come upon a man-eating demon. When the demon attacks, Tanjiro manages to fight back with his hatchet, but the demon's strength is overwhelming. Just as the demon is about to finish him off, Tanjiro is saved by none other than.",
    production_code: '',
    runtime: 23,
    season_number: 1,
    show_id: 85937,
    still_path: '/r2MZH3snLABIpqUPj8YOF9HIaBf.jpg',
    vote_average: 7.8,
    vote_count: 30,
    crew: [
      {
        job: 'Key Animation',
        department: 'Visual Effects',
        credit_id: '5f8eac9ed133240038294c49',
        adult: false,
        gender: 1,
        id: 1828036,
        known_for_department: 'Visual Effects',
        name: 'Kayo Kizawa',
        original_name: '鬼澤佳代',
        popularity: 3.023,
        profile_path: null,
      },
    ],
    guest_stars: [
      {
        character: 'Giyu Tomioka (voice)',
        credit_id: '5ec58f039979d20020306a36',
        order: 4,
        adult: false,
        gender: 2,
        id: 9705,
        known_for_department: 'Acting',
        name: 'Takahiro Sakurai',
        original_name: '櫻井孝宏',
        popularity: 34.045,
        profile_path: '/8s8owcKmpRAuhzEGjSdRpztthUg.jpg',
      },
    ],
  },
];

describe('EpisodeCard', () => {
  it('should render correctly', () => {
    const { getByText, getAllByText, getByAltText,  } = render(
      <EpisodeList episodes={episodes} />
    );

    expect(getByAltText('Cruelty')).toBeInTheDocument();
    expect(getByText('Cruelty')).toBeInTheDocument();
    expect(
      getByText(
        'It is the Taisho Period (i.e. 1912-1926). Tanjiro Kamado is living a modest but blissful life in the mountains with his family. One day, when he returns from selling charcoal in town, he finds the remains of his slaughtered family in pools of blood after a demon attack. Tanjiro rushes down the snowy mountain with the sole survivor, his sister Nezuko, on his back. But on the way, Nezuko suddenly snarls, turning on Tanjiro.'
      )
    ).toBeInTheDocument();
    expect(getByText('6 Apr 2019')).toBeInTheDocument();
    expect(getByText('S1 E1')).toBeInTheDocument();

    expect(getByAltText('Trainer Sakonji Urokodaki')).toBeInTheDocument();
    expect(getByText('Trainer Sakonji Urokodaki')).toBeInTheDocument();
    expect(
      getByText(
        "At Giyu Tomioka's urging, Tanjiro heads for Mt. Sagiri with his sister Nezuko who's been turned into a demon. During the night, Tanjiro catches the smell of blood from inside a temple. He enters, thinking that someone might be hurt, only to come upon a man-eating demon. When the demon attacks, Tanjiro manages to fight back with his hatchet, but the demon's strength is overwhelming. Just as the demon is about to finish him off, Tanjiro is saved by none other than."
      )
    ).toBeInTheDocument();
    expect(getByText('13 Apr 2019')).toBeInTheDocument();
    expect(getByText('S1 E2')).toBeInTheDocument();
    
    expect(getAllByText('23m').length).toBe(2);
  });
});
