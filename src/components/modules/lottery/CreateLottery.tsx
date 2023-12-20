"use client"
import Input from '@/components/Input'
import JPButton from '@/components/JPButton'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const CreateLottery = (props: Props) => {
  const router = useRouter()
  return (
    <div className="min-h-[calc(100vh-80px)] bg-white flex justify-center items-center">
    <div className="mx-auto min-w-[514px] max-w-[514px] bg-white p-10 border rounded-md gap-6">
      <Input label="Lottery Title" placeholder="Enter Lottery Title" />
      <Input
        label="Lottery Description"
        placeholder="Enter Lottery Description"
      />
      <Input label="Amount" placeholder="Enter Amount" />
      <div className="flex flex-col mb-5 mt-1">
        <label className="mb-1 font-medium text-sm">Lottery Image</label>
        
        <div className="relative">
          <div className="px-4 rounded-md w-full transition duration-300 text-xs bg-gray-100 py-4">Lottery Image</div>
          <div className="absolute top-1/2 bg-[#E3E3E3] -translate-y-1/2 right-2 h-8 rounded-md flex items-center justify-center">
            <div className=" bg-[#E3E3E3] p-2 text-sm w-full font-normal rounded-md text-[#7c7c7e]">
              Upload image
            </div>
          </div>
        </div>
        
        {/* <div className="flex w-full justify-between mt-1">
          <div className="text-sm flex-1 text-red-500 float-left"></div> //error
          <div className="text-sm flex-1 flex justify-end float-right"><div className="rounded-sm bg-[#E3E3E3] p-2 font-normal text-[#7c7c7e]">Upload image</div></div> addon
        </div> */}

      </div>
      <div className="flex justify-end gap-x-5">
        <JPButton
          type="button"
          classes="text-primary-100 bg-neutral-100"
          onClick={()=>router.back()}
        >
          Cancel
        </JPButton>
        <JPButton type="button">Create Lottery</JPButton>
      </div>
    </div>
  </div>
  )
}

export default CreateLottery