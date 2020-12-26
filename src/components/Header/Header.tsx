import React from 'react';
import { Container, SubHeader } from './styles';
import { Result } from '../index';
import { HeaderProps } from '../../interfaces/interfaces';
import Signal from '../../assets/icons/signal.svg';
import Battery from '../../assets/icons/battery.svg';

export const Header: React.FC<HeaderProps> = ({ result, input }) => {
  const today = new Date();
  const time = `${today.getHours()}:${today.getMinutes()}`;

  return (
    <Container>
      <SubHeader>
        {time}
        <div>
          <img src={Signal} alt="signal icon" />
          <img src={Battery} alt="signal icon" />
        </div>
      </SubHeader>

      <Result result={result} input={input} />
    </Container>
  );
};
