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

  const isElement = useCallback(
    (value: string) => {
      return elements.includes(value);
    },
    [elements],
  );

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const handleCalculate = useCallback(() => {
    if (lastElement === ' ') {
      return setResult(
        math.evaluate(input.slice(0, input.length - 3)).toString(),
      );
    }

    if (lastElement === '.' || !input.length) {
      return null;
    }

    setResult(math.evaluate(input.replace(/\s+/g, '')).toString());
  }, [input, lastElement]);

  const handleDefaultInput = useCallback(
    (value: string) => {
      if (isElement(value)) {
        return setInput(prevState => `${prevState} ${value} `);
      }

      setInput(prevState => prevState + value);
    },
    [isElement],
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

  const handlePlusMinus = useCallback(() => {
    if (!result) {
      return null;
    }

    setResult(prevState =>
      !result.includes('-') ? `-${prevState}` : prevState.replace('-', ''),
    );
  }, [result]);

  const addToInput = useCallback(
    (value: string) => {
      if (
        (lastElement === ' ' && isElement(value)) ||
        (lastElement === '.' && isElement(value)) ||
        (lastElement === '.' && value === '.') ||
        (!input.length && isElement(value))
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
        case 'PM':
          handlePlusMinus();
          break;
        default:
          handleDefaultInput(value);
      }
    },
    [
      handleCalculate,
      handleClear,
      handleDefaultInput,
      handleRemove,
      lastElement,
      input,
      isElement,
      handlePlusMinus,
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
