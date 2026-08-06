"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Currency = "AED" | "USD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (amountInUSD: number) => string;
  convertPrice: (amountInUSD: number) => { amount: number; symbol: string; code: Currency };
}

const AED_PER_USD = 3.67;

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "AED",
  setCurrency: () => {},
  formatPrice: (amount) => `AED ${(amount * AED_PER_USD).toFixed(0)}`,
  convertPrice: (amount) => ({
    amount: Math.round(amount * AED_PER_USD),
    symbol: "AED ",
    code: "AED",
  }),
});

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>("AED");

  useEffect(() => {
    const saved = localStorage.getItem("sk_currency") as Currency;
    if (saved === "AED" || saved === "USD") {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("sk_currency", c);
  };

  const convertPrice = (amountInUSD: number) => {
    if (currency === "USD") {
      return { amount: Math.round(amountInUSD), symbol: "$", code: "USD" as Currency };
    }
    return { amount: Math.round(amountInUSD * AED_PER_USD), symbol: "AED ", code: "AED" as Currency };
  };

  const formatPrice = (amountInUSD: number) => {
    const { amount, symbol } = convertPrice(amountInUSD);
    if (currency === "USD") {
      return `${symbol}${amount.toLocaleString()}`;
    }
    return `${symbol}${amount.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
