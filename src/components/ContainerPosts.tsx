"use client"
import visibilityIcon from "@/images/visibility.svg"
import myStyle from "@/components/posts.module.css"
import Image from "next/image";
import {useRouter} from "next/navigation";


export default function ContainerPosts() {

    const router = useRouter();
    const posts = [
        {
            "id" : "1",
            "title" : "Installing Docker and docker-compose on Ubuntu server🐋",
            "date" : "November 10, 2024",
            "views" : "17",
            "description" : "First of all, we need to update the local packages."
        },
        {
            "id" : "2",
            "title" : "Installing Dlib adventures",
            "date" : "October 14, 2024",
            "views" : "48",
            "description" : "Text of the printing and typesetting industry."
        }
    ]


    const navigateToPost = (title:string) => {
        const url_title = title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g,"") // Remove non-alphanumeric characters
            .replace(/\s+/g, "-")       // Replace spaces with hyphens
            .trim();
        router.push(url_title)

    }
    return (
       <div className="flex flex-col gap-3 items-center">
           {posts.map((item) => (
               <div key={item.id} className={`w-[90%] p-3 ${myStyle.borderStyle} flex flex-col gap-1 hover:cursor-pointer hover:scale-[1.03] transition`} onClick={() => {navigateToPost(item.title)}}>
                   <div className="flex justify-between">
                       <span className="text-[17px]">{item.title}</span>
                       <span className="text-[14px]">{item.date}</span>
                   </div>

                   <div className="flex justify-between">
                       <span className="text-sm font-extralight">{item.description}</span>
                       <span className="text-[16px] font-extralight flex flex-row">
                       <Image src={visibilityIcon} className="mx-1 opacity-65" alt="Visibility icon" width={15}/>
                           {item.views}
                   </span>
                   </div>
               </div>
           ))}
       </div>
    );
}