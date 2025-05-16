"use client"
import { Mic } from "lucide-react";
import { motion } from "motion/react";

const barHeights = [10, 16, 8, 20, 14, 22, 12, 18, 8, 16, 10, 20];

export const VoiceWave = () => {
  return (
    <div className="bg-black rounded-xl px-4 py-3 flex items-center gap-4 w-fit shadow-lg">
      <div className="bg-blue-600 p-2 rounded-full">
        <Mic className="text-white w-4 h-4" />
      </div>
      <div className="flex gap-1 items-end h-6">
        {barHeights.map((h, i) => (
          <motion.div
            key={i}
            className="w-[2px] bg-gradient-to-t from-purple-600 to-purple-300 rounded-full"
            initial={{ height: h }}
            animate={{ height: [h, h + 10, h] }}
            transition={{ repeat: Infinity, duration: 1 + (i % 5) * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
};
