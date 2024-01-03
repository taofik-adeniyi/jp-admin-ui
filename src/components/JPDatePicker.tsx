import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  label: string;
  placeholder?: string;
  selectedDate: Date | string;
  onChange: (date: any) => void;
  value: any;
  error: any;
  minDate?: | Date | null
};

const JPDatePicker = (props: Props) => {
  const {
    onChange,
    minDate,
    value,
    error,
    label,
    placeholder = "DD/MM/YYYY",
    selectedDate,
  } = props;
  return (
    <div className="w-full flex flex-col">
      <label className="text-left">{label}</label>
      <DatePicker
      showYearDropdown
        selected={value}
        onChange={onChange}
        minDate={minDate ? new Date() : null}
        placeholderText={placeholder}
        className="w-full border border-gray-500 rounded-lg p-3"
      />
      {error && (
        <div className="flex w-full justify-between mt-1">
          <p className="text-red-700 p-0 m-0">{error}</p>
        </div>
      )}
    </div>
  );
};

export default JPDatePicker;
