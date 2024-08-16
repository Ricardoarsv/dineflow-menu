import React from "react";
import { motion } from "framer-motion";

export const CardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-2 p-4 border-2 border-white rounded-xl bg-black text-yellow-500 w-72"
    >
      <div className="flex justify-center h-32 md:h-60 bg-[#333] rounded-xl animate-pulse">
        <div className="w-28 h-28 md:w-56 md:h-56 bg-[#555] rounded-xl"></div>
      </div>
      <div className="h-6 bg-[#555] rounded animate-pulse"></div>
      <div className="flex flex-row gap-2">
        <div className="h-4 w-24 bg-[#555] rounded animate-pulse"></div>
        <div className="h-4 w-12 bg-[#555] rounded animate-pulse"></div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="h-4 w-24 bg-[#555] rounded animate-pulse"></div>
        <div className="h-4 w-12 bg-[#555] rounded animate-pulse"></div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="h-4 w-24 bg-[#555] rounded animate-pulse"></div>
        <div className="h-4 w-12 bg-[#555] rounded animate-pulse"></div>
      </div>
    </motion.div>
  );
};
