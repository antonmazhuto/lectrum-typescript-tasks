import React, { FC } from 'react';

type Props = {
  firstName: string;
  lastName: string;
};
export const ProfileTitle: FC<Props> = ({ firstName, lastName }: Props) => (
  <h1>
    {firstName}
    {' '}
    {lastName}
  </h1>
);
