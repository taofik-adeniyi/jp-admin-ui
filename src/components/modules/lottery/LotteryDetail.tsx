"use client"
import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import Summary from "./Summary";
import Draws from "./Draws";
import Voucher from "./Voucher";
import classNames from "classnames";

type Props = {
  lotteryId:string
  drawData:any;
  voucherData:any
};


const LotteryDetail = (props: Props) => {
  const { lotteryId, drawData, voucherData } = props
  const tabs = () => {
    return [
      // {
      //   id: "checkout-config",
      //   head: (
      //     <>
      //       <p className="flex flex-row space-x-2 items-center pr-2 md:justify-center">
      //         <span className="">Summary </span>
      //       </p>
      //     </>
      //   ),
      //   component: <Summary />,
      //   tabIndex: 0,
      // },
      {
        id: "business",
        head: "Draws",
        component: <Draws data={drawData} lotteryId={lotteryId} />,
        tabIndex: 0,
      },
      {
        id: "api-key",
        head: "Vouchers",
        component: <Voucher voucherData={voucherData} lotterryId={lotteryId}  />,
        tabIndex: 1,
      },
    ];
  };
  const [selectedTab, setSelectedTab] = useState(tabs()[0]);

  return (
    <div>
      <Tab.Group
        selectedIndex={selectedTab.tabIndex}
        onChange={(v) =>
          setSelectedTab(tabs().find((i) => i.tabIndex === v) || tabs()[0])
        }
        as="div"
      >
        <Tab.List className="sm:flex flex-row border-b-8 border-[#ECECF9] w-full space-x-96 items-start mt-8 hidden">
          {tabs().map((t) => (
            <Tab
              key={t.id}
              className={({ selected }) =>
                classNames(
                  " py-3 min-w-52 font-medium text-sm capitalize text-left transition-all duration-150 opacity-80",
                  {
                    "border-b-8 min-w-52 border-[#131340] absolute":
                      selected,
                  }
                )
              }
            >
              {t.head}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className=" mt-20">
          {tabs().map((t) => (
            <Tab.Panel key={t.id}>{t.component}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default LotteryDetail;
