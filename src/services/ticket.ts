import { jpMiddleWare } from "@/lib/api";
import { LotteryDrawTicketType } from "@/lib/types";
import { AxiosError } from "axios";



export const fetchTicketsByDrawId = async (drawId:string) => {
  console.log("fetching....",drawId)
  try {
   const res = await jpMiddleWare.get(`/ticket/draw/${drawId}`)
   return {data:res?.data}
  } catch (error:AxiosError|any) {
    return {error: error?.response}
  }
}