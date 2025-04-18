import { createContext, useContext, useState } from 'react';

const loanContext = createContext({});

export const LoanContextProvider = ({ children }) => {
  const [loanRequstData, setLoanRequstData] = useState([]);

  return (
    <loanContext.Provider value={{ loanRequstData, setLoanRequstData }}>
      {children}
    </loanContext.Provider>
  );
};

export const useLoanData = () => useContext(loanContext);
