import { createContext, useState } from 'react';

// Context oluşturma
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [fromWhere, setFromWhere] = useState(null);
  const [category, setCategoryy] = useState("general");
  const [language, setLanguage] = useState("en")


  return (
    <MyContext.Provider value={{ fromWhere, setFromWhere,category, setCategoryy,language, setLanguage  }}>
      {children}
    </MyContext.Provider>
  );
};
