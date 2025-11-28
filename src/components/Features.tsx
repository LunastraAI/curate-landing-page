"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Occasion-based styling",
    description:
      "Date night? Job interview? Beach vacation? Just tell us where you're going and we'll curate the perfect outfit.",
    image: "/screenshots/hero-chat.png",
  },
  {
    title: "Save your favorites",
    description:
      "Build your digital lookbook. Save outfits you love and access them anytime you need inspiration.",
    image: "/screenshots/saved-looks.png",
  },
  {
    title: "Shop the look",
    description:
      "Love an item? Tap to shop it instantly. Every piece is handpicked and ready to add to your wardrobe.",
    image: "/screenshots/outfit-detail.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Your closet&apos;s new
            <br />
            <span className="text-accent">best friend</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gray-light rounded-3xl p-6 pb-0 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Phone mockup */}
                <div className="relative mx-auto w-fit">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black rounded-[2rem] p-1.5 shadow-xl"
                  >
                    <div className="bg-background rounded-[1.7rem] overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={200}
                        height={433}
                        className="w-[180px] h-auto"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-medium">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
