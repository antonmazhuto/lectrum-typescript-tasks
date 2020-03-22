// Types
import {
  ErrorHttpAction,
  Profile,
  PROFILE_FILL,
  PROFILE_SET_FETCHING_ERROR,
  PROFILE_START_FETCHING,
  PROFILE_STOP_FETCHING,
  PROFILE_SUBMIT,
  ProfileActionTypes,
  ProfileSetFetchingErrorAction,
} from './types';

// Sync
export function startFetchingProfile(): ProfileActionTypes {
  return {
    type: PROFILE_START_FETCHING,
  };
}

export function stopFetchingProfile(): ProfileActionTypes {
  return {
    type: PROFILE_STOP_FETCHING,
  };
}

export function fillProfile(payload: Profile): ProfileActionTypes {
  return {
    type: PROFILE_FILL,
    payload,
  };
}

export function setfetchingError(payload: ErrorHttpAction): ProfileSetFetchingErrorAction {
  return {
    type: PROFILE_SET_FETCHING_ERROR,
    error: true,
    payload,
  };
}

export function submitProfile(): ProfileActionTypes {
  return {
    type: PROFILE_SUBMIT,
  };
}
