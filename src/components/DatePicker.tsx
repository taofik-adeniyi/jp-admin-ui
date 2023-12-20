"use client";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

type Props = {
  label: string;
  placeholder:string
};
const DatePicker = ({ label,placeholder }: Props) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="flex flex-col items-start">
      <label>{label}</label>
      <Datepicker
      inputClassName="w-full p-4 rounded-md border border-primary-100 focus:border-primary-100 hover:border-primary-100" 
      placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
        showShortcuts={true}
      />
    </div>
  );
};
export default DatePicker;
