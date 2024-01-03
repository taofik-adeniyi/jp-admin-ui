import CountDownTimer from "@/components/CountDownTimer";
import GoBack from "@/components/GoBack";
import JPButton from "@/components/JPButton";
import LotteryDrawTicketTable from "@/components/modules/lottery/LotteryDrawTicketTable";
import { getSingleDraws } from "@/services/draw";
import { fetchTicketsByDrawId } from "@/services/ticket";
import moment from "moment";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    drawId: string;
  };
};

const LotteryDrawDetail = async (props: Props) => {
  const {
    params: { drawId },
  } = props;
  const { error, data } = await fetchTicketsByDrawId(drawId);
  const draww = await getSingleDraws(drawId)
  const drawData = draww?.data;
  return (
    <div className="font-roboto">
      <div className="my-8 flex items-center gap-x-4">
        <GoBack />
        {/* <h1>Lottery/Draw</h1> */}
      </div>

      <div className="w-full border bg-white border-[#E6E7E8]">
        <div className="w-[96%] mx-auto pr-10 border-b border-gray-200 flex items-center justify-between pb-5 my-6">
          <div className="flex gap-x-10 items-center">
            <Image
              priority
              src="/drawplaceholderlogo.png"
              width={70}
              height={70}
              alt="Draw title"
            />
            <div className="space-y-4">
              <h2 className="text-[#2F2F30]">Awoof</h2>
              <div className="flex space-x-5 justify-between">
                <h3>{moment
                  .unix(drawData?.startDate)
                  .format("DD/MM/YYYY")}</h3>
                <span>-</span>
                <h3>
                {moment.unix(drawData?.endDate).format("DD/MM/YYYY")}
                </h3>
              </div>
              {/* <p className='m-0 p-0 font-roboto text-[#2F2F30] text-base'>Created by <b>Admin</b> | 14 Aug, 2023 • 01:33:20 pm • <b>2000 in stock</b></p> */}
            </div>
          </div>

          <div>
            <CountDownTimer targetDate={moment.unix(drawData?.endDate).format('MM/DD/YYYY')} />
          </div>
        </div>
      </div>
      {/* 
        <div className='border border-[#E6E7E8] bg-[#E6E7E8] p-8 flex justify-between items-center text-center'>
          <div className='flex flex-col'>
            <h1>Total Tickets</h1>
            <h2>5,000.00</h2>
          </div>
          <div className='flex flex-col'>
            <h1>Total Revenues</h1>
            <h2>35,000,000.00</h2>
          </div>
          <div className='flex flex-col'>
            <h1>Total Winnings</h1>
            <h2>0</h2>
          </div>
          <div className='flex flex-col'>
            <h1>Draw Time</h1>
           <div className='text-[#2F2F30] text-base flex space-x-3 justify-between'>
           <h2>14</h2>
           <h2>20</h2>
           <h2>50</h2>
           <h2>01</h2>
           </div>
           <div className='text-[#7C7C7E] text-sm flex space-x-3  justify-between'>
           <h2>Days</h2>
           <h2>Hrs</h2>
           <h2>Mins</h2>
           <h2>Sec</h2>
           </div>
          </div>
        </div> */}

      <div className="my-5">
        <div>
          <h1 className="font-medium text-[#2F2F30] text-base">Ticket List</h1>
        </div>
      </div>

      <LotteryDrawTicketTable data={data?.data || []} />
      <div className="flex justify-end my-8">
        <JPButton type="button" classes="bg-[#8383CC] text-white">
          Choose Winner
        </JPButton>
      </div>
    </div>
  );
};

export default LotteryDrawDetail;
