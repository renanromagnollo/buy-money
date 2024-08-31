import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Arrows } from './Icons/Arrows';

interface ButtonConvertProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  enabled?: boolean;
}

const Button = styled.button<{ disabled?: boolean }>`
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.background};
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray.light};
  }
`;
export function ButtonConvert({ enabled = false, ...props }: ButtonConvertProps) {
  return (
    <Button {...props} disabled={!enabled}>
      <Arrows /> <h6>Converter</h6>
    </Button>
  );
}
