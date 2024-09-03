//TODO: Colocar localstorage para o input selecionado

// import { useRef } from 'react';
import { ButtonConvert } from '../../buttons/ButtonConvert';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  refDolar: string;
  refTaxa: string;
  payment: string;
};

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

  input {
    padding: 10px;
    width: 200px;
    height: 40px;
  }
`;

export function ConverterTool() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  console.log('componente renderizou');
  // const refDolar = useRef<HTMLInputElement>(null);
  // const refTaxa = useRef<HTMLInputElement>(null);
  // const navigate = useNavigate();

  const handleDolar: SubmitHandler<Inputs> = (data) => {
    // if (refDolar && refTaxa) {
    //   console.log(refDolar.current?.value);
    //   console.log(refTaxa.current?.value);
    //   navigate(`/result?d=${refDolar.current?.value}&t=${refTaxa.current?.value}`);
    // }
    console.log(data);
  };

  function maskDollar(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    value = value.replace(/^0+/, '');
    value = value.replace(/\./, ',');
    value = value.padStart(3, '0');
    value = value.replace(/(\d{2})$/, ',$1');
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    value = `$ ${value}`;
    e.target.value = value;
  }

  function maskTax(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('length start:', e.target.value.length);
    console.log(e.target.value);
    let value = e.target.value;
    value = value.replace(/[^0-9,.]/g, '');
    value = value.replace(/^0+/, '');
    value = value.replace(/\./, ',');
    console.log('value', value);
    if (e.target.value.length > 6) {
      // value = value.replace(/(\d{1})$/, ',$1');
      value = value.slice(1);
    }
    if (e.target.value.length === 6) {
      value = value.replace(/^(\d{1})/, '$1');
    }

    value = `${value} %`;
    e.target.value = value;

    e.target.setSelectionRange(value.length - 2, value.length - 2);
  }

  function focusChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('onfocus');
    if (e.target.value === '0,0 %') {
      e.target.value = '';
    }
  }

  function blurChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length < 3) e.target.value = '0,0 %';
    if (value.match(/(,)\s/)) {
      e.target.value = value.replace(/(,)\s/, ' ');
    }
  }

  // console.log(watch('refDolar'));

  return (
    <ToolArea>
      {errors.refDolar && <p>{errors.refDolar.message}</p>}
      {errors.refTaxa && <p>{errors.refTaxa.message}</p>}
      {errors.payment && <p>{errors.payment.message}</p>}
      <form onSubmit={handleSubmit(handleDolar)}>
        <InputArea>
          <h5>Dólar</h5>
          <input
            autoFocus
            {...register('refDolar', {
              required: true,
            })}
            // ref={refDolar}
            defaultValue={'$ 0,00'}
            type="text"
            id="dolar"
            onChange={(e) => maskDollar(e)}
            aria-invalid={errors.refDolar ? 'true' : 'false'}
          />
          {errors.refDolar?.type === 'required' && (
            <p role="alert" style={{ color: 'red' }}>
              Informe o valor acima!
            </p>
          )}
        </InputArea>
        <InputArea>
          <h5>Taxa do Estado</h5>
          <input
            {...register('refTaxa', { required: true })}
            // ref={refTaxa}
            type="text"
            id="tax"
            defaultValue={'0,0 %'}
            onChange={maskTax}
            aria-invalid={errors.refTaxa ? 'true' : 'false'}
            onFocus={focusChange}
            onBlur={blurChange}
          />
          {errors.refTaxa?.type === 'required' && (
            <p role="alert" style={{ color: 'red' }}>
              Informe o valor acima!
            </p>
          )}
        </InputArea>
        <div>
          <div style={{ display: 'flex', gap: '5px' }}>
            <input
              {...register('payment', { required: true })}
              checked
              type="radio"
              name="payment"
              id="money"
              value="1"
              style={{ accentColor: 'green' }}
            />
            <label htmlFor="money">
              <h5>Dinheiro</h5>
            </label>
            <input
              {...register('payment', { required: true })}
              type="radio"
              name="payment"
              id="card"
              value="2"
              style={{ accentColor: 'green' }}
            />
            <label htmlFor="card">
              <h5>Cartão</h5>
            </label>
          </div>
        </div>
        <ButtonConvert type="submit" enabled />
      </form>
    </ToolArea>
  );
}
