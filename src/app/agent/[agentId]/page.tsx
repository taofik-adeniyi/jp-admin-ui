import GoBack from "@/components/GoBack";
import AgentTicketTable from "@/components/modules/agent/AgentTicketTable";
import React from "react";

type Props = {
  params: { agentId: string };
};

const AgentDetail = (props: Props) => {
  const {
    params: { agentId },
  } = props;
  return (
    <>
    <div className="mt-3">
    <GoBack />
    </div>
    <div className="font-roboto px-10">
      <div className="my-10 flex space-x-40">
        <div className="flex gap-x-10 items-center">
          <div className="w-[100px] h-[100px] rounded-[50%] bg-gray-300"></div>
          <div className="font-medium">
            <h1 className="text-xl text-[#2F2F30]">Maria James</h1>
            <h2 className="text-lg text-[#3636B5] m-0 p-0">ID: JP-02</h2>
          </div>
        </div>
        <div className="flex flex-col gap-x-4 border-l border-[#C9C9CA] px-5">
          <h1 className="m-0 p-0 text-xl text-[#2F2F30]">
            Personal Information
          </h1>
          <div className="flex space-x-10 mt-5">
            <div>
              <h1 className="text-[#49494B] text-lg">17-02-97</h1>
              <h2 className="m-0 p-0 text-[#7C7C7E] text-sm font-normal">
                DOB
              </h2>
            </div>
            <div>
              <h1 className="text-[#49494B] text-lg">Female</h1>
              <h2 className="m-0 p-0 text-[#7C7C7E] text-sm font-normal">
                Gender
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-2 py-4 my-16">
        <h1 className="p-0 m-0 min-h-[60px] pb-2 border-b border-gray-500 w-full">
          Official Information
        </h1>
        <div className="flex min-h-[60px] py-5 items-center justify-between">
          <div className="flex flex-1 flex-col">
            <h1>marimari27@gmail.com</h1>
            <h1>Email address</h1>
          </div>
          <div className="flex flex-1 flex-col">
            <h1>+2346987684563</h1>
            <h1>Phone number</h1>
          </div>
          <div className="flex flex-1 flex-col">
            <h1>lagos</h1>
            <h1>State</h1>
          </div>
          <div className="flex flex-1 flex-col">
            <h1>Kosofe</h1>
            <h1>LGA</h1>
          </div>
        </div>
      </div>
      <div className="my-4">
        <h3 className="m-0 font-roboto p-0 text-base font-semibold text-[#2F2F30]">
          Ticket Sold
        </h3>
        <div className="mt-2">
          <AgentTicketTable
            data={[
              {
                _id: "MJ-20-001",
                createdAt: 1703854701,
                ticketId: "MJ-20-001",
              },
              {
                _id: "MJ-20-001",
                createdAt: 1703854701,
                ticketId: "MJ-20-001",
              },
              {
                _id: "MJ-20-001",
                createdAt: 1703854701,
                ticketId: "MJ-20-001",
              },
            ]}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default AgentDetail;
