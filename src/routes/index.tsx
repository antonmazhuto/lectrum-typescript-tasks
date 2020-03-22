// Core
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import { Nav } from '../elements/nav';
import { Profile } from '../bus/profile';
import { Bridge } from '../bus/bridge';
import { Panel } from '../bus/starships';
import { Starship } from '../bus/starship';
import { book } from './book';

export const Routes: FC = () => (
  <>
    <Route component={Nav} path="/" />
    <Switch>
      <Route exact component={Panel} path={book.panel} />
      <Route exact component={Bridge} path={book.root} />
      <Route exact component={Profile} path={book.profile} />
      <Route exact component={Starship} path={book.starship} />
      <Redirect to={book.root} />
    </Switch>
  </>
);
