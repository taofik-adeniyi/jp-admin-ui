"use client";
import JPButton from "@/components/JPButton";
import JPInput from "@/components/JPInput";
import { CreateAgentType, ROLES } from "@/lib/types";
import { createAgent } from "@/services/agents";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast'
type Props = {};

const CreateAgent = (props: Props) => {
  const router = useRouter()
  const {
    formState: { errors },
    handleSubmit,
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
        className="w-10/12 mx-auto my-16 text-center"
      >
        <h1 className="text-[22px] text-[#2F2F30]">Agent Information</h1>
        <p className="text-[#7C7C7E] text-sm mb-8 mt-2">
          Provide the following information to create an agent space
        </p>

        <div className="flex flex-col space-y-3">
          <JPInput
          {...register("name")}
            error={errors?.name?.message!}
            label="Agent's Name"
            placeholder="Enter agent's name"
            type="text"
          />
          <JPInput
            {...register("email")}
            error={errors?.email?.message!}
            label="Email Address"
            placeholder="Enter email address"
            type="text"
          />
          <JPInput
            {...register("phoneNumber")}
            error={errors?.phoneNumber?.message!}
            label="Phone Number"
            placeholder="Enter phone number"
            type="text"
          />
        </div>

        <div className="mt-16 mb-5">
          <JPButton type="submit" classes="w-full py-4 text-lg">Create Agent</JPButton>
        </div>
      </form>
    </div>
  );
};

export default CreateAgent;
