const exchangeRates = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.75,
  JPY: 110.50,
};

function convertCurrency(amountInUSD, targetCurrency) {
  let convertedAmount;

  switch (targetCurrency.toUpperCase()) {
    case "USD":
      convertedAmount = amountInUSD * exchangeRates.USD;
      break;
    case "EUR":
      convertedAmount = amountInUSD * exchangeRates.EUR;
      break;
    case "GBP":
      convertedAmount = amountInUSD * exchangeRates.GBP;
      break;
    case "JPY":
      convertedAmount = amountInUSD * exchangeRates.JPY;
      break;
    default:
      return "Currency not supported!";
  }

  return `${convertedAmount.toFixed(2)} ${targetCurrency.toUpperCase()}`;
}

console.log(convertCurrency(100, "EUR")); 
console.log(convertCurrency(250, "JPY")); 
console.log(convertCurrency(50, "GBP"));  
console.log(convertCurrency(10, "USD"));  
console.log(convertCurrency(100, "AUD")); 
