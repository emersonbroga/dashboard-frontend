export const bitcoinProcessor = data => {
  return [
    { key: 'Coinbase', label: 'Coinbase', value: data.usd },
    { key: 'BitcoinTrade', label: 'BitcoinTrade', value: data.brl },
  ];
};
export const currencyProcessor = data => {
  return [
    { key: 'USD', label: 'USD', value: data.usd },
    { key: 'EUR', label: 'EUR', value: data.eur },
  ];
};

export const bovespaProcessor = data => {
  return data.map(item => {
    const { code, price } = item;
    return { key: code, label: code, value: price };
  });
};

export const trendsProcessor = data => {
  return data.map(item => {
    const { name, volume } = item;
    return { key: name, label: name, value: volume };
  });
};

export const googleTrendsProcessor = data => trendsProcessor(data);

export const twitterProcessor = data => trendsProcessor(data);
