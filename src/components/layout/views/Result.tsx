import { ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useReactQuery } from '../../../hooks/useReactQuery';
import { useEffect, useState } from 'react';
import { calcValueToBuyCurrency } from '../../../utils/calc-value-to-buy-currency';
import { LoaderSpin } from '../../loaders/LoaderSpin';
import { maskDollarLabel, maskResultFinalValue } from '../../../utils/masks';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  span,
  h1 {
    font-weight: bolder;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.gray.light};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 5px;
  margin-top: 30px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }
`;

export function Result() {
  const { data } = useReactQuery();
  const [result, setResult] = useState<number | undefined>();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const amountToBuy = +queryParams.get('amount_to_buy')!;
  const tax = +queryParams.get('t')!;
  const payment = queryParams.get('p');

  useEffect(() => {
    if (data && amountToBuy !== undefined && tax !== undefined) {
      if (data) {
        const values = calcValueToBuyCurrency({
          amountToBuy,
          currencyQuote: +data?.USDBRL.bid,
          paymentType: payment!,
          stateTax: tax,
        });

        setResult(values);
      }
      return;
    }
  }, [data, amountToBuy, payment, tax]);
  return (
    <Container>
      {!result ? (
        <LoaderSpin />
      ) : (
        <>
          <h5>O resultado do cálculo é</h5>
          <h1>R$ {maskResultFinalValue(result.toString())}</h1>
          <div>
            <h6>
              Compra de <span>$ {maskDollarLabel(amountToBuy.toString())}</span> doláres{' '}
              no {payment === '1' ? 'dinheiro' : 'cartão'} e taxa de{' '}
              <span>{tax.toString().replace(/\./, ',')}%.</span>
            </h6>
            <p>Cotação do dólar: $ 1,00 = R$ {data?.USDBRL.bid.replace(/\./, ',')}.</p>
          </div>
          <Link to={'/'}>
            <Button>
              <ArrowLeft color="#ffffff" size={25} />
              <h6>Voltar</h6>
            </Button>
          </Link>
        </>
      )}
    </Container>
  );
}
