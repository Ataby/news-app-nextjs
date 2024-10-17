"use client";

import Index from "./pages/index";
import { MyProvider } from "./context/FilterContext";

export default function Home() {
  return (
    <MyProvider>
      
      <Index/>
    
    </MyProvider>
  );
}
