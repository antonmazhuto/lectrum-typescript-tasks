// Core
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';

// Reducers
import { starshipsReducer as starships } from '../bus/starships/reducer';
// import { feedReducer as feed } from '../bus/feed/reducer';
import { profileReducer as profile } from '../bus/profile/reducer';

// Instruments
import { history } from './middleware';

const router = connectRouter(history);

export const rootReducer = combineReducers({
  starships,
  profile,
  router,
  form,
});

export type AppState = ReturnType<typeof rootReducer>;
