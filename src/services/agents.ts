import { jpMiddleWare } from "@/lib/api";
import { AgentType, ROLES } from "@/lib/types";
import { AxiosError } from "axios";



export const createAgent = async (body:{name:string,phoneNumber:string,roleId:ROLES.AGENT,password:string}) => {
  try {
    const res = await jpMiddleWare.post('/agent', body)
    return res
  } catch (error:AxiosError|any) {
    return error.response
  }
}
export const getAgents = async (): Promise<any | AgentType[]> => {
  try {
    const res = await jpMiddleWare.get('/agent', {})
    return res.data
  } catch (error:AxiosError|any) {
    console.log("error fething agents:",error.response)
  }
}