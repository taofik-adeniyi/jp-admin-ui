import React, { useEffect, useState } from "react";
import LotteryDrawTable from "./LotteryDrawTable";
import JPButton from "@/components/JPButton";
import { getLotteryDrawData } from "@/services/lottery";
import { Modal } from "@/components/Modal";
import CreateDraw from "../draw/CreateDraw";

type Props = {
  lotteryId:string
  data:any
};

const Draws = (props: Props) => {
  const { lotteryId,data } = props
  const [drawData, setDrawData] = useState<any>([]);
  const [isCreateDrawOpen, setIsCreateDrawOpen] = useState(false);
  const handleCreateDraw = () => setIsCreateDrawOpen(!isCreateDrawOpen);
  useEffect(() => {
    const fetch = async () => {
      const data = await getLotteryDrawData();
      setDrawData(data);
    };
    fetch();
  }, []);
  return (
    <div>
      <div className="flex justify-end">
        <JPButton onClick={handleCreateDraw}>Create Draw</JPButton>
      </div>
      <LotteryDrawTable 
      // data={drawData} 
      data={data}
      />
      {isCreateDrawOpen && (
        <Modal isOpen={isCreateDrawOpen} onClose={handleCreateDraw}>
          <CreateDraw onClose={()=>setIsCreateDrawOpen(!isCreateDrawOpen)} lotteryId={lotteryId} />
        </Modal>
      )}
    </div>
  );
};

export default Draws;
