"use client"
import React, { forwardRef, useCallback } from "react";
import classNames from "classnames";
import { useDropzone } from "react-dropzone";
import { InputProp, inputRef } from "./Input";

type FileInputProp = {
  id?: string;
  error?: string;
  maxSize?: string | any;
  value?: (string | File)[];
  // eslint-disable-next-line no-unused-vars
  onChange?: (file: (string | File)[]) => void;
} & Omit<InputProp, "value">;

const accept = {
    "image/*": [".png", ".jpeg", ".jpg"],
};

const FileInput = forwardRef<inputRef, FileInputProp>(
    (
        {
            label,
            error,
            disabled,
            onChange,
            value = [],
            multiple = false,
            maxSize = Infinity,
        },
        ref
    ) => {
        const onDrop = useCallback(
            (files:any) => {
                if (multiple) onChange?.([...value, ...files]);
                else onChange?.(files[0]);
            },
            [multiple, onChange, value]
        );
        const { getRootProps, getInputProps, isDragActive, fileRejections } =
      useDropzone({ onDrop, accept, noClick: true, multiple, maxSize });

        return (
            <div className="flex flex-col">
                <div className="relative flex flex-col">
                    <div className="text-black text-sm">{label}</div>
                    <label
                        className={classNames(
                            "bg-primary-50 bg-opacity-5 mt-2 hover:bg-opacity-10 cursor-pointer border-2 border-dashed border-gray-300 px-4 py-6 rounded-md w-full focus:ring-2 ring-offset-2 ring-primary-800 ring-opacity-30 transition duration-300",
                            { "opacity-60 pointer-events-none": disabled },
                            { "border-primary-200 bg-opacity-10": isDragActive },
                            "flex justify-center items-center"
                        )}
                        {...getRootProps()}
                    >
                        <div className="text-sm text-center opacity-70">
                            {isDragActive
                                ? "Drop file here to add"
                                : "Drag & drop a file here, or click to add"}
                        </div>
                        <input
                            hidden
                            disabled={disabled}
                            {...getInputProps()}
                            ref={ref as any}
                            accept="image/png, image/jpg, image/jpeg"
                        />
                    </label>
                </div>
                {fileRejections.map((r) => {
                    return r.errors.map((err) => (
                        <div key={err.code} className="text-sm text-red-500 mt-2">
                            {err.message}
                        </div>
                    ));
                })}
                {error && (
                    <p className="mt-2 text-sm text-red-600" id="error-mg-inp">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);
FileInput.displayName = "FileInput";

export { FileInput };
