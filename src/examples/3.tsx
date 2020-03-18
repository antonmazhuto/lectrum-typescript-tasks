import React, {
  FC, ReactElement, ReactNode, HTMLAttributes,
} from 'react';

export type PropTypes = {
  title?: string;
  children: ReactNode;
  extends: HTMLAttributes<HTMLDivElement>;
};

export const Component3: FC<PropTypes> = ({
  children,
  title,
  ...other
}: PropTypes): ReactElement => (
  <div {...other}>
    {title}
:
    {children}
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const p = <Component3 extends={{ className: 'sad' }}>1</Component3>;
