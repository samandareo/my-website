"use client";

export default function ContainerFooter() {
   return (
       <div className="flex flex-row justify-center h-10">
            <span className="w-auto font-extralight">
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                © 2024 <a href="/" className="">samandareo.live</a>
            </span>
       </div>
   );
}