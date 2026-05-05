fetch("https://open.er-api.com/v6/latest/USD")
  .then(res => res.json())
  .then(data => {
    console.log("USD to INR:", data.rates.INR);
    console.log("USD to EUR:", data.rates.EUR);
    console.log("USD to GBP:", data.rates.GBP);
  })
  .catch(err => console.error(err));

//Print value Greater than 90
fetch("https://open.er-api.com/v6/latest/USD")
  .then(res => res.json())
  .then(data => {
    let result = Object.entries(data.rates)
      .filter(([currency, value]) => value > 90);

    console.log(result);
  })
  .catch(err => console.error(err));