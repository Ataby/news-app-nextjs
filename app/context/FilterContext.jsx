import { createContext, useState } from 'react';

// Context oluşturma
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [fromWhere, setFromWhere] = useState("");
  const [category, setCategoryy] = useState("general");
  const [language, setLanguage] = useState("")


  return (
    <MyContext.Provider value={{ fromWhere, setFromWhere,category, setCategoryy,language, setLanguage  }}>
      {children}
    </MyContext.Provider>
  );
};
