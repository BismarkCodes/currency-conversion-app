import { format } from "date-fns";
import { Alert } from "react-native";
// import { access_key, end_point } from "./utils";
import { RATES } from "./conversionRates";
// const RATES = "";
// const getRates = async () => {
//   try {
//     const response = await fetch(
//       // `http://data.fixer.io/api/${end_point}?access_key=${access_key}&base=USD`
//       "http://data.fixer.io/api/latest?access_key=8fbe5e97b2d5bc10593e7cc1bbee2037"
//     );
//     const json = await response.json();
//     RATES = json.rates;
//     console.log("hello");
//   } catch (error) {
//     console.error(error);
//   }
//   //  finally {
//   //    setLoading(false);
//   //  }
// };

// creating custom api
export const api = (_path = "") => {
  // calling conversion api

  // getting the path from the url
  const [path] = _path.split("?");
  // checking if url exists
  if (_path.length === 0) {
    return Promise.reject(new Error("URL required"));
  }
  // checking if path is correct
  if (path !== "/latest") {
    return Promise.reject(new Error("Invalid url"));
  }
  // get base currency from url
  const baseCurrency = _path.split("base=")[1]; // get the key or basecurrency

  // setting delay on api response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        base: baseCurrency,
        date: format(new Date(), "yyyy-MM-dd"),
        rates: {
          ...RATES,
          [baseCurrency]: 1,
        },
      });
    }, 2500);
  });
};
