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
        <div className="flex items-center justify-center mt-14">
          <CreateAgent />
        </div>
      )}
    </>
  );
};

export default Agent;
