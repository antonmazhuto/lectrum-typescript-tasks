// Types
import {
  ErrorHttpAction,
  PROFILE_FILL,
  PROFILE_SET_FETCHING_ERROR,
  PROFILE_START_FETCHING,
  PROFILE_STOP_FETCHING,
  PROFILE_SUBMIT,
  ProfileActionTypes,
} from './types';

export type ProfileState = {
  firstName: string;
  lastName: string;
  isFetching?: boolean;
  error?: false | ErrorHttpAction;
};

const initialState: ProfileState = {
  firstName: 'Уолтер',
  lastName: 'Уайт',
  isFetching: false,
  error: false,
};

export const profileReducer = (state = initialState, action: ProfileActionTypes): ProfileState => {
  switch (action.type) {
    case PROFILE_START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case PROFILE_STOP_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case PROFILE_SET_FETCHING_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case PROFILE_FILL:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case PROFILE_SUBMIT:
      return state;
    default:
      // eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};
