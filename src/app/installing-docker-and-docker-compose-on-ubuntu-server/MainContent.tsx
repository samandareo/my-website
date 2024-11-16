"use client"
import {useRouter} from "next/navigation";
export default function MainContent() {
    const router = useRouter();

    const navigatePage = () => {
        router.push("/")
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[80%]">
                <div className="justify-items-start">
                    <span className="hover:opacity-50 hover:cursor-pointer select-none" onClick={() => navigatePage()}>Back</span>
                </div>
                <div className="h-52">
                    Will be soon...
                </div>
            </div>
        </div>
    )
}