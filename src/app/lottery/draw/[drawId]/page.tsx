import LotteryDrawTicketTable from '@/components/modules/lottery/LotteryDrawTicketTable'
import { getTicketDataByDraw } from '@/services/ticket'
import Image from 'next/image'
import React from 'react'

type Props = {}

const LotteryDrawDetail = async (props: Props) => {
  const data = await getTicketDataByDraw()
  return (
    <div className='font-roboto'>
        <div className='my-8'><h1>Lottery/Awoof</h1></div>

        <div className='w-full border border-[#E6E7E8]'>
            <div className='w-[96%] mx-auto gap-x-5 border-b border-gray-200 flex items-end pb-5 my-6'>
                <Image priority src="/drawplaceholderlogo.png" width={70} height={70} alt="Draw title"  />
                <div className='space-y-4'>
                    <h2 className='text-[#2F2F30]'>Awoof</h2>
                    <p className='m-0 p-0 font-roboto text-[#2F2F30] text-base'>Created by <b>Admin</b> | 14 Aug, 2023 • 01:33:20 pm • <b>2000 in stock</b></p>
                </div>
            </div>
        </div>

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
        </div>

        <div className='my-5'>
          <div><h1 className='font-medium text-[#2F2F30] text-base'>Ticket List</h1></div>
        </div>

        <LotteryDrawTicketTable data={data} />
    </div>
  )
}

export default LotteryDrawDetail