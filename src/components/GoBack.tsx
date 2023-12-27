"use client";
import React from "react";
import JPButton from "./JPButton";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

type Props = {
  title?: string;
  backIcon?: React.ReactNode;
};

const GoBack = (props: Props) => {
  const { title = "Go Back", backIcon = <IoIosArrowBack /> } = props;
  const router = useRouter();
  return (
    <JPButton onClick={() => router.back()} type="button" classes="space-x-4 flex items-center">
      {backIcon} {title}
    </JPButton>
  );
};

export default GoBack;
