import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { ReactComponent as DeleteLogo } from '../assets/icons/delete-dark.svg';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialState: T,
): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export const calculatorItems = [
  {
    key: 0,
    render: 'C',
    value: 'C',
  },
  {
    key: 1,
    render: '+/-',
    value: '+/-',
  },
  {
    key: 2,
    render: '%',
    value: '%',
  },
  {
    key: 3,
    render: '/',
    value: '/',
  },
  {
    key: 4,
    render: '7',
    value: '7',
  },
  {
    key: 5,
    render: '8',
    value: '8',
  },
  {
    key: 6,
    render: '9',
    value: '9',
  },
  {
    key: 7,
    render: '*',
    value: '*',
  },
  {
    key: 8,
    render: '4',
    value: '4',
  },
  {
    key: 9,
    render: '5',
    value: '5',
  },
  {
    key: 10,
    render: '6',
    value: '6',
  },
  {
    key: 11,
    render: '-',
    value: '-',
  },
  {
    key: 12,
    render: '1',
    value: '1',
  },
  {
    key: 13,
    render: '2',
    value: '2',
  },
  {
    key: 14,
    render: '3',
    value: '3',
  },
  {
    key: 15,
    render: '+',
    value: '+',
  },
  {
    key: 16,
    render: '0',
    value: '0',
  },
  {
    key: 17,
    render: '.',
    value: '.',
  },
  {
    key: 18,
    render: <DeleteLogo />,
    value: 'R',
  },
  {
    key: 19,
    render: '=',
    value: '=',
  },
];
