import React, { useContext } from 'react';
import { DeleteDark, DeleteLight } from '../../assets/icons/index';
import { AppContext } from '../../hooks/AppContext';

export const DeleteIcon: React.FC = () => {
  const { theme } = useContext(AppContext);

  return (
    <img
      src={theme?.title === 'dark' ? DeleteDark : DeleteLight}
      alt="delete icon"
    />
  );
};
