// Core
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

// Instruments
import { push } from 'connected-react-router';
import { useControlPanelHook } from './hooks/useControlPanelHook';
import Styles from './styles.module.css';
import observatory from './observatory.jpg';
import { book } from '../../routes/book';

export const Bridge: FC = () => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useControlPanelHook();
  return (
    <section className={Styles.bridge}>
      <h1>
        Добро пожаловать на борт,
        {' '}
        {firstName}
        &nbsp;
        {lastName}
      </h1>
      <img src={observatory} alt="observatory" />
      <button type="button" onClick={() => dispatch(push(book.panel))}>
        Контрольная панель
      </button>
    </section>
  );
};
