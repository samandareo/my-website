"use client";
import ContainerHeader from "@/components/ContainerHeader";
import ContainerPosts from "@/components/ContainerPosts";
import ContainerFooter from "@/components/ContainerFooter";
import "./globals.css"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {

  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const loadingText = "< SAMANDAREO />"
  useEffect(() => {
    const fetchPosts = async () => {
        try {
            const response = await fetch("https://pwb-xcls.onrender.com/api/posts");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Failed to fetch posts",error);
        }
    }

    fetchPosts();

  }, [])

  useEffect(() => {
    if (posts.length > 0) {
      setIsLoading(false)
    }
  }, [posts])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="loadingText">{loadingText}</h1>
      </div>
    );
  }

  return (
      <div className="flex flex-col gap-y-36">
        <ContainerHeader/>
        <motion.div
          key="title"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ scale: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center w-100">
              <span
                  className={`font-bold text-5xl text-center animate-pulse transition hover:cursor-auto select-none hover:animate-none openingTitle`}>Welcome to <i
                  className="not-italic">SAMANDAREO</i>&apos;s Space!
              </span>
          </div>
        </motion.div>
        <ContainerPosts Posts={posts}/>
        <ContainerFooter />
      </div>
)
  ;
}
