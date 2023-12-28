import { Modal } from "@/components/Modal";
import PageHeader from "@/components/PageHeader";
import AgentHeaderExtra from "@/components/modules/agent/AgentHeaderExtra";
import AgentTable from "@/components/modules/agent/AgentTable";
import CreateAgent from "@/components/modules/agent/CreateAgent";
import { getAgents } from "@/services/agents";
import React from "react";

type Props = {
  searchParams:  Record<string, string> | null | undefined;
};

const Agent = async (props: Props) => {
  const agentsData = await getAgents()
  const { searchParams } = props;
  const show = searchParams?.show;
  return (
    <>
      {!show && (
        <>
        <PageHeader title="Agent" extra={<AgentHeaderExtra/>} />
      <div className="mt-10">
        <AgentTable data={agentsData} />
      </div>
        </>
      )}
      {show && (
        <>
          <h1 className="my-4 text-[#7C7C7E] text-sm">Provide the following information to create an agent space</h1>
        <div className="flex items-center justify-center mt-4">
          <CreateAgent />
        </div>
        </>
      )}
    </>
  );
};

export default Agent;
