import { jpMiddleWare } from "@/lib/api";
import { CreateLotteryType, LotteryDrawType, LotteryType, LotteryVoucherType } from "@/lib/types";
import { AxiosError } from "axios";
import { unstable_cache } from "next/cache";


  export const createLottery = async (body:CreateLotteryType) => {
    try {
      const res = await jpMiddleWare.post('/lottery', body, )
      return res
    } catch (error:AxiosError|any) {
      return error.response
    }
  }
  export const getLotterys = async (): Promise<any | LotteryType[]> => {
    try {
      const res = await jpMiddleWare.get('/lottery')
      return res.data
    } catch (error:AxiosError|any) {
      return error.response
    }
  }
  