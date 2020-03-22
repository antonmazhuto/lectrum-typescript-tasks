import { useSelector } from 'react-redux';
import { ProfileState } from '../../profile/reducer';
import { AppState } from '../../../init/rootReducer';

export const useControlPanelHook = (): ProfileState => {
  const { firstName, lastName } = useSelector<AppState, ProfileState>((state) => state.profile);
  return {
    firstName,
    lastName,
  };
};
