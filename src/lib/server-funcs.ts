"use server";

import { revalidateTag } from "next/cache";

export default async function revalidateReq(nameToRevalidate: string) {
  "use server";
  // await addPost()
  revalidateTag(nameToRevalidate);
}
