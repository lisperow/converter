export default store => {
  store.on('@init', () => ({ currencies: [] }))

  store.on('currencies/add', ({ currencies }, currencies) => {
    return { currencies: currencies.concat([currencies]) }
  })
}
