interface calcValuesProps {
  amountToBuy: number;
  stateTax: number;
  paymentType: string;
  currencyQuote: number;
}

const PAY_WITH_MONEY = 'moneyPay';
const PAY_WITH_CARD = 'cardPay';

export function calcValueToBuyCurrency({
  amountToBuy,
  stateTax,
  paymentType = PAY_WITH_MONEY,
  currencyQuote,
}: calcValuesProps) {
  const iofMoney = 1.1;
  const iofCard = 6.4;
  switch (paymentType) {
    case PAY_WITH_MONEY:
      return (amountToBuy + stateTax) * (currencyQuote + iofMoney);
    case PAY_WITH_CARD:
      return (amountToBuy + stateTax + iofCard) * currencyQuote;
    default:
      throw new Error('Invalid payment method!');
  }
}
