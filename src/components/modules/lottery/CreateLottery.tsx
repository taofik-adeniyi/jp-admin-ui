"use client";
import JPButton from "@/components/JPButton";
import JPInput from "@/components/JPInput";
import { CreateLotteryType, LotteryType } from "@/lib/types";
import { createLottery } from "@/services/lottery";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Props = {};

const CreateLottery = (props: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<CreateLotteryType>({
    mode: "all",
    defaultValues: {
      title: "",
      description: "",
      image: "Password@1",
      drawTime: "",
      amount: undefined,
    },
  });
  const onSubmit = async (values: CreateLotteryType) => {
    const body = {
      title: values.title,
      description: values.description,
      image: "https://japaprize.com/wp-content/uploads/2023/10/JAPAPRIZE-1500-x-500-px-2.png",
      drawTime: "1703862357" || values.drawTime,
      amount: values.amount,
    };
    setIsLoading(true)
    const res = await createLottery(body);
    setIsLoading(false)
    if(res.status == 200){
      toast.success('LOttery created success')
    }
    console.log("res", res);
    if (res.data.status == 201) {
      toast.success("Agent created successfully");
      router.back()
    }
  };
  return (
    <div className="min-h-[calc(100vh-80px)] bg-white flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto min-w-[514px] max-w-[514px] bg-white p-10 border rounded-md gap-6">
        <JPInput
          type="text"
          {...register("title")}
          error={errors?.title?.message!}
          label="Lottery Title"
          placeholder="Enter Lottery Title"
        />
        <JPInput
          type="text"
          {...register("description")}
          error={errors?.description?.message!}
          label="Lottery Description"
          placeholder="Enter Lottery Description"
        />

        <JPInput
          type="text"
          {...register("amount")}
          error={errors?.amount?.message!}
          label="Amount"
          placeholder="Enter Amount"
        />

        {/* <div className="flex flex-col mb-5 mt-1">
          <label className="mb-1 font-medium text-sm">Lottery Image</label>

          <div className="relative">
            <div className="px-4 rounded-md w-full transition duration-300 text-xs bg-gray-100 py-4">
              Lottery Image
            </div>
            <div className="absolute top-1/2 bg-[#E3E3E3] -translate-y-1/2 right-2 h-8 rounded-md flex items-center justify-center">
              <div className=" bg-[#E3E3E3] p-2 text-sm w-full font-normal rounded-md text-[#7c7c7e]">
                Upload image
              </div>
            </div>
          </div>
        </div> */}
        
        <div className="flex justify-end gap-x-5">
          <JPButton
            type="button"
            classes="text-primary-100 bg-neutral-100"
            onClick={() => router.back()}
          >
            Cancel
          </JPButton>
          <JPButton loading={isLoading} type="submit">Create Lottery</JPButton>
        </div>
      </form>
    </div>
  );
};

export default CreateLottery;
