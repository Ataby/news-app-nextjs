import { createContext, useState } from 'react';

// Context oluşturma
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [fromWhere, setFromWhere] = useState("");
  const [category, setCategoryy] = useState("general");
  const [language, setLanguage] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);


  return (
    <MyContext.Provider value={{ fromWhere, setFromWhere,category, setCategoryy,language, setLanguage ,isModalOpen, setIsModalOpen,selectedBox, setSelectedBox }}>
      {children}
    </MyContext.Provider>
  );
};
