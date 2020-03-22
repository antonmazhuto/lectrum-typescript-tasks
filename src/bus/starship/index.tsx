// Core
import React, { FC } from 'react';
import { useStarship } from './hooks/useStarship';
import { book } from '../../routes/book';

// Instruments
import Styles from './styles.module.css';

export const Starship: FC = () => {
  const {
    name, starship_class, crew, manufacturer,
  } = useStarship(book.starship);
  return (
    <section className={Styles.starship}>
      <h1>Starship</h1>
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
