"use client"
import { useContext } from 'react'
import { SearchButton } from './SearchButton';
import { SearchManufacturer } from './SearchManufacturer';

export const Manufacturer = () => {
    return (
      <div className="searchbar__item">
        <SearchManufacturer />
        <SearchButton otherClasses="sm:hidden" />
      </div>
    );
  };

  
