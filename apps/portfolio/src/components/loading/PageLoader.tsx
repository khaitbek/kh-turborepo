"use client";

import { ReactNode } from "react"
import { motion } from "framer-motion";
import { cn } from "ui/lib/utils";

export const PageWrapper = ({
    children,
    className,
}: {
    children: ReactNode
    className?: string
  }) => {
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    return (
      <div>
        {children}
      </div>
    )
  }
  return (
      <>
          <motion.div className={cn("min-h-screen", className)}>
              <motion.div
                  className="fixed inset-0 w-full bg-rose-500"
                  initial={{ left: "-100%" }}
                  animate={{
                      left: "0%",
                      transitionEnd: {
                          left: "-100%",
                          transitionDuration: "1000ms",
                      },
                  }}
                  transition={{ duration: 1 }}
              ></motion.div>
              <motion.div
                  className="fixed inset-0 w-[80%] bg-stone-950"
                  initial={{ left: "100%" }}
                  animate={{ left: "-100%" }}
                  transition={{ duration: 1, delay: 1 }}
              ></motion.div>
              <motion.div
                  className="fixed inset-0 w-[70%] bg-white"
                  initial={{ left: "100%" }}
                  animate={{ left: "-100%" }}
                  transition={{ duration: 1, delay: 1.25 }}
              ></motion.div>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                  exit={{ opacity: 0, y: 20 }}
                  className={cn("min-h-screen", className)}
              >
                  {children}
              </motion.div>
          </motion.div>
      </>
  )
}