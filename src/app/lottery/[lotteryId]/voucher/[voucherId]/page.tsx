import GoBack from "@/components/GoBack";
import JPButton from "@/components/JPButton";
import VoucherCodeCSVDownload from "@/components/VoucherCodeCSVDownload";
import VoucherCodeTable from "@/components/modules/voucher/VoucherCodeTable";
import { getVoucherCodesByVoucherId } from "@/services/voucher";
import React from "react";

type Props = {
  params: { lotteryId: string; voucherId: string };
};

const VoucherAndCodeDetail = async (props: Props) => {
  const {
    params: { lotteryId, voucherId },
  } = props;
  // console.log("voucherId",voucherId)
  // console.log("lotteryId",lotteryId)
  const { data, error } = await getVoucherCodesByVoucherId(voucherId);
  // console.log("error:", error);
  // console.log("data:", data?.data);
  // console.log("data:status", data?.status);
  const dataToDownload = data?.data?.filter((data:any) => data?.status != "PAID").map((data:any)=>{
    return {
      voucherCode: data?.voucherCode
    }
  })
  return (
    <div>
      <div className="my-10 flex justify-between">
        <GoBack />
        <h1>Voucher Codes</h1>
      </div>
      <div className="my-3">
        {data?.data && <VoucherCodeCSVDownload dataToDownload={dataToDownload} />}
      </div>
      <VoucherCodeTable data={data?.data || []} />
    </div>
  );
};

export default VoucherAndCodeDetail;
