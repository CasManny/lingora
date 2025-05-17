"use client"
import { motion } from "motion/react";

const barCount = 50;

export const VoiceWave = () => {
  return (
    <div className="rounded-xl px-4 py-3 flex items-center gap-4 w-fit shadow-lg">
      <div className="flex gap-[2px] items-end h-6">
        {Array.from({ length: barCount }).map((_, i) => (
          <motion.div
            key={i}
            className="w-[2px] bg-gradient-to-t from-purple-600 to-purple-300 rounded-full"
            animate={{
              height: [
                `${Math.random() * 8 + 8}px`,
                `${Math.random() * 20 + 10}px`,
                `${Math.random() * 8 + 8}px`,
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8 + Math.random() * 0.6,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
};
