import { jpMiddleWare } from "@/lib/api";
import { AgentType, ROLES } from "@/lib/types";
import { AxiosError } from "axios";



export const createVoucher = async (body:{lotteryId:string,quantity: number,tag:string}) => {
    try {
      const res = await jpMiddleWare.post('/voucher', body)
      return {data:res}
    } catch (error:AxiosError|any) {
      return {error: error.response}
    }
  }
  export const createVoucherCodes = async (body:{lotteryId:string,quantity: number,voucherId:string}) => {
    try {
      const res = await jpMiddleWare.post('/voucher-code', body)
      return {data:res}
    } catch (error:AxiosError|any) {
      return {error: error.response}
    }
  }
  export const getVoucherCodesByVoucherId = async (voucherId:string): Promise<any> => {
    console.log("voucherId>>>",voucherId)
    try {
      const res = await jpMiddleWare.get(`/voucher-code/${voucherId}`, {})
      return {data:res}
    } catch (error:AxiosError|any) {
      return {error: error.response}
    }
  }
  export const getVouchers = async (): Promise<any | AgentType[]> => {
    try {
      const res = await jpMiddleWare.get('/voucher', {})
      return {data:res}
    } catch (error:AxiosError|any) {
      return {error: error.response}
    }
  }
