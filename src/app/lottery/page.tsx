import Button from "@/components/Button";
import CreateLottery from "@/components/modules/lottery/CreateLottery";
import LotteryTable from "@/components/modules/lottery/LotteryTable";
import { getLotterys } from "@/services/lottery";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";
import { revalidatePath } from 'next/cache'
import revalidateReq from "@/lib/server-funcs";
type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export const revalidate = 3600 // revalidate the data at most every hour

const Lottery = async (props: Props) => {
  const { searchParams } = props;
  const show = searchParams?.show;
  const data = await getLotterys()
  console.log("gotten lottry",data)
  // console.log("hey")
  // const router = useRouter()

 

    // // Initiate both requests in parallel
    // const artistData = getArtist(username)
    // const albumsData = getArtistAlbums(username)
   
    // // Wait for the promises to resolve
    // const [artist, albums] = await Promise.all([artistData, albumsData])

    // const refreshOne = () => {
    //   router.refresh()
    // }
    const refreshTwo = () => {
revalidatePath('/blog/post-1')
// revalidatePath('/blog/post-1', 'page')
// revalidatePath('/blog/post-1', 'layout')

// revalidate all data
// revalidatePath('/', 'layout')

// for server action
/**
 * 
 * 'use server'
 
import { revalidatePath } from 'next/cache'
 
export default async function submit() {
  await submitForm()
  revalidatePath('/')
}
 */
    }

    /**
     * REVALIDATE TAG
     * 
     * 
     * revalidateTag(tag: string): void;
     * fetch(url, { next: { tags: [...] } });
     * 
     * SERVER ACTIONS
     * 'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function submit() {
  await addPost()
  revalidateTag('posts')
}
     */

  return (
    <>
      {!show && (
        <>
          <div className="w-full flex px-2 py-5 justify-between items-center">
            <h1 className="font-roboto">Lottery</h1>
            <Link href="/lottery?show=true">
              <Button variant="filled" color="green">
                Create Lottery
              </Button>
            </Link>
          </div>

          <div className="mt-10">
            <LotteryTable data={data?.data} />
          </div>
        </>
      )}
      {show && <CreateLottery revalidateReq={async()=> {
        'use server'
        revalidateReq('fetch-lottery')
      }} />}
    </>
  );
};

export default Lottery;
