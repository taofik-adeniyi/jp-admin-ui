import LotteryDetail from "@/components/modules/lottery/LotteryDetail";
import { getDraws, getDrawsByLotteryId } from "@/services/draw";
import { getVouchers, getVouchersByLotteryId } from "@/services/voucher";
import React from "react";

type Props = {
  params: {
    lotteryId: string;
  };
};

const LotteryDetails = async (props: Props) => {
  const {
    params: { lotteryId },
  } = props;
  const { data: drawData, error: drawDataError } = await getDraws();
  const { data, error } = await getDrawsByLotteryId(lotteryId);
  const { data:voucherData, error: voucherError } = await getVouchersByLotteryId(lotteryId)
  // console.log("databylotteryId", data.data);
  // console.log("databylotteryId:error", error);
  console.log("voucherData",voucherData?.data)
  console.log("voucherError:status",voucherError?.status)
  console.log("voucherError:statusText",voucherError?.statusText)
  // const { data: voucherData, error: voucherError } = await getVouchers();
  // console.log("drawData:::",drawData?.data)
  // console.log("drawData:::status",drawData?.status)
  // console.log("voucherData::::data",voucherData?.data)
  // console.log("voucherData::::status",voucherData?.status)
  return (
    <div>
      <LotteryDetail
        voucherData={voucherData?.data}
        drawData={data?.data!}
        lotteryId={lotteryId}
      />
    </div>
  );
};

export default LotteryDetails;
