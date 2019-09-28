import React from 'react';
import useStoreon from 'storeon/react';

const CurrenciesList = () => {
  const { currencies } = useStoreon('currencies');
  return <div>
    {currencies.map(({ rates }) => <p>{rates}</p>)}
  </div>
};

export default CurrenciesList;
