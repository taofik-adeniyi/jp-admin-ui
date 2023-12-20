"use client"
import { ReactNode } from "react";
import ReactSelect, { Props as ReactSelectProps } from "react-select";
import ReactSelectAsync from "react-select/async";
import ReactSelectCreatable from "react-select/creatable";
import classNames from "classnames";

type SelectProps = ReactSelectProps & {
  isCreateTable?: boolean;
  label?: string;
  infoElement?: string;
  addon?: string | ReactNode;
  error?: string;
  isAsync?: boolean;
  bordered?: boolean;
  size?: "xs" | "sm" | "md";
};

export const Select = ({
    label,
    error,
    isCreateTable,
    isDisabled,
    placeholder,
    infoElement,
    isAsync,
    bordered,
    size = "md",
    ...props
}: SelectProps) => {
    let SelectComponent = ReactSelect;

    if (isAsync) {
        SelectComponent = ReactSelectAsync;
    } else if (isCreateTable) {
        SelectComponent = ReactSelectCreatable;
    }

    return (
        <label
            className={classNames("block mb-2", {
                "pointer-events-none opacity-60": isDisabled,
            })}
        >
            {label && (
                <span
                    className={classNames("mb-2 block font-medium", {
                        "text-base": size === "md",
                        "text-sm": size === "sm",
                        "text-xs": size === "xs",
                    })}
                >
                    {label}
                </span>
            )}
            <SelectComponent
                {...props}
                isDisabled={isDisabled}
                placeholder={placeholder ?? "Select Option"}
                className={classNames(
                    "rounded-md w-full transition duration-300 placeholder:text-xs border",
                    {
                        "bg-transparent border border-gray-200 focus:border-primary-200 hover:border-primary-200":
              bordered,
                    },
                    {
                        "bg-gray-100 focus:ring-2 ring-offset-2 ring-primary-800 ring-opacity-30":
              !bordered,
                    }
                )}
                styles={{
                    control: (baseStyles: any) => ({
                        ...baseStyles,
                        border: 0,
                        background: "transparent",
                        paddingInline: 2,
                        paddingTop: 0,
                        paddingBottom: 0,
                        fontSize: size === "sm" ? "14px" : size === "xs" ? "12px" : "16px",
                        minHeight: size === "sm" ? "15px" : size === "xs" ? "10px" : "38px",
                    }),
                    placeholder: (baseStyles: any) => ({
                        ...baseStyles,
                        fontSize: "12px",
                    }),
                    indicatorSeparator: () => ({
                        width: 0,
                        height: 0,
                    }),
                    menuList: (baseStyles: any) => ({
                        ...baseStyles,
                        fontSize: size === "sm" ? "14px" : size === "xs" ? "10px" : "16px",
                    }),
                    indicatorsContainer: (baseStyles: any) => ({
                        ...baseStyles,
                        fontSize: size === "sm" ? "14px" : size === "xs" ? "12px" : "16px",
                        padding: size === "sm" ? "2px" : size === "xs" ? "1px" : "4px",
                    }),
                }}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary: "#0A0115",
                    },
                })}
            />
            {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
            {infoElement && <div>{infoElement}</div>}
        </label>
    );
};
