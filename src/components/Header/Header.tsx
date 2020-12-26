import React, { useContext } from 'react';
import { Container, SubHeader, ModeContainer } from './styles';
import { Result } from '../index';
import {
  BatteryDark,
  BatteryLight,
  SignalDark,
  SignalLight,
  DarkMode,
  LightMode,
} from '../../assets/icons/index';
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
          <img
            src={theme.title === 'dark' ? BatteryDark : BatteryLight}
            alt="signal icon"
          />
          <img
            src={theme.title === 'dark' ? SignalDark : SignalLight}
            alt="battery icon"
          />
        </div>
      </SubHeader>

      <ModeContainer onClick={toggleTheme}>
        <img
          src={theme?.title === 'dark' ? DarkMode : LightMode}
          alt="mode icon"
        />
      </ModeContainer>

      <Result />
    </Container>
  );
};
