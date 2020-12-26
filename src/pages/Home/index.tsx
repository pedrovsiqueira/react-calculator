import React, { useState, useEffect, useCallback } from 'react';
import * as math from 'mathjs';
import { Helmet } from 'react-helmet';
import { Header, Button } from '../../components';
import { Container, StyledBackground, ButtonsContainer } from './styles';
import { calculatorItems } from '../../utils/utils';

const Home: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const elements = ['+', '-', '/', '%', '*', '.'];
  const lastElement = input.charAt(input.length - 1);

  useEffect(() => {
    return () => {
      setInput('');
      setResult('');
    };
  }, []);

  const handleCalculate = useCallback(() => {
    if (lastElement === ' ') {
      return setResult(math.evaluate(input.slice(0, input.length - 3)));
    }

    setResult(math.evaluate(input));
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

  const handleClear = () => {
    setResult('');
    setInput('');
  };

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
      if (lastElement === ' ' && elements.includes(value)) {
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
    [handleCalculate, elements, lastElement, handleDefaultInput, handleRemove],
  );

  return (
    <>
      <Helmet title="Home" />
      <Container>
        <StyledBackground>
          <Header result={result} input={input} />

          <ButtonsContainer>
            {calculatorItems.map(item => (
              <Button key={item.key} onClick={() => addToInput(item.value)}>
                {item.render}
              </Button>
            ))}
          </ButtonsContainer>
        </StyledBackground>
      </Container>
    </>
  );
};

export default Home;
