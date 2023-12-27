import LotteryDetail from '@/components/modules/lottery/LotteryDetail'
import { getDraws } from '@/services/draw'
import React from 'react'

type Props = {
  params: {
    lotteryId:string
  }
}

const LotteryDetails = async (props: Props) => {
  const { params: { lotteryId }} = props
  const {data: drawData, error: drawDataError} = await getDraws()
  console.log("drawData",drawData)
  return (
    <div>
      <LotteryDetail drawData={drawData} lotteryId={lotteryId} />
    </div>
  )
}

export default LotteryDetails