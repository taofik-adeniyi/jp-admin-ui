"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dashboardIcon from "@/assets/images/svg/dashboard.svg";
import { usePathname } from "next/navigation";
type Props = {
  children: React.ReactNode;
};

const routes = [
  // {
  //   id: 1,
  //   pathname: "/dashboard",
  //   name: "dashboard",
  // },
  {
    id: 2,
    pathname: "/agent",
    name: "agent",
  },
  {
    id: 3,
    pathname: "/lottery",
    name: "lottery",
  },
  // {
  //   id: 4,
  //   pathname: "/voucher",
  //   name: "voucher",
  // },
  {
    id: 5,
    pathname: "/settings",
    name: "settings",
  },
];

const PagesLayout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <div className="flex">
      <aside className="w-2/12 text-white bg-primary-100 flex flex-col justify-between">
        <div className="mt-20">
          <ul className="m-0 p-0 w-[236px] space-y-5 mx-auto">
            {routes.slice(0, 2).map((route) => {
              return (
                <li key={route.id}>
                  <Link
                    href={route.pathname}
                    className="flex justify-between items-center"
                  >
                    <Image
                      src={dashboardIcon}
                      alt="dashboard"
                      width={24}
                      height={24}
                      priority
                    />
                    <div
                      className={` rounded-md capitalize h-10 min-w-[194px] py-2 px-5 ${
                        route.pathname == pathname ?
                        "text-[#131340] bg-[#ECECF9] font-semibold":"text-white"
                      } text-base font-roboto font-normal`}
                    >
                      {route.name}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-20">
          <ul className="m-0 p-0 w-[236px] space-y-5 mx-auto">
            {/* <li>
              <Link
                href={routes[2].pathname}
                className="flex justify-between items-center"
              >
                <Image
                  src={dashboardIcon}
                  alt="dashboard"
                  width={24}
                  height={24}
                  priority
                />
                <div
                  className={` rounded-md capitalize h-10 min-w-[194px] py-2 px-5 ${
                    routes[2].pathname == pathname &&
                    "text-[#131340] bg-[#ECECF9] font-semibold"
                  } text-white text-base font-roboto font-normal`}
                >
                  {routes[2].name}
                </div>
              </Link>
            </li> */}
            <li  className="flex justify-between items-center">
              <Image
                src={dashboardIcon}
                alt="dashboard"
                width={24}
                height={24}
                priority
              />
              <div
                className={` rounded-md capitalize h-10 min-w-[194px] py-2 px-5 text-white text-base font-roboto font-normal`}
              >
                log out
              </div>
            </li>
          </ul>
        </div>
      </aside>
      <div className="w-10/12">
        <header className="w-full p-5 bg-gray-100 min-h-[80px] border-b border-b-gray-400"></header>
        <div className="min-h-[calc(100vh-80px)] bg-white px-5">{children}</div>
      </div>
    </div>
  );
};

export default PagesLayout;
