// Core
import React, { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

// Instruments
import Styles from './styles.module.css';
import { book } from '../../routes/book';

type Props = {
  name: string;
  starship_class: string;
  manufacturer: string;
  crew: string;
};

export const StarshipTile: FC<Props> = ({
  name,
  starship_class,
  manufacturer,
  crew,
}: Props): ReactElement => {
  const dispatch = useDispatch();
  return (
    <section
      className={Styles.starshipTile}
      onClick={() => dispatch(push(`${book.panel}/${name.replace(/ /g, '-').toLowerCase()}`))}
    >
      <h1>Ω</h1>
      <div className={Styles.description}>
        <div>
          <span>Имя:</span>
          <span>
            &nbsp;
            {name}
          </span>
        </div>
        <div>
          <span>Класс:</span>
          <span>
            &nbsp;
            {starship_class}
          </span>
        </div>
        <div>
          <span>Производитель:</span>
          <span>
            &nbsp;
            {manufacturer}
          </span>
        </div>
        <div>
          <span>Команда:</span>
          <span>
            &nbsp;
            {crew}
          </span>
        </div>
      </div>
    </section>
  );
};
