"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

export default function CTA() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gray-light rounded-[2.5rem] p-8 md:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to elevate
                <br />
                <span className="text-accent">your style?</span>
              </h2>
              <p className="text-gray-medium text-lg mb-8 max-w-md">
                Be the first to experience AI-powered styling.
                Join the waitlist for early access.
              </p>

              <div id="waitlist" className="max-w-md">
                <WaitlistForm source="cta-section" />
              </div>
            </motion.div>

            {/* Right side - Phone mockups */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Back phone */}
                <motion.div
                  initial={{ rotate: -6 }}
                  whileHover={{ rotate: -3, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -left-8 top-8 bg-black rounded-[2rem] p-1.5 shadow-xl opacity-60"
                >
                  <div className="bg-background rounded-[1.7rem] overflow-hidden">
                    <Image
                      src="/screenshots/saved-looks.png"
                      alt="Saved looks"
                      width={160}
                      height={347}
                      className="w-[140px] h-auto"
                    />
                  </div>
                </motion.div>

                {/* Front phone */}
                <motion.div
                  initial={{ rotate: 6 }}
                  whileHover={{ rotate: 3, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 bg-black rounded-[2rem] p-1.5 shadow-2xl"
                >
                  <div className="bg-background rounded-[1.7rem] overflow-hidden">
                    <Image
                      src="/screenshots/outfit-detail.png"
                      alt="Outfit detail"
                      width={200}
                      height={433}
                      className="w-[180px] h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
