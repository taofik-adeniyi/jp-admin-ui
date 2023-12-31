import { revalidateTag } from "next/cache";
import { rankItem } from "@tanstack/match-sorter-utils";
import { FilterFn } from "@tanstack/react-table";
import { format } from "date-fns";
import moment from "moment-timezone";
import { cache } from "react";
import { unstable_cache } from "next/cache";
import revalidateReq from "./server-funcs";
import toast from "react-hot-toast";

export const getUnixTime = (d: any) => {
  return Math.floor(new Date(d).getTime() / 1000);
};

export const appDate = (args: any) => {
  return moment(args);
};
export const appTimeZone = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return timezone;
};

export const appTime = (args: any, formatter: any) => {
  return appDate(moment(args)).tz(appTimeZone()).format(formatter);
};

export const formatDateToTimestamp = (date: string) => {
  const dt = Date.parse(date);
  return dt / 1000;
};

export const formatDate = (date: number | Date | string) => {
  return format(new Date(date), "dd, MMM, yyyy | HH:mm:ss");
};
export const formatDateTime = (
  date: number | Date | string,
  dateFormat = "dd, MMM, yyyy | HH:mm"
) => {
  if (date) return format(new Date(date), dateFormat);
  return "N/A";
};

export const formatTimestampToDate = (ts: number) => {
  return new Date(ts * 1000);
};

export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export const formatCurrency = (value: any) => {
  return `₦${parseFloat(value).toLocaleString()}`;
};

const Currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const currencyFormat = (currencyCode: string, countryCode = "en-US") => {
  return new Intl.NumberFormat(countryCode, {
    style: "currency",
    currency: currencyCode,
  });
};

export const handleCopy = (payload: string) => {
  navigator.clipboard.writeText(payload);
  toast.success("Copied!");
};

// export const getItem = cache(async (id: string) => {
//     let db: any;
//     const item = await db.item.findUnique({ id })
//     return item
//   })

//   const getCachedUser = unstable_cache(
//     async (id) => getUser(id),
//     ['my-app-user']
//   );

//   export default async function Component({ userID }) {
//     const user = await getCachedUser(userID);
//     ...
//   }

// export const refetchLottery = () => {
//     'use server'
//     revalidateReq('fetch-lottery')
// }
