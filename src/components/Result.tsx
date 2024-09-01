import { ArrowLeft } from 'lucide-react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.gray.light};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 15px;
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }
`;

export function Result() {
  return (
    <Container>
      <Button>
        <ArrowLeft color="#ffffff" size={25} />
        <h6>Voltar</h6>
      </Button>
      <h5>O resultado do cálculo é</h5>
      <h1>R$ 240,56</h1>
      <div>
        <p>Compra no dinheiro e taxa de 5.3%</p>
        <p>Cotação do dólar: $1,00 = R$ 5,20</p>
      </div>
    </Container>
  );
}
