import { ReactNode } from 'react';
import styled from 'styled-components';

import { Logo } from '../assets/Logo';

interface TemplateProps {
  children: ReactNode;
}

const ScreenArea = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

// const ImgBG = styled.div`
//   position: absolute;
//   bottom: -80px;
//   right: 0;
//   overflow: hidden;
//   -webkit-mask-image: linear-gradient(transparent, black, transparent);
//   mask-image: linear-gradient(transparent, black, transparent);
// `;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
`;

const DateInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  p {
    color: ${({ theme }) => theme.colors.gray.light};
  }
`;
export function Template({ children }: TemplateProps) {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const date = new Date();
  return (
    <ScreenArea>
      <Header>
        <Logo />
        <DateInfo>
          <h5>
            {`${date.getDay()} de ${
              months[date.getMonth() - 1]
            } de ${date.getFullYear()}`}{' '}
            | 21:00 UTC
          </h5>
          <p>Dados de câmbio disponibilizados pela Morningstar.</p>
        </DateInfo>
      </Header>
      {children}
      {/* <ImgBG>
        <img src="mask.png" alt="background-image" />
      </ImgBG> */}
    </ScreenArea>
  );
}
