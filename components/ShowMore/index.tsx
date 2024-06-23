"use client";

import { useRouter } from "next/navigation";

import { updateFilterSearchParams } from "@/utils";
import { CustomButton } from "../CustomButton";
import { useCallback } from "react";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = useCallback(() => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateFilterSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
  }, [pageNumber, router]);

  
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;