"use client"

import { useContext } from "react";
import {SearchBarWrapper,SearchBarContext } from ".";
import Image from "next/image";
import { SearchButton } from "./SearchButton";

export const Model = () => {
    const context = useContext(SearchBarContext);
    if (!context) {
      throw new Error("Model must be used within a SearchBarProvider");
    }
  
    const { model, setModel } = context;
  
    return (
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan..."
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
    );
};
  