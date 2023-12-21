import { jpMiddleWare } from "@/lib/api";
import { CreateLotteryType, LotteryDrawType, LotteryType, LotteryVoucherType } from "@/lib/types";
import { AxiosError } from "axios";

  export async function getLotteryDrawData(): Promise<LotteryDrawType[]> {
    // Fetch data from your API here.
    return [
      {
        startDate: '29/11/2023  2:00 PM',
        endDate: '04/12/2023  2:00 PM',
        createdAt: "29/11/2023  2:00 PM",
        noOfPlayers: 1000,
        title: 'Awoof',
      },
      {
        startDate: '29/11/2023  2:00 PM',
        endDate: '04/12/2023  2:00 PM',
        createdAt: "29/11/2023  2:00 PM",
        noOfPlayers: 1000,
        title: 'Level up',
      },
      {
        startDate: '29/11/2023  2:00 PM',
        endDate: '04/12/2023  2:00 PM',
        createdAt: "29/11/2023  2:00 PM",
        noOfPlayers: 4000,
        title: 'Shine Shine bobo',
      },

      // ...
    ];
  }

  export async function getLotteryVoucherData(): Promise<LotteryVoucherType[]> {
    // Fetch data from your API here.
    return [
      {
        dateGenerated: "21/08/2023 12:58pm",
        quantity: '50',
        title: 'Christmas Bundle',
      },
      {
        dateGenerated: '21/08/2023 12:58pm',
        quantity: '100',
        title: 'New year',
      },
      {
        dateGenerated: '21/08/2023 12:58pm',
        quantity: '150',
        title: 'Mega Bundle',
      },
    ];
  }

  export const createLottery = async (body:CreateLotteryType) => {
    try {
      const res = await jpMiddleWare.post('/agent', body, )
      return res
    } catch (error:AxiosError|any) {
      return error.response
    }
  }
  export const getLotterys = async (): Promise<any | LotteryType[]> => {
    try {
      const res = await jpMiddleWare.get('/agent', {})
      return res
    } catch (error:AxiosError|any) {
      return error.response
      console.log("error fething agents:",error.response)
    }
  }