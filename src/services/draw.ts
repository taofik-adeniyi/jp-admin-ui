import { jpMiddleWare } from "@/lib/api";
import { AgentType, ROLES } from "@/lib/types";
import { AxiosError } from "axios";



export const createDraw = async (body:{name:string,startDate:number,endDate:number,drawDate?:number}) => {
  try {
    const res = await jpMiddleWare.post('/draw', body)
    return {data:res}
  } catch (error:AxiosError|any) {
    return {error: error.response}
  }
}
export const attachDrawToLottery = async (lotteryId:string,drawId:string) => {
  try {
    const res = await jpMiddleWare.put(`/lottery/${lotteryId}/draw`,{
      draw: [drawId]
    })
    return {data:res}
  } catch (error:AxiosError|any) {
    return {error: error.response}
  }
}
export const getDraws = async (): Promise<any> => {
  try {
    const res = await jpMiddleWare.get('/draw', {})
    return {data:res}
  } catch (error:AxiosError|any) {
    return {error: error.response}
  }
}
export const getSingleDraws = async (id:number): Promise<any | AgentType[]> => {
    try {
      const res = await jpMiddleWare.get(`/draw/${id}`, {})
      return {data:res.data}
    } catch (error:AxiosError|any) {
      console.log("error fething agents:",error.response)
      return {error:error.response}
    }
  }