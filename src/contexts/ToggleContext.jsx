import { createContext, useContext, useState } from 'react';

const toggleContext = createContext({});

export const ToggleContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <toggleContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </toggleContext.Provider>
  );
};

export const useToggle = () => useContext(toggleContext);
