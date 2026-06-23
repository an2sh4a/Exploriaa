import background from "../assets/images/cyber/background.png";

export default function CyberRoom() {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative">

      {/* Background */}

      <img
        src={background}
        alt="Cyber Room"
        className="w-full h-screen object-cover"
      />

      {/* Mission Panel */}

      <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md border border-cyan-500 rounded-2xl p-6 w-[420px]">

        <h1 className="text-cyan-400 text-4xl font-bold">
          Cyber Investigation
        </h1>

        <p className="text-zinc-200 mt-4 leading-relaxed">
          The university database has been hacked.

          Find the attacker before the evidence is erased.
        </p>

      </div>


      {/* Security AI */}

      <div className="absolute bottom-8 right-8 bg-cyan-500/10 backdrop-blur-md border border-cyan-400 rounded-2xl p-5 w-[320px]">

        <h2 className="text-cyan-300 text-xl font-bold">
          🤖 Security AI
        </h2>

        <p className="text-zinc-200 mt-3">
          Unauthorized access detected.

          Investigate the room and locate clues.
        </p>

      </div>


      {/* Inventory */}

      <div className="absolute bottom-0 left-0 w-full h-24 bg-black/70 backdrop-blur-md border-t border-cyan-500 flex items-center px-8">

        <h3 className="text-cyan-300 font-semibold">
          Inventory
        </h3>

        <div className="ml-8 flex gap-4">

          <div className="w-14 h-14 border border-cyan-500 rounded-lg"></div>

          <div className="w-14 h-14 border border-cyan-500 rounded-lg"></div>

          <div className="w-14 h-14 border border-cyan-500 rounded-lg"></div>

        </div>

      </div>

    </div>
  );
}