import { motion } from "framer-motion";

export default function Fog() {
  return (
    <>
      {/* Layer 1 */}
      <motion.div
        className="absolute bottom-0 left-[-20%] w-[160%] h-[45vh] pointer-events-none"
        animate={{
          x: ["0%", "-8%", "0%"],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            absolute
            bottom-0
            w-full
            h-full
            bg-gradient-to-t
            from-cyan-400/30
            via-cyan-300/15
            to-transparent
            blur-[120px]
          "
        />
      </motion.div>

      {/* Layer 2 */}
      <motion.div
        className="absolute bottom-0 left-[-15%] w-[170%] h-[38vh] pointer-events-none"
        animate={{
          x: ["0%", "6%", "0%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="
            absolute
            bottom-0
            w-full
            h-full
            bg-gradient-to-t
            from-blue-400/20
            via-cyan-400/10
            to-transparent
            blur-[160px]
          "
        />
      </motion.div>
    </>
  );
}