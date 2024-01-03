"use client"
import React from "react";
import { useCountdown } from "@/hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};
const DateTimeDisplay = ({ value, type, isDanger }:{ value:any, type:any, isDanger:any }) => {
    return (
      <div className={`${isDanger ? 'countdown danger' : 'countdown'} text-center`}>
        <p className="text-[#2F2F30] font-bold text-2xl">{value}</p>
        <span className="text-[#7C7C7E] text-sm">{type}</span>
      </div>
    );
  };
const ShowCounter = ({ days, hours, minutes, seconds }:{ days:any, hours:any, minutes:any, seconds:any }) => {
  return (
    <div className="show-counter flex items-center gap-x-3 justify-between w-8/12 mx-auto">
      {/* <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
        >
          </a> */}
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const CountDownTimer = ({ targetDate }: { targetDate: any }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};
export default CountDownTimer
