import React from 'react';

type Props = {
  changePage: () => void,
};

export const CurrentBook: React.FC<Props> = ({ changePage }) => {
  return (
    <h1 onClick={changePage}>Selected book</h1>
  );
};
