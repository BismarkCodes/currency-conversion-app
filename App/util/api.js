import { format } from "date-fns";
import { RATES } from "./conversionRates";

// creating custom api
export const api = (_path = "") => {
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
