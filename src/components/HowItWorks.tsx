"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Describe your occasion",
    description:
      "Tell our AI where you're headed — a coffee date, business meeting, or weekend brunch.",
  },
  {
    number: "02",
    title: "Get curated looks",
    description:
      "Receive personalized outfit recommendations styled for your event, season, and preferences.",
  },
  {
    number: "03",
    title: "Save or shop",
    description:
      "Love a look? Save it to your collection or shop individual pieces with a single tap.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-wide uppercase text-sm mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Effortless style
            <br />
            <span className="text-accent">in three steps</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-accent/50 to-transparent" />
              )}

              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-foreground text-xl font-bold mb-6"
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-background/70 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
