"use client"
import Image from "next/image";
import logo from "@/images/logo.png"
import chat from "@/images/chat.svg"
import {useState} from "react";
import mystyle from "@/components/header.module.css"
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ContainerHeader() {
    // Variables
    const router = useRouter();
    const pathname = usePathname();

    // Functions
    const getActiveBtn = () => {
        if (pathname === "/") return "Home";
        if (pathname === "/works") return "Works";
        if (pathname === "/about") return "About";
        return "";
    }

    const activeBtn = getActiveBtn();

    const pageNavigator = (page_name:string) => {
        if (page_name == "Home") {
            router.push("/");
            return;
        } else {
            router.push(`/${page_name.toLowerCase()}`);
        }
    }


    return (
        <motion.div
            key="header"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 30 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
        >
        <header className={`flex flex-col gap-y-24 mt-2 sticky top-0 z-50 ${mystyle.bgBlur}`}>
            <div className="container mx-auto h-115 flex justify-between items-center py-3 px-6">
                <Image src={logo} alt="logo" width={60} height={60} className="hover:scale-110 hover:cursor-pointer transition"/>
                <div>
                    <ul className="flex gap-3 font-normal hover:cursor-pointer select-none">
                        <li onClick={() => pageNavigator("Home")} className={`${activeBtn == "Home" ? mystyle.activeBtn : mystyle.customBtn}`}>Home</li>
                        <li onClick={() => pageNavigator("Works")} className={`${activeBtn == "Works" ? mystyle.activeBtn : mystyle.customBtn}`}>Works</li>
                        <li onClick={() => pageNavigator("About")} className={`${activeBtn == "About" ? mystyle.activeBtn : mystyle.customBtn}`}>About</li>
                    </ul>
                </div>
                <Image src={chat} alt="chat" width={30} height={30} className="hover:scale-110 hover:cursor-pointer transition"/>
            </div>
        </header>
        </motion.div>
    );
}