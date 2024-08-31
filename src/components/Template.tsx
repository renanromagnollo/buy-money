import { ReactNode } from 'react';
import styled from 'styled-components';

import { Logo } from './Logo';
import { ButtonConvert } from './ButtonConvert';

interface TemplateProps {
  children: ReactNode;
}

const ScreenArea = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
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
  return (
    <ScreenArea>
      <Header>
        <Logo />
        <DateInfo>
          <h5>14 de janeiro 2021 | 21:00 UTC</h5>
          <p>Dados de câmbio disponibilizados pela Morningstar.</p>
        </DateInfo>
      </Header>
      {children}
      <ButtonConvert />
    </ScreenArea>
  );
}