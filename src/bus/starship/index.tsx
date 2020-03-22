// Core
import React, { FC } from 'react';
import { useStarship } from './hooks/useStarship';
import { book } from '../../routes/book';

// Instruments
import Styles from './styles.module.css';

export const Starship: FC = () => {
  const starship = useStarship(book.starship);
  return (
    <section className={Styles.starship}>
      <h1>Starship</h1>
      <div className={Styles.description}>
        <div>
          <span>Имя:</span>
          <span>
            &nbsp;
            {starship && starship.name}
          </span>
        </div>
        <div>
          <span>Класс:</span>
          <span>
            &nbsp;
            {starship && starship.starship_class}
          </span>
        </div>
        <div>
          <span>Производитель:</span>
          <span>
            &nbsp;
            {starship && starship.manufacturer}
          </span>
        </div>
        <div>
          <span>Команда:</span>
          <span>
            &nbsp;
            {starship && starship.crew}
          </span>
        </div>
      </div>
    </section>
  );
};
