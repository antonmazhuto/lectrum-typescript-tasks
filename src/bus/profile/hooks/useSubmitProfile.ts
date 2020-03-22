import { useSelector } from 'react-redux';

import { ProfileState } from '../reducer';
import { AppState } from '../../../init/rootReducer';

export const useSubmitProfile = (): ProfileState => {
  const {
    lastName, firstName, error, isFetching,
  } = useSelector<AppState, ProfileState>(
    (state) => state.profile,
  );
  return {
    lastName,
    firstName,
    error,
    isFetching,
  };
};
