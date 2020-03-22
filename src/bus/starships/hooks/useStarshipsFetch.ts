import { useSelector } from 'react-redux';

import { StarshipsState } from '../reducer';
import { AppState } from '../../../init/rootReducer';

export const useStarshipsFetch = (): StarshipsState => {
  const { data, isFetching, error } = useSelector<AppState, StarshipsState>(
    (state) => state.starships,
  );

  return {
    data,
    isFetching,
    error,
  };
};
