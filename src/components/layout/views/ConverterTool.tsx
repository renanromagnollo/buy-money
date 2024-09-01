import { useRef } from 'react';
import { ButtonConvert } from '../../buttons/ButtonConvert';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ToolArea = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

// const Inputs = styled.form`
//   display: flex;
//   gap: 10px;
// `;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  input {
    padding: 10px;
    height: 40px;
  }
`;

export function ConverterTool() {
  console.log('componente renderizou');
  const refDolar = useRef<HTMLInputElement>(null);
  const refTaxa = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleDolar() {
    if (refDolar && refTaxa) {
      console.log(refDolar.current?.value);
      console.log(refTaxa.current?.value);
      navigate(`/result?d=${refDolar.current?.value}&t=${refTaxa.current?.value}`);
    }
  }

  return (
    <ToolArea>
      <form>
        <InputArea>
          <h5>Dólar</h5>
          <input
            autoFocus
            ref={refDolar}
            type="text"
            name="dolar"
            id="dolar"
            // onChange={handleDolar}
          />
        </InputArea>
        <InputArea>
          <h5>Taxa do Estado</h5>
          <input
            ref={refTaxa}
            type="text"
            name="dolar"
            id="dolar"
            // onChange={handleDolar}
          />
        </InputArea>
      </form>
      <div>
        <div style={{ display: 'flex', gap: '5px' }}>
          <input
            type="radio"
            name="payment"
            id="money"
            style={{ accentColor: 'green' }}
          />
          <label htmlFor="money">
            <h5>Dinheiro</h5>
          </label>
          <input type="radio" name="payment" id="card" style={{ accentColor: 'green' }} />
          <label htmlFor="card">
            <h5>Cartão</h5>
          </label>
        </div>
      </div>
      <ButtonConvert enabled onClick={() => handleDolar()} />
    </ToolArea>
  );
}
