import React, { useEffect, useRef, useState } from "react";
import { ModalProps } from "@/types/types";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [tempClose, setTempClose] = useState<boolean>(false);
  const modalRef = useRef<any>(null);
  const router = useRouter();

  const handleTempClose = (close: boolean) => {
    setTempClose(close);
  };

  useOutsideClickListener(modalRef, onClose, handleTempClose);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-100 flex justify-center items-center max-w-1/2">
      <motion.div
        initial={{ scale: tempClose ? 1 : 0 }}
        animate={{ scale: tempClose ? 0 : 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="bg-white p-8 rounded-lg shadow-lg"
        ref={modalRef}
      >
        <h2 className="font-bold text-4xl text-center  monoFont">
          Hyper-space
        </h2>
        <p className="text-xl my-4 text-gray-700">
          We invent, build, and operate next-gen attractions connected to
          digital lifestyles.
        </p>
        {/* <p className="text-sm overflow-auto my-4 text-gray-500">
          Our parks adapt the best ingredients of video games, social media, and
          Web3 culture; translating them into future forward entertainment
          attractions.
        </p> */}
        <div className="flex gap-10 justify-center items-center">
          <button
            className="rounded-md py-2 px-4 bg-[#DF6F61] text-white"
            onClick={() => router.push("/playground")}
          >
            Open Play-Ground
          </button>
          <button
            className="border-[#DF6F61] border-2 rounded-md py-2 px-4 "
            onClick={() => {
              setTempClose(true);
              setTimeout(() => {
                setTempClose(false);
                onClose();
              }, 200);
            }}
          >
            Close Modal
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;

function useOutsideClickListener(ref: any, close: () => void, tempClose: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        tempClose(true);
        setTimeout(() => {
          tempClose(false);
          close();
        }, 200);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
