"use client";
import JPButton from "@/components/JPButton";
import JPDatePicker from "@/components/JPDatePicker";
import JPInput from "@/components/JPInput";
import { Select } from "@/components/Select";
import { CreateAgentType, ROLES } from "@/lib/types";
import { createAgent } from "@/services/agents";
import moment from "moment";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
type Props = {};

const CreateAgent = (props: Props) => {
  const router = useRouter();
  const {
    formState: { errors },
    handleSubmit,
    control,
    register,
  } = useForm<CreateAgentType>({
    mode: "all",
    defaultValues: {
      name: "",
      phoneNumber: "",
      password: "Password@1",
      email: "",
      state: "",
      lga: "",
    },
  });
  const onSubmit = async (values: CreateAgentType) => {
    const body = {
      ...values,
      gender: values.gender?.value,
      name: values.firstName + " " + values.lastName,
      dob: moment(values.dob).unix()
    }
    const res = await createAgent({ ...body, roleId: ROLES.AGENT });
    if (res.data.status == 201) {
      toast.success("Agent created successfully");
      router.back();
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
            {...register("firstName", {
              required: {
                value: true,
                message: "First Name is required",
              },
            })}
            error={errors?.firstName?.message!}
            label="First Name"
            placeholder="Enter first name"
            type="text"
          />
          <JPInput
            {...register("lastName", {
              required: {
                value: true,
                message: "Last Name is required",
              },
            })}
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
                    <JPDatePicker
                      onChange={field.onChange}
                      value={field.value}
                      label="Date of Birth"
                      selectedDate={field.value!}
                      error={errors?.dob?.message}
                    />
                  );
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
                render={({ field }) => {
                  return (
                    <Select
                      onChange={field.onChange}
                      value={field.value}
                      placeholder="Gender"
                      label="Gender"
                      // @ts-ignore
                      error={errors.gender?.message}
                      options={[
                        { value: "male", label: "Male" },
                        { value: "female", label: "Female" },
                      ]}
                    />
                  );
                }}
              />
            </div>
          </div>
          {/* <Controller 
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
            /> */}

          <JPInput
            {...register("state", {
              required: {
                value: true,
                message: "State is required",
              },
            })}
            // @ts-ignore
            error={errors.state?.message!}
            label="State"
            placeholder="State"
            type="text"
          />
          {/* <Controller 
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
            /> */}
          <JPInput
            {...register("lga", {
              required: {
                value: true,
                message: "LGA is required",
              },
            })}
            // @ts-ignore
            error={errors.lga?.message!}
            label="LGA"
            placeholder="LGA"
            type="text"
          />
          <JPInput
            {...register("phoneNumber",{
              required: {
                value: true,
                message: "Phone Number is required",
              },
            })}
            error={errors?.phoneNumber?.message!}
            label="Phone Number"
            placeholder="Enter phone number"
            type="text"
          />
          <JPInput
            {...register("email",{
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            error={errors?.email?.message!}
            label="Email Address"
            placeholder="Enter email address"
            type="text"
          />
        </div>

        <div className="mt-8 mb-5">
          <JPButton type="submit" classes="w-full py-4 text-lg">
            Create Agent
          </JPButton>
        </div>
      </form>
    </div>
  );
};

export default CreateAgent;
