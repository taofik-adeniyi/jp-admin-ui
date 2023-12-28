"use client";
import JPButton from "@/components/JPButton";
import JPDatePicker from "@/components/JPDatePicker";
import JPInput from "@/components/JPInput";
import { Select } from "@/components/Select";
import { CreateAgentType, ROLES } from "@/lib/types";
import { createAgent } from "@/services/agents";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import toast from 'react-hot-toast'
type Props = {};

const CreateAgent = (props: Props) => {
  const router = useRouter()
  const {
    formState: { errors },
    handleSubmit,
    control,
    register
  } = useForm<CreateAgentType>({
    mode: "all",
    defaultValues: {
      name: "",
      phoneNumber: "",
      password: "Password@1",
      email: "",
    },
  });
  const onSubmit = async (values: CreateAgentType) => {
    const res = await createAgent({...values, roleId: ROLES.AGENT});
    console.log("res",res)
    if(res.data.status == 201){
      toast.success("Agent created successfully")
      router.back()
    }
  };
  return (
    <div className="w-[600px] bg-white border border-gray-800 p-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-11/12 mx-auto my-3 text-center"
      >
        <div className="flex flex-col space-y-3">
          <JPInput
          {...register("firstName")}
            error={errors?.firstName?.message!}
            label="First Name"
            placeholder="Enter first name"
            type="text"
          />
          <JPInput
            {...register("lastName")}
            error={errors?.lastName?.message!}
            label="Last Name"
            placeholder="Enter last name"
            type="text"
          />
          <div className="flex justify-between gap-x-5">
            <div className="flex-1">
            <Controller
              control={control}
              name="dob"
              rules={{
                required: {
                  value: true,
                  message: "Date of Birth is required",
                },
              }}
              render={({ field }) => {
                return (
                  <JPDatePicker onChange={field.onChange} value={field.value} label="Date of Birth" selectedDate={field.value!} error={errors?.dob?.message} />
                  )
              }}
            />
            </div>
          
           <div className="flex-1">
           <Controller 
            control={control}
            name="gender"
            rules={{
              required: {
                value: true,
                message: "Gender is required",
              },
            }}
            render={({field}) => {
              return (
                <Select
                onChange={field.onChange}
                value={field.value} 
                placeholder="Gender"
                label="Gender"
                options={[{value: 'male', label: 'Male'},{value: 'female', label: 'Female'}]}
                />
              )
            }}
            />
           </div>
          </div>
          <Controller 
            control={control}
            name="state"
            render={({field}) => {
              return (
                <Select
                onChange={field.onChange}
                value={field.value} 
                placeholder="Select State"
                label="State"
                options={[{value: 'male', label: 'Male'},{value: 'male', label: 'Male'}]}
                />
              )
            }}
            />
              <Controller 
            control={control}
            name="lga"
            render={({field}) => {
              return (
                <Select
                onChange={field.onChange}
                value={field.value} 
                placeholder="Select LGA"
                label="LGA"
                options={[{value: 'male', label: 'Male'},{value: 'male', label: 'Male'}]}
                />
              )
            }}
            />
          <JPInput
            {...register("phoneNumber")}
            error={errors?.phoneNumber?.message!}
            label="Phone Number"
            placeholder="Enter phone number"
            type="text"
          />
                    <JPInput
          {...register("email")}
            error={errors?.email?.message!}
            label="Email Address"
            placeholder="Enter email address"
            type="text"
          />
        </div>

        <div className="mt-8 mb-5">
          <JPButton type="submit" classes="w-full py-4 text-lg">Create Agent</JPButton>
        </div>
      </form>
    </div>
  );
};

export default CreateAgent;
