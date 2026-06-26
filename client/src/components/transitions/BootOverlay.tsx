import { motion } from "framer-motion";
import background from "../../assets/images/home/hero-background.avif";

interface BootOverlayProps {
  show: boolean;
}

export default function BootOverlay({ show }: BootOverlayProps) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="fixed inset-0 z-[9999] overflow-hidden"
    >
      {/* Background */}

      <motion.img
        src={background}
        alt="Boot Background"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.22 }}
        transition={{
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.88 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black"
      />

      {/* Cyan Glow */}

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/40 via-black/20 to-transparent" />

      {/* Boot Content */}

      <div className="relative z-10 h-full flex items-center">

        <div className="ml-24 max-w-2xl">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
            className="text-cyan-400 text-5xl font-bold tracking-[0.35em]"
          >
            EXPLORIA OS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.4,
            }}
            className="mt-10 text-cyan-300 font-mono text-xl"
          >
            Initializing Explorer Interface...
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2,
            }}
            className="mt-10"
          >
            <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  delay: 2.2,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="h-full bg-cyan-400"
              />

            </div>
          </motion.div>

        </div>

      </div>

    </motion.div>
  );
}