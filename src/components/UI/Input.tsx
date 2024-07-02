import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: IProps) => {
  return (
    <input
      className="border-[1px] border-gray-500 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-md px-3 py-3 text-emerald-800"
      {...props}
    />
  );
};

export default Input;
