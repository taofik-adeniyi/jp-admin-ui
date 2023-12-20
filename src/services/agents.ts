import { AgentType } from "@/lib/types";

export async function getAgentData(): Promise<AgentType[]> {
    return [
      {
        status: "active",
        name: 'ade gold',
        agentCode: 'AGT-561'
      },
      {
        status: "active",
        name: 'chidi musa',
        agentCode: 'AGT-562'
      },
      {
        status: "in active",
        name: 'ike judith',
        agentCode: 'AGT-563'
      },
      {
        status: "active",
        name: 'yunisa mariam',
        agentCode: 'AGT-564'
      },
      {
        status: "active",
        name: 'seun okin',
        agentCode: 'AGT-565'
      },
      {
        status: "in active",
        name: 'kheni white',
        agentCode: 'AGT-566'
      },
      {
        status: "active",
        name: 'tunde oke',
        agentCode: 'AGT-567'
      },
    ];
  }