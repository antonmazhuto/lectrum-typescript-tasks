// Core
import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { useSubmitProfile } from './hooks/useSubmitProfile';

// Instruments
import Styles from './styles.module.css';
import { ProfileTitle } from '../../elements/profileTitle';
import { Profile as ProfileType } from './types';
import { fillProfile, startFetchingProfile, stopFetchingProfile } from './action';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const {
    firstName, lastName, isFetching, error,
  } = useSubmitProfile();

  const buttonMessage = isFetching ? 'Обновляю' : 'Обновлено';

  const disabledStyle = cx({
    [Styles.disabled]: isFetching,
  });
  const errorMessageJSX = error && <p>{error}</p>;
  return (
    <>
      {errorMessageJSX}
      <section className={Styles.profile}>
        <ProfileTitle firstName={firstName} lastName={lastName} />
        <Formik
          initialValues={{ firstName, lastName }}
          render={() => (
            <Form>
              <Field className={disabledStyle} disabled={isFetching} name="firstName" type="text" />
              <Field className={disabledStyle} disabled={isFetching} name="lastName" type="text" />
              <button className={disabledStyle} disabled={isFetching} type="submit">
                {buttonMessage}
              </button>
            </Form>
          )}
          onSubmit={(values: ProfileType, actions) => {
            dispatch(startFetchingProfile());
            actions.setSubmitting(false);
            dispatch(fillProfile(values));
            dispatch(stopFetchingProfile());
          }}
        />
      </section>
    </>
  );
};
