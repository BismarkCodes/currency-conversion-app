import React, { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import { api } from "./api";

export const ConversionContext = createContext();

const BASE_CURRENCY = "USD";
const QUOTE_CURRENCY = "GBP";
export const ConversionContextProvider = ({ children }) => {
  const [BaseCurrency, _setBaseCurrency] = useState(BASE_CURRENCY);
  const [QuoteCurrency, setQuoteCurrency] = useState(QUOTE_CURRENCY);
  const [date, setDate] = useState();
  const [rates, setRates] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const setBaseCurrency = (currency) => {
    setisLoading(true);
    // getting rates from api
    return api(`/latest?base=${currency}`)
      .then((response) => {
        _setBaseCurrency(currency);
        setDate(response.date);
        setRates(response.rates);
      })
      .catch((e) => {
        console.log(e);
        Alert.alert("Sorry, something's not right.", e.message);
      })
      .finally(() => {
        setisLoading(false);
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
    isLoading,
  };

  useEffect(() => {
    setBaseCurrency(BASE_CURRENCY);
  }, []);
  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
