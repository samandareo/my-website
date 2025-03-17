"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContainerFooter() {
  return (
    <div className="w-full flex justify-center py-4 bg-transparent">
      <motion.div
        key="footer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4 }}
      >
        <span className="font-extralight text-sm text-center block">
          © 2025 <Link href="/" target="_blank" rel="noopener noreferrer">samandareo.live</Link>
        </span>
      </motion.div>
    </div>
  );
}
