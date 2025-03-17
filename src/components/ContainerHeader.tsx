"use client"
import Image from "next/image";
import logo from "@/images/logo.png"
import chat from "@/images/chat.svg"
import {useState} from "react";
import mystyle from "@/components/header.module.css"

export default function ContainerHeader() {

    // Variables
    const [activeBtn, setActiveBtn] = useState("Home");

    const activeBtnHandler = (btn_name:string) => {
        setActiveBtn(btn_name);
    }

    return (
        <header className={`flex flex-col gap-y-24 mt-2 sticky top-0 z-50 ${mystyle.bgBlur}`}>
            <div className="container mx-auto h-115 flex justify-between items-center py-3 px-6">
                <Image src={logo} alt="logo" width={60} height={60} className="hover:scale-110 hover:cursor-pointer transition"/>
                <div>
                    <ul className="flex gap-3 font-normal hover:cursor-pointer select-none">
                        <li onClick={() => activeBtnHandler("Home")} className={`${activeBtn == "Home" ? mystyle.activeBtn : mystyle.customBtn}`}>Home</li>
                        <li onClick={() => activeBtnHandler("Works")} className={`${activeBtn == "Works" ? mystyle.activeBtn : mystyle.customBtn}`}>Works</li>
                        <li onClick={() => activeBtnHandler("About")} className={`${activeBtn == "About" ? mystyle.activeBtn : mystyle.customBtn}`}>About</li>
                    </ul>
                </div>
                <Image src={chat} alt="chat" width={30} height={30} className="hover:scale-110 hover:cursor-pointer transition"/>
            </div>
        </header>
    );
}