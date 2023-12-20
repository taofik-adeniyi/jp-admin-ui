import Button from "@/components/Button";
import { FileInput } from "@/components/FileInput";
import Input from "@/components/Input";
import JPButton from "@/components/JPButton";
import CreateLottery from "@/components/modules/lottery/CreateLottery";
import LotteryTable from "@/components/modules/lottery/LotteryTable";
import { Pagination } from "@/components/table/Pagination";
import { getLotteryData } from "@/services/lottery";
import Link from "next/link";
import React from "react";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const Lottery = async (props: Props) => {
  const { searchParams } = props;
  const show = searchParams?.show;
  const data = await getLotteryData();
  const onSelectRole = (role: any) => {
    // setSelectedRole(role);
    // setUpdateOrCreate("update");
    // setIsDrawerOpen(true);
    console.log("role", role);
  };
  return (
    <>
      {!show && (
        <>
          <div className="w-full flex px-2 py-5 justify-between items-center">
            <h1 className="font-roboto">Lottery</h1>
            <Link href="/lottery?show=true">
              <Button variant="filled" color="green">
                Create Lottery
              </Button>
            </Link>
          </div>

          <div className="mt-10">
            <LotteryTable data={data} />
          </div>
        </>
      )}
      {show && <CreateLottery />}
    </>
  );
};

export default Lottery;
