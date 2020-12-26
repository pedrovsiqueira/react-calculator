import React, { useState, useEffect, useCallback } from 'react';
import * as math from 'mathjs';
import { Helmet } from 'react-helmet';
import { Header, Button } from '../../components';
import { Container, StyledBackground, ButtonsContainer } from './styles';
import { calculatorItems } from '../../utils/utils';

const Home: React.FC = props => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const elements = ['+', '-', '/', '%', '*'];
  const lastElement = input.charAt(input.length - 1);

  useEffect(() => {
    return () => {
      setInput('');
      setResult('');
    };
  }, []);

  const handleCalculate = useCallback(() => {
    const isLastInputAnElement = elements.includes(lastElement);

    if (isLastInputAnElement) {
      return setResult(math.evaluate(input.slice(0, -1)));
    }

    return setResult(math.evaluate(input));
  }, [input, elements, lastElement]);

  const addToInput = useCallback(
    (value: string) => {
      if (elements.includes(lastElement) && elements.includes(value)) {
        return null;
      }

      switch (value) {
        case '=':
          handleCalculate();
          break;
        case 'C':
          setResult('');
          setInput('');
          break;
        case 'R':
          setInput(prevState => prevState.slice(0, -1));
          setResult('');
          break;
        default:
          setInput(prevState => prevState + value);
      }
    },
    [handleCalculate, elements, lastElement],
  );

  return (
    <>
      <Helmet title="Home" />
      <Container>
        <StyledBackground {...props}>
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
