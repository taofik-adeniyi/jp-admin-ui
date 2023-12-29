import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import JPButton from "@/components/JPButton";
import JPInput from "@/components/JPInput";
import JPSelect from "@/components/JPSelect";
import { Select } from "@/components/Select";
import { CreateVoucherType } from "@/lib/types";
import { createVoucher, createVoucherCodes } from "@/services/voucher";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";

type Props = {
  lotteryId:string
  onClose: ()=>void
};


const TAGS_OPTIONS = [
  {
    label: 'Skilled',
    value: 'skilled'
  },
  {
    label: 'Unskilled',
    value: 'unskilled'
  },
  {
    label: 'Citizenship',
    value: 'citizenship'
  },
]

const CreateVoucher = (props: Props) => {
  const { lotteryId,onClose } = props
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
      tag: ""
    },
  });
  const onSubmit = async (values:CreateVoucherType) => {
    console.log("values",values)
    const voucherBody = {
      lotteryId: lotteryId,
      quantity: values.quantity,
      tag: values.tag 
    }
    const { data, error } = await createVoucher(voucherBody)
    if(error){
      console.log("error",error)
    }
    if(data && data?.status === 201){
      console.log("creating voucher",data)
      toast.success("Voucher and Voucher code created successfully")
      onClose()
    }

    // const { data:codeData, error: codeError } = await createVoucherCodes({...voucherBody, voucherId: data?.data?.voucher?._id})

    // if(codeData && codeData?.status === 201){
    //   console.log("codeData",codeData)
    //   toast.success("Voucher code created successfully")
    //   onClose()
    // }
    // if(codeError){
    //   console.log("codeError",codeError)
    // }
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
     onChange={field.onChange}
     value={field.value}
     name={field.name}
                  label="Tag" 
                  placeholder="Select Tag" 
                  options={TAGS_OPTIONS} 
                  error={errors?.tag?.message}
                  />
                )
              }}
            /> */}

            <JPInput 
            error={errors.tag?.message!} 
            label={"Tag"} 
            placeholder={"Tag"} 
            type={"text"}
            {...register("tag", {
              required: {
                value: true,
                message: 'Tag is required'
              }
            })}            
            />
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
            {errors?.quantity?.message && (
              <div className="flex w-full justify-between mt-1">
              <p className="text-red-700 capitalize p-0 m-0">{errors?.quantity?.message}</p>
            </div>
              )}
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
