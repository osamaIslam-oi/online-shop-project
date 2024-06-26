import { ButtonHTMLAttributes, ReactNode } from "react";

interface iProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
  width?: "w-full" | "w-fit";
}

const Button = ({
  children,
  className,
  width = "w-full",
  ...props
}: iProps) => {
  return (
    <button
      className={`${className} ${width}  " text-white rounded-md p-2.5"`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
