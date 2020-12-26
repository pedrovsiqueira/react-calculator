import React, { createContext, useState, useCallback } from 'react';
import * as math from 'mathjs';
import { DefaultTheme } from 'styled-components';
import { usePersistedState } from '../utils/utils';
import dark from '../assets/styles/themes/dark';
import light from '../assets/styles/themes/light';

interface IAppContext {
  input: string;
  result: string;
  theme: DefaultTheme;
  toggleTheme: () => void;
  addToInput: (value: string) => void;
}

export const AppContext = createContext({} as IAppContext);

const AppContextProvider: React.FC = ({ children }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const elements = ['+', '-', '/', '%', '*'];
  const lastElement = input.charAt(input.length - 1);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const handleCalculate = useCallback(() => {
    if (lastElement === ' ') {
      return setResult(math.evaluate(input.slice(0, input.length - 3)));
    }

    setResult(math.evaluate(input.replace(/\s+/g, '')));
  }, [input, lastElement]);

  const handleDefaultInput = useCallback(
    (value: string) => {
      if (elements.includes(value)) {
        return setInput(prevState => `${prevState} ${value} `);
      }

      setInput(prevState => prevState + value);
    },
    [elements],
  );

  const handleClear = useCallback(() => {
    setResult('');
    setInput('');
  }, []);

  const handleRemove = useCallback(() => {
    if (lastElement === ' ') {
      setInput(prevState => prevState.slice(0, input.length - 3));
      return setResult('');
    }

    setInput(prevState => prevState.slice(0, -1));
    setResult('');
  }, [lastElement, input]);

  const addToInput = useCallback(
    (value: string) => {
      if (
        (lastElement === ' ' && elements.includes(value)) ||
        (lastElement === '.' && elements.includes(value)) ||
        (lastElement === '.' && value === '.') ||
        (!input.length && elements.includes(value))
      ) {
        return null;
      }

      switch (value) {
        case '=':
          handleCalculate();
          break;
        case 'C':
          handleClear();
          break;
        case 'R':
          handleRemove();
          break;
        default:
          handleDefaultInput(value);
      }
    },
    [
      elements,
      handleCalculate,
      handleClear,
      handleDefaultInput,
      handleRemove,
      lastElement,
      input,
    ],
  );

  return (
    <AppContext.Provider
      value={{
        input,
        theme,
        result,
        toggleTheme,
        addToInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
