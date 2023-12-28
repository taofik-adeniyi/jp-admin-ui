import React, { DetailedHTMLProps, createRef, forwardRef } from "react";
import { inputRef } from "./Input";

type Props = {
  error: string;
  label: string;
  placeholder: string;
  type: string;
};
type InputProp = Omit<
  DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size"
> & {
  label?: string;
  rightIcon?: React.ReactElement;
  id?: string;
  disabled?: boolean;
  error?: string;
  textDark?: boolean;
  bordered?: boolean;
  addon?: React.ReactNode;
  size?: "xs" | "sm" | "md";
};

const JPInput = forwardRef<inputRef, Props>(
  (
    {
      label,
      rightIcon,
      id,
      error,
      disabled,
      type,
      textDark = false,
      bordered = false,
      addon,
      size = "md",
      ...props
    }: InputProp,
    ref
  ) => {
    return (
      <div className="w-full flex flex-col items-start mb-2">
        <label className="text-sm mb-1 font-medium">{label}</label>
    
        {type == "text" && (
    <input
    className="w-full rounded-md outline-none p-4 bg-transparent border border-primary-100 focus:border-primary-100 hover:border-primary-100"
    {...props}
    ref={ref as any}
  />
        )}
                {type == "password" && (
    <input
    className="w-full rounded-md outline-none p-4 bg-transparent border border-primary-100 focus:border-primary-100 hover:border-primary-100"
    {...props}
    ref={ref as any}
  />
        )}
        {type == "textarea" && (
          <textarea 
          {...props}
          ref={ref as any}
          className="resize-y w-full rounded-md min-h-[139px] outline-none p-4 bg-transparent border border-primary-100 focus:border-primary-100 hover:border-primary-100"></textarea>
        )}
        <div className="flex w-full justify-between mt-1">
          <p className="text-red-700 capitalize p-0 m-0">{error}</p>
        </div>
      </div>
    );
  }
);

export default JPInput;
