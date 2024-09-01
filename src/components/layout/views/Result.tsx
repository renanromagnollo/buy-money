import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const d = +queryParams.get('d')!;
  const t = +queryParams.get('t')!;
  return (
    <Container>
      <Link to={'/'}>
        <Button>
          <ArrowLeft color="#ffffff" size={25} />
          <h6>Voltar</h6>
        </Button>
      </Link>
      <h5>O resultado do cálculo é</h5>
      <h1>R$ {d * t}</h1>
      <div>
        <p>
          Compra de {d} no dinheiro e taxa de {t}%
        </p>
        <p>Cotação do dólar: $1,00 = R$ 5,20</p>
      </div>
    </Container>
  );
}
