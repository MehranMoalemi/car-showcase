
 interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    children?: ReactNode;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }