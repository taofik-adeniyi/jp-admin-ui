import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

type Props = {
  label: string;
  placeholder?: string;
  selectedDate: Date;
  onChange: (date: any) => void;
};

const JPDatePicker = (props: Props) => {
  const { onChange, label, placeholder = "DD/MM/YYYY", selectedDate } = props;
  return (
    <div className="w-full flex flex-col ">
      <label className="text-left">{label}</label>
      <DatePicker
        selected={selectedDate}
        placeholderText={placeholder}
        className="w-full border border-gray-500 rounded-lg p-3"
        onChange={onChange}
        // customInput={<input type="date" className='w-full border border-gray-500 rounded-lg p-3 flex flex-1' />}
        icon={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V5"
              stroke="#7C7C7E"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 2V5"
              stroke="#7C7C7E"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 9.09009H20.5"
              stroke="#7C7C7E"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
              stroke="#7C7C7E"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9955 13.7H12.0045"
              stroke="#7C7C7E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29431 13.7H8.30329"
              stroke="#7C7C7E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29431 16.7H8.30329"
              stroke="#7C7C7E"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
      />
    </div>
  );
};

export default JPDatePicker;
