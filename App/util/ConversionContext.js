import React, { createContext, useState } from "react";

export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
  const [BaseCurrency, setBaseCurrency] = useState("USD");
  const [QuoteCurrency, setQuoteCurrency] = useState("GBP");
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
  };
  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
