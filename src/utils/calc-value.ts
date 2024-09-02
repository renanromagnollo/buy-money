interface calcValuesProps {
  dollarNumber: number;
  stateTax: number;
  paymentType: '1' | '2';
  dollarPrice: number;
}

export function calcValues({
  dollarNumber,
  stateTax,
  paymentType = '1',
  dollarPrice,
}: calcValuesProps) {
  const iofMoney = 1.1;
  const iofCard = 6.4;
  switch (paymentType) {
    case '1':
      return (dollarNumber + stateTax) * (dollarPrice + iofMoney);
    case '2':
      return (dollarNumber + stateTax + iofCard) * dollarPrice;
    default:
      throw new Error('Invalid payment method!');
  }
}
