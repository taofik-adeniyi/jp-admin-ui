import GoBack from '@/components/GoBack'
import JPButton from '@/components/JPButton'
import VoucherCodeTable from '@/components/modules/voucher/VoucherCodeTable'
import { getVoucherCodesByVoucherId } from '@/services/voucher'
import React from 'react'

type Props = {
  params: { lotteryId:string, voucherId:string}
  
}

const VoucherAndCodeDetail = async (props: Props) => {
    const { params : { lotteryId, voucherId} } = props
    // console.log("voucherId",voucherId)
    // console.log("lotteryId",lotteryId)
    const {data, error} = await getVoucherCodesByVoucherId(voucherId)
    console.log("error:",error)
    console.log("data:",data?.data)
    console.log("data:status",data?.status)
  return (
    <div>
        <div className='my-10 flex justify-between'>
        {/* <JPButton onClick={()=>{}}>Back</JPButton> */}
        <GoBack />
        <h1>Voucher Codes</h1>
        </div>
        <VoucherCodeTable data={data?.data || []} />
    </div>
  )
}

export default VoucherAndCodeDetail