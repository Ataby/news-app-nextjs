"use client";

import Index from "./pages/index";
import { MyProvider } from "./context/FilterContext";
import "./styles/globals.scss";

export default function Home() {
  return (
    <MyProvider>
      
      <Index/>
    
    </MyProvider>
  );
}
