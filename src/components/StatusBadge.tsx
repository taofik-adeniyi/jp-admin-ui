import { statusBadgeType } from '@/lib/types'
import React from 'react'
import Image from 'next/image';
import stopIcon from "@/assets/images/svg/stop.svg"
import tickSquareIcon from "@/assets/images/svg/tick-square.svg"

type Props = {
    status: statusBadgeType
}

const StatusBadge = (props: Props) => {
    const { status } = props
    let statusIcon;
    if(status == 'completed'){
      statusIcon = stopIcon
    }else if(status == 'in progress'){
      statusIcon = tickSquareIcon
    }
    else if(status == 'active'){
      statusIcon = tickSquareIcon
    }
    else if(status == 'in active'){
      statusIcon = tickSquareIcon
    }else {
      statusIcon = stopIcon
    }
  return (
    <div className={`px-3 rounded border flex capitalize gap-x-3 ${status == 'completed' && 'border-[#EA5455] text-[#EA5455] bg-[#EA5455]/10'} ${status == 'in progress' && 'border-[#00B93F] text-[#00B93F] bg-[#00B93F]/10'}`}>
      <Image
      priority
      src={status == 'completed' ? stopIcon: tickSquareIcon}
      alt={status}
    />
        {status}
    </div>
  )
}

export default StatusBadge