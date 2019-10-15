import routes from '../routes';

export default store => {
  store.on('@init', () => {
    const response = fetch(routes.ratesUrl);
    return { currencies: [response] };
  });
}
