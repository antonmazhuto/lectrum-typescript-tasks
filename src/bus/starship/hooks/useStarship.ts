import { useSelector } from 'react-redux';

import { createMatchSelector } from 'connected-react-router';
import { StarshipsState } from '../../starships/reducer';
import { AppState } from '../../../init/rootReducer';
import { Starship } from '../../starships/types';

export const useStarship = (props: string): Starship => {
  const stateData = useSelector<AppState, AppState>((state) => state);
  const { data } = useSelector<AppState, StarshipsState>((state) => state.starships);
  const matchSelector = createMatchSelector(props);
  const match = matchSelector(stateData);

  // не знаю как проверить существование параметра starship
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const starshipName = match && match.params.starship;

  const starship = data.results
    && data.results.find(
      (item: Starship) => item.name.replace(/ /g, '-').toLowerCase() === starshipName,
    );
  //  не знаю как проверить существование сущностей name, starship_class ....
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const { name, starship_class, manufacturer, crew } = starship || undefined;
  return {
    name,
    starship_class,
    crew,
    manufacturer,
  };
};
