import React, { ReactElement, ReactNode } from 'react';

export interface PropInterfaces {
  title?: string;
  children: ReactNode;
}

export function Component1({ children, title }: PropInterfaces): ReactElement {
  return (
    <div>
      {title}
:
      {children}
    </div>
  );
}
