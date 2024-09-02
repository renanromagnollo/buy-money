import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useReactQuery } from '../../../hooks/useReactQuery';
import { useEffect, useState } from 'react';
import { calcValues } from '../../../utils/calc-value';
import { LoaderSpin } from '../../loaders/LoaderSpin';

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
  const { data } = useReactQuery();
  const [result, setResult] = useState<number | undefined>();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const dollarNumber = +queryParams.get('d')!;
  const tax = +queryParams.get('t')!;

  useEffect(() => {
    if (data && dollarNumber !== undefined && tax !== undefined) {
      if (data) {
        const values = calcValues({
          dollarNumber,
          dollarPrice: +data?.USDBRL.bid,
          paymentType: '1',
          stateTax: tax,
        });

        setResult(values);
      }
      return;
    }
  }, [data, dollarNumber, tax]);
  return (
    <Container>
      {!result ? (
        <LoaderSpin />
      ) : (
        <>
          <Link to={'/'}>
            <Button>
              <ArrowLeft color="#ffffff" size={25} />
              <h6>Voltar</h6>
            </Button>
          </Link>
          <h5>O resultado do cálculo é</h5>
          <h1>R$ {result}</h1>
          <div>
            <p>
              Compra de ${dollarNumber} doláres no dinheiro e taxa de {tax}%
            </p>
            <p>Cotação do dólar: $1,00 = R$ {data?.USDBRL.bid}</p>
          </div>
        </>
      )}
    </Container>
  );
}
