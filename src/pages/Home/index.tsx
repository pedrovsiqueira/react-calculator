import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Header, Button } from '../../components';
import { Container, StyledBackground, ButtonsContainer } from './styles';
import { calculatorItems } from '../../utils/utils';
import { AppContext } from '../../hooks/AppContext';

const Home: React.FC = () => {
  const { addToInput } = useContext(AppContext);

  return (
    <>
      <Helmet title="Home" />
      <Container>
        <StyledBackground>
          <Header />

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
