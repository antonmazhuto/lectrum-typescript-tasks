import React, {
  FC, ReactElement, ReactNode, MouseEvent, FocusEvent,
} from 'react';

export type PropTypes = {
  onClick: (e: MouseEvent) => void;
};

export const Component4: FC<PropTypes> = ({ onClick }: PropTypes): ReactElement => {
  const onFocus = (e: FocusEvent) => {
    console.log(e.currentTarget);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onFocus={onFocus}
      onKeyDown={(e): void => {
        console.log(e);
      }}
    >
      Click me
    </button>
  );
};
