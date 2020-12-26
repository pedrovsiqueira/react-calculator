import React, { useContext } from 'react';
import { Container, SubHeader, ModeContainer } from './styles';
import { Result } from '../index';
import Signal from '../../assets/icons/signal-dark.svg';
import Battery from '../../assets/icons/battery-dark.svg';
import DarkMode from '../../assets/icons/dark-mode.svg';
import DayMode from '../../assets/icons/day-mode.svg';
import { AppContext } from '../../hooks/AppContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  const today = new Date();
  const time = `${today.getHours()}:${today.getMinutes()}`;

  return (
    <Container>
      <SubHeader>
        {time}
        <div>
          <img src={Signal} alt="signal icon" />
          <img src={Battery} alt="battery icon" />
        </div>
      </SubHeader>

      <ModeContainer onClick={toggleTheme}>
        <img
          src={theme?.title === 'dark' ? DarkMode : DayMode}
          alt="mode icon"
        />
      </ModeContainer>

      <Result />
    </Container>
  );
};
