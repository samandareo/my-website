"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-mde/lib/styles/css/react-mde-all.css";
import { refreshToken } from "@/utils/auth";
import { useRouter } from "next/navigation";
import Showdown from "showdown";

const ReactMde = dynamic(() => import("react-mde"), { ssr: false});

export default function CreatePostPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");
    const [images, setImages] = useState<File[]>([]);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("access_token");
            const refresh_token = localStorage.getItem("refresh_token");

            if (!token && refresh_token) {
                const newToken = await refreshToken();
                if (!newToken){
                    alert("Your session has expired. Please log in again!");
                    router.push("/login");
                }
            }else if (!token && !refresh_token) {
                alert("You must be logged in to access this page.");
                router.push("/login");
            }
        };

        checkAuth();
    }, [router]);

    const converter = new Showdown.Converter();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImages(Array.from(event.target.files));
        }
    };

    const handleLogOut = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/token/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "refresh": localStorage.getItem("refresh_token") })
        })
        
        const data = await response.json();

        if (response.ok) {
            alert("Logged out successfully!")
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            router.push("/login")
        } else {
            alert(`Failed to log out: ${data.detail}`)
        }
    }
    

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("content", content);

        images.forEach((image) => {
            formData.append("images", image);
        });

        try {
            const response = await fetch("http://127.0.0.1:8000/api/posts/", {
                method: "POST",
                headers: { 
                    "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
                },
                body: formData,
            });
    
            if (response.ok) {
                alert("Post created successfully!")
                window.location.reload();
            } else {
                alert("Failed to create post.")
            }
        } catch (error) {
            console.error("Failed to create post.", error);
        }

    };

    return (
        <div className="container mx-auto p-6 bg-gray-900 min-h-screen text-white flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Create a New Post</h1>
                <button
                onClick={handleLogOut}
                className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-800 hover:cursor-pointer w-1/8"
                >Log out</button>
            </div>

            <div className="flex flex-col gap-4">
                <input 
                    type="text"
                    placeholder="Enter post title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded"
                />
                <textarea 
                    placeholder="Enter post description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded"
                />
            </div>

            <div className="bg-gray-800 p-3 rounded-md">
                <ReactMde 
                    value={content}
                    onChange={setContent}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={(markdown) =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }

                    classes={{
                        reactMde: "border-4",
                        toolbar: "text-black text-md",
                        textArea: "bg-gray-900 text-white p-3 rounded-md",
                        preview: "bg-gray-900 text-white p-3 rounded-md",
                    }}
                />
            </div>
            <div>
                <input 
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="bg-gray-900 text-white p-2 rounded-md"
                />
            </div>
            
            <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 hover:cursor-pointer w-1/6 ml-auto"
            >Create post</button>
        </div>
    )


}