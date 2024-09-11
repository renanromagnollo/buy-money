export function maskDollarQuery(data: string) {
  let dollar = data;
  dollar = dollar.replace(/\$\s*(\d+),(\d{2})$/, '$1.$2');

  dollar = dollar.replace(/\.(?=\d{3})/g, '');
  dollar = dollar.replace(/,/g, '.');
  if (dollar.match(/(?<=\.\d)0+$|(?<=\.\d)0$|(?<=\d)\.0+$/)) {
    dollar = dollar.replace(/(?<=\.\d)0+$|(?<=\.\d)0$|(?<=\d)\.0+$/, '');
  }
  dollar = dollar.replace(/^\$\s+/, '');
  return dollar;
}

export function maskDollarOnChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
  let value = e.target.value;
  value = value.replace(/[^0-9,.]/, '');
  value = value.replace(/^0+/, '');
  value = value.replace(/^\s+/, '');
  value = `$ ${value}`;
  return value;
}

export function maskDollarLabel(v: string) {
  let value = v;
  if (value.match(/\.(\d{1})$/)) {
    value = value.replace(/\.(\d{1})$/, ',$10');
  }
  if (value.match(/,(\d{1})$/)) {
    value = value.replace(/,(\d{1})$/, ',$10');
  }
  if (value.match(/(.\d{2})$/)) {
    value = value.replace(/\.(\d{2})$/, ',$1');
  }
  if (value.match(/^(?!.*,\d{2}$)/)) {
    value = value.replace(/(\d)$/, '$1,00');
  }

  value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return value;
}

export function maskDollarOnBlurInput(e: React.ChangeEvent<HTMLInputElement>) {
  let value = e.target.value;
  if (value.length < 3) value = '$ 0,00';
  if (value.match(/\.(\d{1})$/)) {
    value = value.replace(/\.(\d{1})$/, ',$10');
  }
  if (value.match(/,(\d{1})$/)) {
    value = value.replace(/,(\d{1})$/, ',$10');
  }
  if (value.match(/(.\d{2})$/)) {
    value = value.replace(/\.(\d{2})$/, ',$1');
  }
  if (value.match(/^(?!.*,\d{2}$)/)) {
    value = value.replace(/(\d)$/, '$1,00');
  }

  value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return value;
}

export function maskDollarOnFocusInput(e: React.ChangeEvent<HTMLInputElement>) {
  let value = e.target.value;
  if (value === '$ 0,00') {
    return (value = '');
  }
  if (e.target.value.match(/(,\d{2})$/)) {
    value = value.replace(/(,\d{2})$/, '');
    return value;
  }
}

export function maskTaxOnBlurInput(e: React.ChangeEvent<HTMLInputElement>) {
  let value = e.target.value;
  if (value.length < 3) {
    value = '0,0 %';
  }
  if (value.match(/(,)\s/)) {
    value = value.replace(/(,)\s/, ' ');
  }
  return value;
}

export function maskTaxQuery(data: string) {
  let tax = data;
  tax = tax.replace(/(\s%)$/, '');
  if (tax.match(/,/)) {
    tax = tax.replace(/,/, '.');
  }
  return tax;
}

export function maskTaxOnChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
  let value = e.target.value;
  value = value.replace(/[^0-9,.]/g, '');
  value = value.replace(/^0+/, '');
  value = value.replace(/\./, ',');
  if (e.target.value.length > 6) {
    // value = value.replace(/(\d{1})$/, ',$1');
    value = value.slice(1);
  }
  if (e.target.value.length === 6) {
    value = value.replace(/^(\d{1})/, '$1');
  }

  value = `${value} %`;
  return value;
}

export function maskResultFinalValue(data: string) {
  let value = data;
  value = value.replace(/\.(\d{2})\d+$/g, ',$1');
  value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  value = value.replace(/\.(\d{3})$/g, '.$1,00');

  return value;
}
