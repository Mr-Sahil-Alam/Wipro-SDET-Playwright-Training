// marketstack.js
require('dotenv').config();

const API_KEY = process.env.API_KEY;

const url = `http://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=AAPL,MSFT`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    if (data.error) {
      console.error("API Error:", data.error);
      return;
    }

    // data.data is the array of stock records
    let result = data.data
      .filter(s => s.close !== null) // valid prices only
      .map(s => ({
        symbol: s.symbol,
        price: s.close,
        date: s.date
      }));

    console.log(result);
  })
  .catch(err => console.error("Fetch Error:", err));