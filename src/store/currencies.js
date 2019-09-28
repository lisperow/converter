import axios from 'axios';
import routes from '../routes';

export default store => {
  store.on('@init', () => {
    const curr = axios.get(routes.ratesUrl())
      .then(response => response.data)
      .catch(e => console.log(e));
    return { currencies: curr };
  });

  store.on('currencies/save', ({ currencies }, currencie) => {
    return { currencies: currencies.concat([currencie]) }
  });
}
