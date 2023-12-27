import { FunctionComponent, createRef } from "react";

const sizeArray = ["xs", "sm", "md", "lg"] as const;

export type sizeType = (typeof sizeArray)[number];
export type FC<P = {}> = FunctionComponent<P>;

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type LotteryType = {
  createdAt: string;
  status: "in progress" | "completed";
  plan: string | "skilled" | "unskilled" | "citizenship";
  title: string;
  noOfPlayers: number;
  id?: number;
  _id?: number;
  amount: number,
  description: string
  image: string
  drawTime: string
  draw: string[]
  updatedAt: string
};
export type LotteryDrawType = {
  createdAt: string;
  noOfPlayers:string;
  updatedAt:string;
  name: string;
  _id?: number;
  startDate:string;
  endDate: string;
  drawDate:string
};
export type LotteryDrawTicketType = {
  createdAt: string;
  ticketNumber: string;
  channel: string;
  phoneNumber: string;
};
export type LotteryVoucherType = {
  title: string;
  dateGenerated: string;
  quantity: string;
};
export type CreateDrawType = {
  title:string;
  from:number;
  to:number;
  drawDate:number
}
export type AgentType = {
  agentCode: string;
  status: "active" | "in active";
  agentId: string
  name: string
  phoneNumber: string,
  roleId: string,
  createdAt: string,
  updatedAt: string,
};
export type statusBadgeType =
  | "in progress"
  | "completed"
  | "active"
  | "in active";

export enum ROLES {
  PLAYER = "65777ca09d6cd2001c240a47",
  ADMIN = "65777cbf9d6cd2001c240a48",
  AGENT = "65777c7b9d6cd2001c240a46",
}
export type CreateAgentType = {
  name: string;
  phoneNumber: string;
  roleId: ROLES.AGENT;
  password: string;
  email?:string
};
export type CreateLotteryType = {
  title: string
  description: string
  image: string,
  drawTime: string,
  amount: number
}
export type inputRef = typeof createRef<HTMLInputElement>;

export type CreateVoucherType = {
  tag: "skilled" | "unskilled" | "citizenship",
  quantity: number
}