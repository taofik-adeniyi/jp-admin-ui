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
export type VoucherCodeType = {
  createdAt: string;
  status:string;
  voucherCode:string
};
export type LotteryDrawTicketType = {
  id:number;
  createdAt: string;
  ticketNumber: string;
  channel: string;
  phoneNumber: string;
    _id: string
    agent: {
        id: string
        name: string
        agentCode: string
    },
    prize: 2000,
    player: {
        phoneNumber: string
    },
    draw: {
        drawDate: null,
        _id: string
        startDate: number,
        endDate: number,
        name: string
        createdAt: string
        updatedAt: string
    },
    voucher: {
        id: string
        voucherCode: string
    },
    lottery: {
        id: string
    },
    updatedAt: string
};
export type LotteryVoucherType = {
  title: string;
  dateGenerated: string;
  createdAt: Date | string | number
  quantity: string;
  _id:string
  lotteryId:string
  tag:string
};
export type CreateDrawType = {
  title:string;
  from:number;
  to:number;
  drawDate?:number
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
  _id:string
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
  firstName:string;
  lastName:string;
  gender:string;
  state:any;
  lga:any
  dob:string | any
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
  tag: {
    value: "skilled" | "unskilled" | "citizenship"
    label: string
  },
  quantity: number
}