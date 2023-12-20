import React, { useEffect, useState } from "react";
import LotteryDrawTable from "./LotteryDrawTable";
import JPButton from "@/components/JPButton";
import { getLotteryDrawData } from "@/services/lottery";
import { Modal } from "@/components/Modal";
import CreateDraw from "../draw/CreateDraw";

type Props = {};

const Draws = (props: Props) => {
  const [drawData, setDrawData] = useState<any>([]);
  const [isCreateDrawOpen, setIsCreateDrawOpen] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const data = await getLotteryDrawData();
      setDrawData(data);
    };
    fetch();
  }, []);
  const handleCreateDraw = () => setIsCreateDrawOpen(!isCreateDrawOpen);
  return (
    <div>
      <div className="flex justify-end">
        <JPButton onClick={handleCreateDraw}>Create Draw</JPButton>
      </div>
      <LotteryDrawTable data={drawData} />
      {isCreateDrawOpen && (
        <Modal isOpen={isCreateDrawOpen} onClose={handleCreateDraw}>
          <CreateDraw />
        </Modal>
      )}
    </div>
  );
};

export default Draws;
