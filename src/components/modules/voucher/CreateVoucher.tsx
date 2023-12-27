import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import JPButton from "@/components/JPButton";
import JPSelect from "@/components/JPSelect";
import { Select } from "@/components/Select";
import { CreateVoucherType } from "@/lib/types";
import React from "react";
import { useForm, Controller } from "react-hook-form";

type Props = {};


const TAGS_OPTIONS = [
  {
    label: '',
    value: 'skilled'
  },
  {
    label: '',
    value: 'unskilled'
  },
  {
    label: '',
    value: 'citizenship'
  },
]

const CreateVoucher = (props: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    control,
    register,
    setValue,
    getValues,
    watch,
  } = useForm<CreateVoucherType>({
    mode: "all",
    defaultValues: {
      quantity: undefined,
      tag: undefined
    },
  });
  const onSubmit = (values:CreateVoucherType) => {
    console.log("values",values)
  }
  console.log("errors",{errors})
  return (
    <div className="w-full bg-white p-2">
      <form onSubmit={handleSubmit(onSubmit)} className="w-10/12 mx-auto my-16 text-center">
        <h1 className="text-[22px] text-[#2F2F30]">Generate Voucher</h1>
        <p className="text-[#7C7C7E] text-sm mb-8 mt-2">
          Provide the following information to create unique voucher codes
        </p>

        <div className="flex flex-col space-y-3">


            {/* <Controller 
            name="tag"
            control={control}
              render={({field}) => {
                return (
                  <Select 
     
                  label="Tag" 
                  placeholder="Select Tag" 
                  options={TAGS_OPTIONS} />
                )
              }}
            /> */}
          <div className="w-full flex flex-col items-start mb-2">
            <label>Quantity</label>
            <input
            {...register("quantity", {
              required: {
                value: true,
                message: 'Quantity is required!'
              }
            })}
              type="number"
              min={1}
              placeholder="Enter Quantity"
              className="w-full rounded-md outline-none p-4 bg-transparent border border-primary-100 focus:border-primary-100 hover:border-primary-100"
            />
            <div className="flex w-full justify-between mt-1">
              {/* <p className="text-red-700 capitalize p-0 m-0">error</p> */}
            </div>
          </div>

        </div>

        <div className="mt-16 mb-5">
          <JPButton type="submit" classes="w-full py-4 text-lg">Generate Voucher</JPButton>
        </div>
      </form>
    </div>
  );
};

export default CreateVoucher;
