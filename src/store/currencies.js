export default store => {
  store.on('@init', () => ({ currencies: [] }))

  store.on('currencies/add', ({ currencies }, currencie) => {
    return { currencies: currencies.concat([currencie]) }
  })
}
