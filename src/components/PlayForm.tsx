"use client";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Modal } from "./Modal";
import { FaCheckDouble } from "react-icons/fa";

type Props = {};

const PlayForm = (props: Props) => {
  const [step, setStep] = useState(3);
  const [selectedDraw, setSelectedDraw] = useState(null);
  const handleDraw = (args: any) => {
    setSelectedDraw(args.id);
  };
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = () => {
    setSubmitted(true);
  };
  const draws = [
    {
      id: 1,
      title: "Loyai Draw",
    },
    {
      id: 2,
      title: "Japa prize Draw",
    },
    {
      id: 3,
      title: "Enterprize farm Draw",
    },
  ];
  
  return (
    <div className="w-6/12 py-10 bg-gray-300 mx-auto">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col w-6/12 mx-auto space-y-2">
          {step == 1 && (
            <>
              <Input
                label="Phone Number"
                placeholder="Enter Phone Number"
                type="tel"
                max={11}
                min={11}
              />
              <Input
                label="Voucher code"
                type="text"
                placeholder="0909-2321-0909-4387"
              />
              <Button type="button">Submit</Button>
              <p className="text-sm my-2">
                Submit the details to check for availabe draws
              </p>
            </>
          )}
          {step == 2 && (
            <>
              <h1>Available and Active Draw</h1>
              <p>Pick a draw to enter/Pick the active draw to enter</p>

              <div className="my-3 space-y-3">
                {draws &&
                  draws.length > 0 &&
                  draws.map((draw) => {
                    return (
                      <div
                        onClick={() => handleDraw(draw)}
                        key={draw.id}
                        className={`bg-white border ${
                          selectedDraw == draw.id
                            ? "border-blue-500"
                            : "border-gray-500"
                        } p-4 rounded-md ${
                          selectedDraw == draw.id
                            ? "text-blue-900"
                            : "text-black"
                        } text-center`}
                      >
                        {draw.title}
                      </div>
                    );
                  })}
              </div>
              <Button
                type="submit"
                size="lg"
                className="text-center flex justify-center"
              >
                Enter Draw
              </Button>
            </>
          )}
          {step ==3 && <>
            <div className="border rounded-lg p-10">
          <p>
            A notification has beeen sent to your required number with the
            details of your entry into the lottery with details
          </p>
          <div className="flex items-end justify-end">

            <FaCheckDouble className="text-[45px] text-green-700" />
          </div>
        </div>
          </>}
        </div>
      </form>
      {/* <Modal
        isOpen={submitted}
        onClose={() => setSubmitted(false)}
        size="md"
        title="COnfirmation"
      >
        <div className="border rounded-lg">
          <p>
            A notification has beeen sent to your required number with the
            details of your entry into the lottery with details
          </p>
        </div>
      </Modal> */}
    </div>
  );
};

export default PlayForm;
