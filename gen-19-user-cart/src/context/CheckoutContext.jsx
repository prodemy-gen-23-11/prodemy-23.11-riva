import { createContext, useState } from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [dataCheckout, setDataCheckout] = useState({});

  return (
    <CheckoutContext.Provider value={{ dataCheckout, setDataCheckout }}>
      {children}
    </CheckoutContext.Provider>
  );
};
