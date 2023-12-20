import React from "react";
import { motion } from "framer-motion";

type BackDropProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const BackDrop = ({ children, onClick }: BackDropProps) => {
    return (
        <motion.div
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[999] !m-0 !p-0"
        >
            {children}
        </motion.div>
    );
};

export default BackDrop;
