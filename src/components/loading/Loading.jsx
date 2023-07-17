import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <motion.div
        animate={{ rotate: "360deg" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 0,
        }}
        className="border-t-2 border-purple-950 w-20 h-20 rounded-full flex items-center justify-center"
      >
        <motion.div className="border-r-2 border-red-700 w-14 h-14 rounded-full flex items-center justify-center">
          <motion.div className="border-l-2 border-blue-800 w-10 h-10 rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
