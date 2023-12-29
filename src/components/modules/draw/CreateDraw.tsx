import Button from "@/components/Button";
// import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import JPButton from "@/components/JPButton";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import { CreateDrawType } from "@/lib/types";
import { attachDrawToLottery, createDraw } from "@/services/draw";
import JPDatePicker from "@/components/JPDatePicker";
import DatePicker from "react-datepicker";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

type Props = {
  lotteryId: string;
  onClose: ()=>void
};

const CreateDraw = (props: Props) => {
  const { lotteryId } = props;
  const [isLoading, setIsLoading] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    control,
    register,
    setValue,
    getValues,
    watch,
  } = useForm<CreateDrawType>({
    mode: "all",
    defaultValues: {
      title: "",
      from: undefined,
      to: undefined,
      drawDate: undefined,
    },
  });
  const onSubmit = async (values: CreateDrawType) => {
    const body = {
      name: values.title,
      startDate: moment(values.from).unix(),
      endDate: moment(values.to).unix(),
      // drawDate: moment(values.drawDate).unix(),
    };
    console.log("body", body);
    console.log("lotteryId", lotteryId);
    setIsLoading(true);
    const {data,error} = await createDraw(body);
    console.log("data",data)
    console.log("error",error)
    const attach = await attachDrawToLottery(lotteryId,data?.data?.draw?._id)
    setIsLoading(false);
    console.log("attach.error",attach.error)
    console.log("attach.data",attach.data)
    if(attach?.data?.status! == 200){
      toast.success("Draw Created succesfully")
    }
  };
  return (
    <div className="w-full rounded-lg bg-whitep-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-10/12 mx-auto my-16 text-center"
      >
        <h1 className="text-[22px] text-[#2F2F30]">Generate Draw</h1>
        <p className="text-[#7C7C7E] text-sm mb-8 mt-2">
          Provide the following information to create Draws
        </p>

        <div className="flex flex-col space-y-3">
          <div className="w-full flex flex-col items-start mb-2">
            <label>Draw Title</label>
            <input
              {...register("title", {
                required: {
                  value: true,
                  message: "Title is required",
                },
              })}
              type="text"
              placeholder="Enter Draw Title"
              className="w-full rounded-md outline-none p-4 bg-transparent border border-primary-100 focus:border-primary-100 hover:border-primary-100"
            />
                                      {errors?.title?.message && (
                     <div className="flex w-full justify-between mt-1">
                     <p className="text-red-700 capitalize p-0 m-0">{errors?.title?.message}</p>
                   </div>
                   )}
          </div>

          <div className="flex gap-x-5">
            <Controller
              control={control}
              name="from"
              rules={{
                required: {
                  value: true,
                  message: "End Date is required",
                },
              }}
              render={({ field }) => {
                return (
                  <div className="w-full flex flex-col">
                    <label className="text-left">Start Date</label>
                    <DatePicker
                    // @ts-ignore
                      selected={field.value}
                      onChange={field.onChange}
                      minDate={new Date()}
                      className="w-full border border-gray-500 rounded-lg p-3"
                    />
                                         {errors?.from?.message && (
                     <div className="flex w-full justify-between mt-1">
                     <p className="text-red-700 capitalize p-0 m-0">{errors?.from?.message}</p>
                   </div>
                   )}
                  </div>
                );
              }}
            />
            <Controller
              control={control}
              name="to"
              rules={{
                required: {
                  value: true,
                  message: "End Date is required",
                },
              }}
              render={({ field }) => {
                return (
                  <div className="w-full flex flex-col">
                    <label className="text-left">End Date</label>
                    <DatePicker
                    // @ts-ignore
                      selected={field.value}
                      minDate={new Date()}
                      onChange={field.onChange}
                      className="w-full border border-gray-500 rounded-lg p-3"
                    />
                               {errors?.to?.message && (
                     <div className="flex w-full justify-between mt-1">
                     <p className="text-red-700 capitalize p-0 m-0">{errors?.to?.message}</p>
                   </div>
                   )}
                  </div>
                );
              }}
            />
          </div>
          {/* <div className="w-full">
            <Controller
              control={control}
              name="drawDate"
              rules={{
                required: {
                  value: true,
                  message: "Draw Date is required",
                },
              }}
              render={({ field }) => {
                return (
                  <div className="w-full flex flex-col">
                    <label className="text-left">Draw Date</label>
                    <DatePicker
                      selected={field.value}
                      minDate={new Date()}
                      onChange={field.onChange}
                      className="w-full border border-gray-500 rounded-lg p-3"
                    />
                   {errors?.drawDate?.message && (
                     <div className="flex w-full justify-between mt-1">
                     <p className="text-red-700 capitalize p-0 m-0">{errors?.drawDate?.message}</p>
                   </div>
                   )}
                  </div>
                );
              }}
            />
          </div> */}
        </div>

        <div className="mt-16 mb-5">
          <JPButton type="submit" classes="w-full py-4 text-lg">
            Generate Draws
          </JPButton>
        </div>
      </form>
    </div>
  );
};

export default CreateDraw;
