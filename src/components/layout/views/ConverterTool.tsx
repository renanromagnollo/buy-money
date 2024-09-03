//TODO: Colocar localstorage para o input selecionado
//TODO: ativar botão converter somente se os dados estiverem apresentados
//FIXME: dollar onfocus - se clicar no campo e o valor estiver 1,50 por ex, ele está apagando os centavos por inteiro e não somente o zero.

// import { useRef } from 'react';
import { ButtonConvert } from '../../buttons/ButtonConvert';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  maskDollarQuery,
  maskDollarOnChangeInput,
  maskTaxQuery,
  maskTaxOnChangeInput,
  maskDollarOnFocusInput,
  maskDollarOnBlurInput,
  maskTaxOnBlurInput,
} from '../../../utils/masks';

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
    setValue,
    setError,
    formState: { errors },
  } = useForm<Inputs>();
  console.log('componente renderizou');

  const navigate = useNavigate();

  const handleDollar: SubmitHandler<Inputs> = (data) => {
    if (data.refDolar === '$ 0,00') {
      setError('refDolar', {
        type: 'manual',
        message: 'Preencha com um valor válido!',
      });
    }
    if (data.refTaxa === '0,0 %') {
      setError('refTaxa', {
        type: 'manual',
        message: 'Preencha com um valor válido!',
      });
    }

    if (data.refDolar !== '$ 0,00' && data.refTaxa !== '0,0 %') {
      const dollar = maskDollarQuery(data.refDolar);
      const tax = maskTaxQuery(data.refTaxa);
      const payment = data.payment;
      navigate(`/result?d=${dollar}&t=${tax}&p=${payment}`);
    }
  };

  function onChangeDollarInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = maskDollarOnChangeInput(e);
    if (value) setValue('refDolar', value);
  }

  function onFocusDollarInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = maskDollarOnFocusInput(e);
    setValue('refDolar', value!);
    e.target.setSelectionRange(e.target.value.length, e.target.value.length);
  }

  function onBlurDollarInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = maskDollarOnBlurInput(e);
    if (value) setValue('refDolar', value);
  }

  function onChangeTaxInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = maskTaxOnChangeInput(e);
    if (value) setValue('refTaxa', value);

    e.target.setSelectionRange(value.length - 2, value.length - 2);
  }

  function onFocusTaxInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('onfocus');
    if (e.target.value === '0,0 %') {
      setValue('refTaxa', '');
    }
  }

  function onBlurTaxInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = maskTaxOnBlurInput(e);
    if (value) setValue('refTaxa', value);
  }

  return (
    <ToolArea>
      {/* {errors.refDolar && <p>{errors.refDolar.message}</p>}
      {errors.refTaxa && <p>{errors.refTaxa.message}</p>}
      {errors.payment && <p>{errors.payment.message}</p>} */}
      <form onSubmit={handleSubmit(handleDollar)}>
        <InputArea>
          <h5>Dólar</h5>
          <input
            {...register('refDolar', {
              required: true,
            })}
            defaultValue={'$ 0,00'}
            type="text"
            id="dolar"
            onChange={onChangeDollarInput}
            aria-invalid={errors.refDolar ? 'true' : 'false'}
            onFocus={onFocusDollarInput}
            onBlur={onBlurDollarInput}
          />
          {/* {errors.refDolar?.type === 'required' && (
            <p role="alert" style={{ color: 'red' }}>
              Informe o valor acima!
            </p>
          )} */}
          {errors.refDolar && (
            <p role="alert" style={{ color: 'red' }}>
              {errors.refDolar.message}
            </p>
          )}
        </InputArea>
        <InputArea>
          <h5>Taxa do Estado</h5>
          <input
            {...register('refTaxa', { required: true })}
            type="text"
            id="tax"
            defaultValue={'0,0 %'}
            onChange={onChangeTaxInput}
            aria-invalid={errors.refTaxa ? 'true' : 'false'}
            onFocus={onFocusTaxInput}
            onBlur={onBlurTaxInput}
          />
          {errors.refTaxa && (
            <p role="alert" style={{ color: 'red' }}>
              {errors.refTaxa.message}
            </p>
          )}
          {/* {errors.refTaxa?.type === 'required' && (
            <p role="alert" style={{ color: 'red' }}>
              Informe o valor acima!
            </p>
          )} */}
          {/* {errors.refTaxa?.type === 'required' && (
            <p role="alert" style={{ color: 'red' }}>
              Informe o valor acima!
            </p>
          )} */}
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
