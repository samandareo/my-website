import Image from "next/image";
import ContainerHeader from "@/components/ContainerHeader";
import ContainerPosts from "@/components/ContainerPosts";
import ContainerFooter from "@/components/ContainerFooter";
import "./globals.css"

export default function Home() {
  return (
      <div className="flex flex-col gap-y-36">
        <ContainerHeader/>
        <div className="flex justify-center items-center w-100">
            <span
                className={`font-bold text-5xl text-center animate-pulse transition hover:cursor-auto select-none hover:animate-none openingTitle`}>Welcome to <i
                className="not-italic">SAMANDAREO</i>'s Space!
            </span>
        </div>
        <ContainerPosts />
        <ContainerFooter />
      </div>
)
  ;
}
