'use client'
import { classCombiner } from "@/utils";
import Image from "next/image";

export const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  const allClasses = classCombiner(['-ml-3 z-10', otherClasses])
  
 return <button type='submit' className={allClasses}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
};
  
 