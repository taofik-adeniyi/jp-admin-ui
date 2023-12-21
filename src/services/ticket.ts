import { LotteryDrawTicketType } from "@/lib/types";

export const getTicketDataByDraw = async (): Promise<
  LotteryDrawTicketType[]
> => {
  return [
    {
      createdAt: "21/08/2023 12:58pm",
      channel: "web",
      ticketNumber: "AGT-101-89",
      phoneNumber: "0818906576",
    },
    {
        createdAt: "21/08/2023 12:58pm",
        channel: "voucher",
        ticketNumber: "AGT-101-79",
        phoneNumber: "0818906576",
      },
      {
        createdAt: "21/08/2023 12:58pm",
        channel: "web",
        ticketNumber: "AGT-101-90",
        phoneNumber: "0818906576",
      },
  ];
};
