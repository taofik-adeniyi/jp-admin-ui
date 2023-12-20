import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import classNames from "classnames";
import Loader from "./Loader";
import { sizeType } from "@/lib/types";

const classes = {
    accent: {
        filled:
      "bg-green-600 hover:bg-green-400 text-slate-100 focus:ring-4 focus:ring-green-600 focus:ring-opacity-20",
        outlined:
      "border border-green-600 dark:border-slate-200 text-green-600 dark:text-slate-200 hover:bg-green-600 hover:text-white focus:ring-4 focus:ring-green-600 focus:ring-opacity-20",
        subtle:
      "bg-green-600 bg-opacity-10 text-green-600 hover:bg-opacity-20",
        text: "bg-green-600 bg-opacity-0 text-green-600 hover:bg-opacity-10",
        loader: {
            filled: "text-white",
            outlined: "text-green-600",
            text: "text-green-600",
            subtle: "text-green-600",
        },
    },
    primary: {
        filled:
      "bg-primary-600 hover:bg-primary-500 text-slate-100 focus:ring-4 focus:ring-primary-600 focus:ring-opacity-20",
        outlined:
      "border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-4 focus:ring-primary-600 focus:ring-opacity-20",
        subtle:
      "bg-primary-600 bg-opacity-10 text-primary-600 hover:bg-opacity-20",
        text: "bg-primary-600 bg-opacity-0 text-primary-600 hover:bg-opacity-10",
        loader: {
            filled: "text-white",
            outlined: "text-primary-600",
            text: "text-primary-600",
            subtle: "text-primary-600",
        },
    },
    white: {
        filled:
      "bg-slate-100 hover:bg-slate-200 text-gray-800 focus:ring-4 focus:ring-slate-100 focus:ring-opacity-20",
        outlined:
      "border border-slate-100 text-slate-100 hover:bg-slate-200 hover:text-gray-800 focus:ring-4 focus:ring-slate-100 focus:ring-opacity-20",
        subtle: "bg-slate-100 bg-opacity-10 text-slate-100 hover:bg-opacity-20",
        text: "bg-slate-100 bg-opacity-0 text-slate-100 hover:bg-opacity-10",
        loader: {
            filled: "text-gray-800",
            outlined: "text-slate-100",
            text: "text-slate-100",
            subtle: "text-slate-100",
        },
    },
    black: {
        filled:
      "bg-gray-800 hover:bg-gray-900 text-white focus:ring-4 focus:ring-gray-200",
        outlined:
      "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200",
        subtle: "bg-gray-600 bg-opacity-10 text-gray-800 hover:bg-opacity-20",
        text: "bg-gray-600 bg-opacity-0 text-gray-800 hover:bg-opacity-10",
        loader: {
            filled: "text-white",
            outlined: "text-gray-600",
            text: "text-gray-600",
            subtle: "text-gray-600",
        },
    },
    danger: {
        filled:
      "bg-red-600 hover:bg-red-500 text-slate-100 focus:ring-4 focus:ring-red-600 focus:ring-opacity-20",
        outlined:
      "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-4 focus:ring-red-600 focus:ring-opacity-20",
        subtle:
      "bg-red-600 bg-opacity-10 text-red-600 hover:bg-opacity-20",
        text: "bg-red-600 bg-opacity-0 text-red-600 hover:bg-opacity-10",
        loader: {
            filled: "text-white",
            outlined: "text-red-600",
            text: "text-red-600",
            subtle: "text-red-600",
        },
    },
    green: {
        filled:
      "bg-green-600 hover:bg-green-500 text-slate-100 focus:ring-4 focus:ring-green-600 focus:ring-opacity-20",
        outlined:
      "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-4 focus:ring-green-600 focus:ring-opacity-20",
        subtle:
      "bg-green-600 bg-opacity-10 text-green-600 hover:bg-opacity-20",
        text: "bg-green-600 bg-opacity-0 text-green-600 hover:bg-opacity-10",
        loader: {
            filled: "text-white",
            outlined: "text-green-600",
            text: "text-green-600",
            subtle: "text-green-600",
        },
    },
    yellow: {
        filled:
    "bg-green-600 hover:bg-green-500 text-slate-100 focus:ring-4 focus:ring-green-600 focus:ring-opacity-20",
        outlined:
    "border border-yellow-600 text-yellow-600 hover:text-yellow-600 focus:ring-4 focus:ring-yellow-600 focus:ring-opacity-20",
        subtle:
    "bg-green-600 bg-opacity-10 text-green-600 hover:bg-opacity-20",
        text: "bg-green-600 bg-opacity-0 text-green-600 hover:bg-opacity-10",
        loader: {
            filled: "text-white",
            outlined: "text-green-600",
            text: "text-green-600",
            subtle: "text-green-600",
        },
    },
};
export type BtnClassType = typeof classes;

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: keyof BtnClassType;
  variant?: keyof BtnClassType[keyof BtnClassType];
  disabled?: boolean;
  loading?: boolean;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  block?: boolean;
  center?: boolean;
  size?: sizeType;
  className?: string;
  btnRef?:any;
  rmSpacer?:boolean
};

export const Button
 = ({
     variant = "filled",
     color = "primary",
     size = "md",
     disabled = false,
     loading = false,
     rightIcon,
     leftIcon,
     block = false,
     onClick,
     className,
     children,
     center=false,
     rmSpacer,
     btnRef,
     ...rest
 }: ButtonProps) => {
     const _className = classNames(
         {
             "px-2 py-[2px] text-[.88rem]": size === "xs",
             "px-3 py-1 text-[.94rem]": size === "sm",
             "px-4 py-2": size === "md",
             "px-6 py-4": size === "lg",
             "opacity-50 pointer-events-none cursor-not-allowed": disabled,
             "opacity-80 pointer-events-none cursor-default": loading,
             "flex w-full": block,
             "text-center w-full items-center justify-center": center,
         },
         classes[color][variant],
         "font-medium rounded-md transition duration-100 inline-flex items-center whitespace-nowrap",
         className
     );

     return (
         <button
             ref={btnRef}
             onClick={onClick}
             className={_className}
             disabled={disabled || loading}
             {...rest}
         >
             {loading ? (
                 <span className="mx-auto text-3xl my-auto">
                     <Loader
                         className={classNames(
                             classes[color].loader[
                variant as keyof BtnClassType[keyof BtnClassType]["loader"]
                             ]
                         )}
                     />
                 </span>
             ) : (
                 <>
                     {!!leftIcon && (
                         <>
                             <span className="mr-4">{leftIcon}</span>
                             {rmSpacer ? null : <span className="flex-1" />}
                         </>
                     )}
                     <span>{children}</span>
                     {!!rightIcon && (
                         <>
                             {rmSpacer ? null : <span className="flex-1" />}
                             <span className="ml-4">{rightIcon}</span>
                         </>
                     )}
                 </>
             )}
         </button>
     );
 };

export default Button;
