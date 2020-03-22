// Core
import React, { ReactElement, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useStarshipsFetch } from './hooks/useStarshipsFetch';
import { Starship } from './types';

// Instruments
import Styles from './styles.module.css';
import { StarshipTile } from '../../elements/StarshipTile';
import { fetchAsync } from './action';

export const Panel: FC = () => {
  const dispatch = useDispatch();
  const { isFetching, data, error } = useStarshipsFetch();

  const errorMessageJSX = error && <p>{error}</p>;

  const starshipsJSX = isFetching
    || data.results.map(
      ({
        // eslint-disable-next-line @typescript-eslint/camelcase
        name,
        starship_class,
        crew,
        manufacturer,
      }: Starship): ReactElement => (
        <StarshipTile
          key={name}
          name={name}
          starship_class={starship_class}
          crew={crew}
          manufacturer={manufacturer}
        />
      ),
    );

  const buttonMessage = isFetching ? '⏳ Вызываю...' : '📲 Вызвать корабли';

  return (
    <>
      {errorMessageJSX}
      <section className={Styles.panel}>
        <h1>🖥</h1>
        <button type="button" disabled={isFetching} onClick={() => dispatch(fetchAsync())}>
          {buttonMessage}
        </button>
        <ul>{starshipsJSX}</ul>
      </section>
    </>
  );
};
