import { FunctionComponent } from "react";

const sizeArray = ["xs", "sm", "md", "lg"] as const;




export type sizeType = typeof sizeArray[number];
export type FC<P = {}> = FunctionComponent<P>;

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type LotteryType = {
    createdAt: string
    status: "in progress" | "completed"
    plan: string | "skilled" | "unskilled" | "citizenship"
    title: string,
    noOfPlayers: number;
    id?:number
}
export type LotteryDrawType = {
  createdAt: string
  title: string,
  noOfPlayers: number;
  id?:number
  startDate:string
  endDate:string
}
export type LotteryVoucherType = {
  title: string,
  dateGenerated:string
  quantity:string
}
export type statusBadgeType = 'in progress' | 'completed'