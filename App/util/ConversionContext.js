import React, { createContext, useState } from "react";
import { api } from "./api";

export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
  const [BaseCurrency, _setBaseCurrency] = useState("USD");
  const [QuoteCurrency, setQuoteCurrency] = useState("GBP");
  const [date, setDate] = useState();
  const [rates, setRates] = useState({});
  const setBaseCurrency = (currency) => {
    // getting rates from api
    return api(`/latest?base=${currency}`)
      .then((response) => {
        _setBaseCurrency(currency);
        setDate(response.date);
        setRates(response.rates);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const swapCurrencies = () => {
    setBaseCurrency(QuoteCurrency);
    setQuoteCurrency(BaseCurrency);
  };
  const contextValue = {
    BaseCurrency,
    QuoteCurrency,
    swapCurrencies,
    setBaseCurrency,
    setQuoteCurrency,
    date,
    rates,
  };
  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
