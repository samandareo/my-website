"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import ContainerFooter from "@/components/ContainerFooter";
import ContainerHeader from "@/components/ContainerHeader";
import { useRouter } from "next/navigation";
import arrow_back from "@/images/arrow_back.svg";
import Image from "next/image"
import ReactMarkdown from "react-markdown";

export default function PostPage() {
    const { slug } = useParams();
    const router = useRouter();
    
    interface Post {
        title: string;
        slug: string;
        description: string;
        content: string;
        created_at: string;
        views: number;
        images: object;
    }

    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://pwb-xcls.onrender.com/api/posts/${slug}/`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error("Failed to fetch post", error);
            }
        };

        const incrementViews = async () => {
            try {
                await fetch(`https://pwb-xcls.onrender.com/api/posts/${slug}/increment-views/`, {
                    method: "GET",
                });
            } catch (error) {
                console.error("Error incrementing views: ", error);
            }
        };

        if (slug) {
            fetchPost();
            incrementViews();
        }
    }, [slug]);

    if (!post) return <p className="mx-auto">Loading ...</p>

    const navigateToPosts = () => {
        router.push("/");
    }

    const formatDate = (isoDate: string | null | undefined) => {
        if (!isoDate) return "Invalid date";
        
        const parsedDate = new Date(isoDate);
        if (isNaN(parsedDate.getTime())) return "Invalid date";

        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        }).format(parsedDate)
    };

    const formatViews = (views?: number) => {
        if (views === undefined || views === null) return "0"

        if (views >= 1_000_000) {
            return (views / 1_000_000).toFixed(1).replace(".0", "") + "M";
        }
        if (views >= 1_000) {
            return (views / 1_000).toFixed(1).replace(".0","") + "K";
        }
        return views.toString();
    }


    return (
        <div className="flex flex-col">
            <ContainerHeader />
            <div className="container mx-auto py-4 px-6">

                <div className="justify-items-start mt-14 mb-4">
                    <span className="flex gap-x-2 hover:opacity-50 hover:cursor-pointer select-none" onClick={() => navigateToPosts()}>
                        <Image src={arrow_back} alt={""} height={12} width={12} />
                        <span className="text-sm font-light">Back to home</span>
                    </span>
                </div>

                <h1 className="text-3xl font-bold">{post.title}</h1>
                <span className="flex flex-col gap-y-1 mt-7">
                    <span className="flex gap-x-12 text-sm">
                        <span className="flex gap-x-2">
                            <span className="font-semibold">Date:</span>
                            <span className="font-light">{formatDate(post.created_at)}</span>
                        </span>
                        <span className="flex gap-x-2">
                            <span className="font-semibold">Views:</span>
                            <span className="font-light">{formatViews(post.views)}</span>
                        </span>
                    </span>
                    <span>
                        <p>{post.description}</p>
                    </span>
                    <div className="w-100 h-[0.5px] bg-white mt-3 opacity-50"></div>
                </span>
                <div className="prose lg:prose-xl mt-4">
                <ReactMarkdown
                    components={{
                        img: ({ src, alt }) => (
                            <Image
                                unoptimized
                                src={src || ""}
                                alt={alt || ""}
                                width={800}
                                height={400}
                                className={`rounded-2xl mx-auto w-full md:w-1/2 border-2 border-[#1E3A8A] m-2`}
                                layout="responsive"

                            />
                        ),
                        strong: ({ children }) => <strong className={`text-[#2d56c7]`}>{children}</strong>,
                        
                    }}
                >
                    {post.content}
                </ReactMarkdown>
                </div>

            </div>
            <ContainerFooter />
        </div>
    );
} 