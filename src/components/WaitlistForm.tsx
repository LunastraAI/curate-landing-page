"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistFormProps {
  source: string;
  darkBackground?: boolean;
}

export default function WaitlistForm({ source, darkBackground = false }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://hook.us1.make.com/lhvmn1qsp9ssqfnf4fvbo3xgre8ykq66", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        throw new Error("Failed to submit");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center sm:text-left"
      >
        <div className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-accent/20 text-foreground">
          <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
          <span className="font-medium">You&apos;re on the list!</span>
        </div>
        <p className={`text-sm mt-3 ${darkBackground ? "text-background/70" : "text-gray-medium"}`}>
          We&apos;ll notify you when Curate launches.
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={`flex-1 px-5 py-4 rounded-full border-2 text-foreground placeholder:text-gray-medium focus:outline-none focus:border-accent transition-colors ${
            darkBackground
              ? "border-transparent bg-background"
              : "border-gray-light bg-background"
          }`}
          required
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 rounded-full font-medium hover:bg-foreground/90 transition-colors whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <AnimatePresence mode="wait">
            {status === "loading" ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin"
              />
            ) : (
              <motion.svg
                key="icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
              </motion.svg>
            )}
          </AnimatePresence>
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </button>
      </form>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-500 text-sm mt-3"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>

      {status !== "error" && (
        <p className={`text-sm mt-3 text-center sm:text-left ${darkBackground ? "text-background/70" : "text-gray-medium"}`}>
          Be the first to know when we launch. No spam, ever.
        </p>
      )}
    </div>
  );
}
