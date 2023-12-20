"use client";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  bgColor: string;
  borderColor: string;
  title: string;
  value: string;
  icon: string;
  valueColor?:string
  titleColor?:string
};

const Card = (props: Props) => {
  const { bgColor, borderColor, title, value, icon, valueColor,titleColor } = props;
  return (
    <div className={`w-[300px] h-[180px] p-4 border flex items-center ${bgColor ? bgColor : 'bg-white'} ${borderColor}`}>
      <div className="flex items-start gap-x-3">
        <Image priority src={icon} alt={title} />
        <div>
          <h1 className={`text-neutral-100 text-2xl ${titleColor} text-primary-100`}>{title}</h1>
          <h1 className={`text-[32px] leading-[52px] text-white ${valueColor}`}>{formatCurrency(value)}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
