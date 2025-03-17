"use client"
import visibilityIcon from "@/images/visibility.svg"
import myStyle from "@/components/posts.module.css"
import Image from "next/image";
import {useRouter} from "next/navigation";
import { motion } from "framer-motion";

interface Post {
    id: number; // or number — based on your backend
    title: string;
    slug: string;
    created_at: string; // or Date, if already converted
    description: string;
    views: number;
}

export default function ContainerPosts({Posts}: Readonly<{Posts: Post[]}>) {
    const posts = Posts;
    const router = useRouter();

    const formatDate = (isoDate: string) => {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        }).format(new Date(isoDate))
    };

    const formatViews = (views: number) => {
        if (views >= 1_000_000) {
            return (views / 1_000_000).toFixed(1).replace(".0", "") + "M";
        }
        if (views >= 1_000) {
            return (views / 1_000).toFixed(1).replace(".0","") + "K";
        }
        return views.toString();
    }

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try {
    //             const response = await fetch("https://pwb-xcls.onrender.com/api/posts");
    //             const data = await response.json();
    //             setPosts(data);
    //         } catch (error) {
    //             console.error("Failed to fetch posts",error);
    //         }
    //     }

    //     fetchPosts();
    // }, [])


    const navigateToPost = (slug: string) => {
        router.push(`/posts/${slug}`);
    }

    return (
        <motion.div
            key="post"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ scale: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col gap-3 items-center">
                {posts.map((item: Post) => (
                    <div key={item.id} className={`w-[90%] p-3 ${myStyle.borderStyle} flex flex-col gap-1 hover:cursor-pointer hover:scale-[1.03] transition`} onClick={() => {navigateToPost(item.slug)}}>
                        <div className="flex justify-between">
                            <span className="text-[17px]">{item.title}</span>
                            <span className="text-[14px]">{formatDate(item.created_at)}</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-sm font-extralight">{item.description}</span>
                            <span className="text-[16px] font-extralight flex flex-row">
                            <Image src={visibilityIcon} className="mx-1 opacity-65" alt="Visibility icon" width={15}/>
                                {formatViews(item.views)}
                        </span>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}