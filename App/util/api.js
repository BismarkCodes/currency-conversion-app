import { format } from "date-fns";
import { RATES } from "./conversionRates";

export const api = (_path = "") => {
  // getting specific path from url
  const [path] = _path.split("?");
  if (path.length === 0) {
    return Promise.reject(new Error("Path required"));
  }
  if (path !== "/latest") {
    return Promise.reject(new Error("Invalid path specified"));
  }

  // getting value or parameter from url
  const baseCurrency = _path.split("base=")[1]; // i.e ['/latest?base=', USD]

  //   adding delay to api response
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
    }, 800);
  });
};
