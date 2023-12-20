import Card from '@/components/Card'
import React from 'react'
import ticketIcon from "@/assets/images/svg/ticket.svg"

type Props = {}

const Summary = (props: Props) => {
  return (
    <>
    <div className='flex gap-x-4'>
        <Card bgColor={'bg-[#203174]'} borderColor={'border-[#7287D9]'} title={'Total Voucher'} value={'40000'} icon={ticketIcon} />
        <Card bgColor={'bg-[#3636B5]'} borderColor={'border-[#7287D9]'} title={'Total Tickets'} value={'40000'} icon={ticketIcon} />
        <Card bgColor={'bg-[#FFFFFF]'} borderColor={'border-[#7287D9]'} title={'Total Revenue'} value={'240000000'} icon={ticketIcon} valueColor='text-[#EF288E]' titleColor='text-primary-100' />
        <Card bgColor={'bg-[#203174]'} borderColor={'border-[#7287D9]'} title={'Total Draws'} value={'40000'} icon={ticketIcon} />
    </div>

    <div className='mt-5'>
        <div className='border border-gray-[#7287D9] w-[657px] h-[418px]'></div>
    </div>
    </>
  )
}

export default Summary