export type Profile = {
  firstName: string;
  lastName: string;
};

export type ErrorHttpAction = string;

// Sync
export const PROFILE_START_FETCHING = 'PROFILE_START_FETCHING';
type ProfileStartFetchingAction = {
  type: typeof PROFILE_START_FETCHING;
};

export const PROFILE_STOP_FETCHING = 'PROFILE_STOP_FETCHING';
type ProfileStopFetchingAction = {
  type: typeof PROFILE_STOP_FETCHING;
};

export const PROFILE_FILL = 'PROFILE_FILL';
type ProfileFillAction = {
  type: typeof PROFILE_FILL;
  payload: Profile;
};

export const PROFILE_SET_FETCHING_ERROR = 'PROFILE_SET_FETCHING_ERROR';
export type ProfileSetFetchingErrorAction = {
  type: typeof PROFILE_SET_FETCHING_ERROR;
  error: true;
  payload: ErrorHttpAction;
};

export const PROFILE_SUBMIT = 'PROFILE_SUBMIT';
type ProfileSubmitAction = {
  type: typeof PROFILE_SUBMIT;
};

export type ProfileActionTypes =
  | ProfileStartFetchingAction
  | ProfileStopFetchingAction
  | ProfileFillAction
  | ProfileSubmitAction
  | ProfileSetFetchingErrorAction;
