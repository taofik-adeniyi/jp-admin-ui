import JPButton from '@/components/JPButton'
import React, { useEffect, useState } from 'react'
import LotteryVoucherTable from './LotteryVoucherTable'
import { getLotteryVoucherData } from '@/services/lottery'

type Props = {}

const Voucher = (props: Props) => {
    const [voucherData,setVoucherData] = useState<any>([])
    useEffect(()=>{
      const fetch = async () => {
          const data = await getLotteryVoucherData()
          setVoucherData(data)
      }
      fetch()
    },[])
  return (
    <div>
          <div className='flex justify-end'>
            <JPButton>Generate Voucher</JPButton>
        </div>
        <LotteryVoucherTable data={voucherData} />
    </div>
  )
}

export default Voucher