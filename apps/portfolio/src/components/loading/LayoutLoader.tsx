"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const LayoutWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: 1 }}
      className={cn(className, "overflow-x-hidden")}
    >
      {children}
    </motion.div>
  </>
);