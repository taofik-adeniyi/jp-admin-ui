"use client"
import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import Summary from "./Summary";
import Draws from "./Draws";
import Voucher from "./Voucher";
import classNames from "classnames";

type Props = {};

const tabs = () => {
  return [
    {
      id: "checkout-config",
      head: (
        <>
          <p className="flex flex-row space-x-2 items-center pr-2 md:justify-center">
            <span className="">Summary </span>
          </p>
        </>
      ),
      component: <Summary />,
      tabIndex: 0,
    },
    {
      id: "business",
      head: "Draws",
      component: <Draws />,
      tabIndex: 1,
    },
    {
      id: "api-key",
      head: "Vouchers",
      component: <Voucher />,
      tabIndex: 2,
    },
  ];
};
const LotteryDetail = (props: Props) => {
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
        <Tab.List className="sm:flex flex-row bg-white rounded border items-start mt-8 hidden">
          {tabs().map((t) => (
            <Tab
              key={t.id}
              className={({ selected }) =>
                classNames(
                  "flex-1 py-3 w-full font-medium text-sm capitalize text-center hover:bg-slate-50 rounded transition-all duration-150 opacity-80",
                  {
                    "border-b-4 border-primary-500 bg-slate-100 opacity-100":
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
