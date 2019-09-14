const host = 'https://openexchangerates.org/api/latest.json?app_id=';

export default {
    ratesUrl: () => [host, process.env.API_KEY].join(''),
}
