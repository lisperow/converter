import routes from '../routes';

const data = fetch(routes.ratesUrl())
  .then(response => response.json());

export default store => {
  store.on('@init', () => {
    return { currencies: [data] };
  });
}
