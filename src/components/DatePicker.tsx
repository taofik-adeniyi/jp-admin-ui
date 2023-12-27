"use client";
import React, { useState } from "react";
import Datepicker, { DatepickerType } from "react-tailwindcss-datepicker";

type Props = {
  label: string;
  placeholder:string
  asSingle?:boolean 
  useRange?:false
};
const DatePicker = ({ label,placeholder, useRange= false,asSingle = true }: Props) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };


  return (
    <div className="flex flex-1 flex-col items-start">
      <label>{label}</label>
      <Datepicker
      useRange={false} 
      asSingle={true} 
      // asSingle={true}
      // inputId="my-popper"
        // popperClassName="calendar-popout"
  // popperPlacement="top-end"
  popoverDirection="up"
      // popperModifiers={{
      //   offset: { enabled: true, offset: '5px, 10px' },
      //   preventOverflow: {
      //     enabled: true,
      //     escapeWithReference: false,
      //     boundariesElement: 'viewport'
      //   }
      // }}
      containerClassName={(p) => {
        console.log("ppp:",p)
      return   `${p} z-50`
      }}
      // inputClassName={()=>"z-50"}
      toggleClassName={(p)=> { console.log("toggle ppp:",p) 
      return `${p} z-50`
    }}
      // classNames="z-50"
      // useRange={useRange}
      inputClassName={(p) => {
        console.log("2ppp:",p)
        return `${p} z-50 w-full p-4 py-5 rounded-md border border-primary-100 focus:border-primary-100 hover:border-primary-100`
      }}
      placeholder={placeholder}
        value={value}
        onChange={handleValueChange}
        // showShortcuts={true}
      />
    </div>
  );
};
export default DatePicker;
