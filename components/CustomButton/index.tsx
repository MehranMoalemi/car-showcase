"use client";

import { classCombiner } from "@/utils";
import Image from "next/image";

export const CustomButton = ({ isDisabled, btnType, containerStyles, textStyles, title, children , handleClick }: CustomButtonProps) => {
    const buttonCombinedClassNames = classCombiner(['custom-btn', containerStyles])
    const textCombinedClassNames = classCombiner(['flex-1', textStyles])
    return (

        <button
            disabled={isDisabled}
            type={btnType || "button"}
            className={buttonCombinedClassNames}
            onClick={handleClick}
        >
            <span className={textCombinedClassNames}>{title}</span>
            {/* {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="arrow_left"
                        fill
                        className="object-contain"
                    />
                </div>
            )} */}
            {children}
        </button>
    )
}

