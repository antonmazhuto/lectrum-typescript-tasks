import { useSelector } from 'react-redux';

import { createMatchSelector } from 'connected-react-router';
import { StarshipsState } from '../../starships/reducer';
import { AppState } from '../../../init/rootReducer';
import { Starship } from '../../starships/types';

export const useStarship = (props: string): Starship | null => {
  const stateData = useSelector<AppState, AppState>((state) => state);
  const starships = useSelector<AppState, StarshipsState>((state) => state.starships);
  const matchSelector = createMatchSelector(props);
  const match = matchSelector(stateData);

  if (!match) {
    return null;
  }

  // не знаю как проверить наличие параметра starship в match.params.starship
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const starshipName = match.params.starship;

  if (!starships.data.results.length) {
    return null;
  }

  const starship = starships.data.results.find(
    (item) => (
      item.name.replace(/ /g, '-').toLowerCase() === starshipName),
  );

  return starship || null;
};
