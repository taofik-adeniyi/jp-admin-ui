import React, { useEffect, useState } from "react";
import LotteryDrawTable from "./LotteryDrawTable";
import JPButton from "@/components/JPButton";
import { Modal } from "@/components/Modal";
import CreateDraw from "../draw/CreateDraw";

type Props = {
  lotteryId:string
  data:any
};

const Draws = (props: Props) => {
  const { lotteryId,data } = props
  console.log("data::::",data)
  const [isCreateDrawOpen, setIsCreateDrawOpen] = useState(false);
  const handleCreateDraw = () => setIsCreateDrawOpen(!isCreateDrawOpen);

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
