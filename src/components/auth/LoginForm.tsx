"use client";
import React from "react";
import JPInput from "../JPInput";
import { useForm } from "react-hook-form";
import JPButton from "../JPButton";

type Props = {};

const LoginForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: any) => {
    console.log("values", values);
  };
  return (
    <div className="bg-white flex min-h-screen">
      <div className="w-6/12 flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-8/12 mx-auto">
          <JPInput
            error={errors?.email?.message!}
            type={"text"}
            {...register("email", {
              required: { value: true, message: "email is required!" },
            })}
            label="Email"
            placeholder="Enter email address"
          />
          <JPInput
            error={errors?.password?.message!}
            type={"password"}
            {...register("password", {
                required: { value: true, message: "password is required!" },
              })}
            label="Password"
            placeholder="Enter password"
          />
          <h1 className="text-right">Forgot Password?</h1>
          <JPButton type="submit" classes="mt-5 w-full p-3 py-4">
            Log in
          </JPButton>
        </form>
      </div>
      <div className="w-6/12 bg-[#131340]"></div>
    </div>
  );
};

export default LoginForm;
