import { motion } from "framer-motion";

interface BootOverlayProps {
  open: boolean;
}

export default function BootOverlay({ open }: BootOverlayProps) {
  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div className="w-full max-w-3xl px-10">

        <h1 className="text-cyan-400 text-4xl font-bold tracking-[0.25em] mb-8">
          EXPLORIA OS
        </h1>

        <div className="border border-cyan-500 rounded-xl p-8 bg-cyan-500/5 backdrop-blur-md">

          <p className="text-cyan-300 font-mono text-lg">
            Initializing Explorer Interface...
          </p>

          <div className="mt-8 h-5 w-full rounded-full bg-zinc-800 overflow-hidden">

            <div className="h-full w-1/2 bg-cyan-400" />

          </div>

          <p className="mt-8 text-zinc-400 font-mono">
            Please wait...
          </p>

        </div>

      </div>
    </motion.div>
  );
}