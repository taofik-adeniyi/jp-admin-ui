"use client";
import React, { useEffect } from "react";
import classNames from "classnames";
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { Portal } from "./Portal";
import IconButton from "./IconButton";
import BackDrop from "./BackDrop";

type ModalProps = {
  isOpen: boolean;
  title?: string;
  padding?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: string;
};
export function Modal({
  isOpen,
  title = "",
  padding = true,
  onClose,
  children,
  size = "md",
}: ModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflowY = "auto";
  }, [isOpen]);

  const variants = {
    hidden: {
      y: "-100px",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100px",
      opacity: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };

  return (
    <Portal>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isOpen && (
          <BackDrop onClick={onClose} className="text-black">
            <motion.div
              onClick={(e) => e.stopPropagation()}
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={classNames(
                "w-full overflow-hidden mx-auto relative bg-red-400 justify-center items-center flex flex-col rounded-lg min-h-52",
                {
                  "p-8": padding,
                  "max-w-3xl": size === "md",
                  "max-w-lg": size === "sm",
                }
              )}
            >
              <div className="flex items-center justify-between mb-3">
                {/* {!!title && <h3 className="text-xl font-semibold">{title}</h3>} */}
                <h3 className="text-xl font-semibold">Modal</h3>
                <IconButton
                  onClick={onClose}
                  rounded
                  icon={<FiX />}
                  size="sm"
                  color="primary"
                  variant="outlined"
                />
              </div>
              {children}
            </motion.div>
          </BackDrop>
        )}
      </AnimatePresence>
    </Portal>
  );
}
