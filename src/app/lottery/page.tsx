import Button from "@/components/Button";
import CreateLottery from "@/components/modules/lottery/CreateLottery";
import LotteryTable from "@/components/modules/lottery/LotteryTable";
import { getLotterys } from "@/services/lottery";
import Link from "next/link";
import React from "react";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const Lottery = async (props: Props) => {
  const { searchParams } = props;
  const show = searchParams?.show;
  const data = await getLotterys()

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
