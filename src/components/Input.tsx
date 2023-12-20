import React, { DetailedHTMLProps, createRef, forwardRef } from "react";
import classNames from "classnames";
// import { InputProp, inputRef } from "../../lib/types";


export type InputProp =
    Omit<DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "size">
    & {
    label?: string,
    rightIcon?: React.ReactElement,
    id?: string,
    disabled?: boolean,
    error?: string,
    textDark?: boolean,
    bordered?: boolean,
    addon?: React.ReactNode,
    size?: "xs" | "sm" | "md";
}
export type inputRef = typeof createRef<HTMLInputElement>;
const Input = forwardRef<inputRef, InputProp>(
    (
        {
            label,
            rightIcon,
            id,
            error,
            disabled,
            textDark = false,
            bordered = false,
            addon,
            size = "md",
            ...props
        }: InputProp,
        ref
    ) => {
        return (
            <div className="flex flex-col mb-1">
                {!!label && (
                    <label htmlFor={id} className={classNames("mb-1 font-medium", {
                        "text-sm": size === "md",
                        "!text-sm": size === "sm",
                        "text-xs": size === "xs",
                    })}>
                        {label}
                    </label>
                )}
                <div className="relative">
                    <input
                        className={classNames(
                            "px-4 py-1.5 rounded-md w-full transition duration-300 placeholder:text-xs",
                            { "pr-12": !!rightIcon },
                            { "opacity-60 pointer-events-none": disabled },
                            {
                                "bg-transparent border border-gray-200 focus:border-primary-200 hover:border-primary-200":
                  bordered,
                            },
                            {
                                "bg-gray-100 focus:ring-2 ring-offset-2 ring-primary-800 ring-opacity-30":
                  !bordered,
                            },
                            { "text-black": textDark },
                            {
                                "py-3 ": size === "md",
                                "!py-2": size === "sm",
                                "py-1.5 ": size === "xs",
                            }
                        )}
                        id={id}
                        {...props}
                        ref={ref as any}
                    />
                    {!!rightIcon && (
                        <div className="absolute top-1/2 -translate-y-1/2 right-2 w-8 h-8 rounded-md flex items-center justify-center">
                            {rightIcon}
                        </div>
                    )}
                </div>
                <div className="flex w-full justify-between mt-1">
                    {!!error && (
                        <div className="text-sm flex-1 text-red-500 float-left">{error}</div>
                    )}
                    {!!addon && <div className="text-sm flex-1 flex justify-end float-right">{addon}</div>}
                </div>
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
