'use client'
import React, { useState, createContext, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { updateModelSearchParams } from "@/utils";



// Create the context with a default value
export const SearchBarContext = createContext<SearchBarContextType | undefined>(undefined);

export const SearchBarWrapper  = ({ children }: { children: React.ReactNode }) => {
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    updateModelSearchParams(model.toLowerCase(), manufacturer.toLowerCase(), router);
  }, [manufacturer, model, router]);
  
  // Memoize the context values
  const contextValue = useMemo(() => ({
    manufacturer,
    setManuFacturer,
    model,
    setModel,
  }), [manufacturer, model]);


  return (
    <SearchBarContext.Provider value={contextValue}>
      <form className="searchbar" onSubmit={handleSearch}>
        {children}
      </form>
    </SearchBarContext.Provider>
  );
};



