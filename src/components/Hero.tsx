"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <span className="block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Curate.
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl text-accent mt-3 italic font-normal" style={{ fontFamily: 'var(--font-playfair)' }}>
                Your AI Stylist
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-medium text-lg md:text-xl mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Describe the occasion. Get perfectly styled outfit recommendations.
              Shop the look — all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="w-full max-w-md mx-auto lg:mx-0"
            >
              <WaitlistForm source="hero" />
            </motion.div>
          </motion.div>

          {/* Right side - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-light/30 blur-3xl scale-110 rounded-full" />

              {/* Phone frame */}
              <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  <Image
                    src="/screenshots/hero-chat.png"
                    alt="Curate app interface"
                    width={300}
                    height={650}
                    className="w-[280px] md:w-[300px] h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-medium/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
