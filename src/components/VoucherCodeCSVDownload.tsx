"use client";
import React from "react";
import { CSVDownload, CSVLink } from "react-csv";

type Props = {
    dataToDownload?: any
};

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
];

const VoucherCodeCSVDownload = (props: Props) => {
    const { dataToDownload } = props
  return (
      <CSVLink
        data={dataToDownload || csvData}
        className="bg-primary-100 p-2 text-white rounded-lg"
        filename="voucher-codes"
      >
        Export Voucher Codes
      </CSVLink>
  );
};

export default VoucherCodeCSVDownload;
