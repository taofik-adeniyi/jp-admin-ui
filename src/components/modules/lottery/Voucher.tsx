import JPButton from "@/components/JPButton";
import React, { useEffect, useState } from "react";
import LotteryVoucherTable from "./LotteryVoucherTable";
import { Modal } from "@/components/Modal";
import CreateVoucher from "../voucher/CreateVoucher";

type Props = {
  lotterryId: string;
  voucherData?:any
};

const Voucher = (props: Props) => {
  const { lotterryId, voucherData } = props;
  const [isCreateVoucherOpen, setIsCreateVoucherOpen] = useState(false);
  const handleCreateVoucher = () =>
    setIsCreateVoucherOpen(!isCreateVoucherOpen);

  return (
    <div>
      <div className="flex justify-end">
        <JPButton onClick={handleCreateVoucher}>Generate Voucher</JPButton>
      </div>
      <LotteryVoucherTable data={voucherData} />

      {isCreateVoucherOpen && (
        <Modal onClose={handleCreateVoucher} isOpen={isCreateVoucherOpen}>
          <CreateVoucher
            lotteryId={lotterryId}
            onClose={() => setIsCreateVoucherOpen(!isCreateVoucherOpen)}
          />
        </Modal>
      )}
    </div>
  );
};

export default Voucher;
