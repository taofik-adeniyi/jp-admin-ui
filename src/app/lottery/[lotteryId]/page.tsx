import LotteryDetail from '@/components/modules/lottery/LotteryDetail'
import { getDraws } from '@/services/draw'
import { getVouchers } from '@/services/voucher'
import React from 'react'

type Props = {
  params: {
    lotteryId:string
  }
}

const LotteryDetails = async (props: Props) => {
  const { params: { lotteryId }} = props
  const {data: drawData, error: drawDataError} = await getDraws()
  const { data: voucherData, error: voucherError } = await getVouchers()
  // console.log("drawData:::",drawData?.data)
  // console.log("drawData:::status",drawData?.status)
  console.log("voucherData::::data",voucherData?.data)
  console.log("voucherData::::status",voucherData?.status)
  return (
    <div>
      <LotteryDetail voucherData={voucherData?.data} drawData={drawData?.data!} lotteryId={lotteryId} />
    </div>
  )
}

export default LotteryDetails