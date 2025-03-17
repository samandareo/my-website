"use client";
import { motion } from "framer-motion";

export default function ContainerFooter() {
   return (
    <motion.div
        key="footer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4 }}
    >
       <div className="flex flex-row justify-center h-10">
            <span className="w-auto font-extralight">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                © 2024 <a href="/" className="">samandareo.live</a>
            </span>
       </div>
    </motion.div>
   );
}