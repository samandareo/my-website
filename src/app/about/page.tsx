import ContainerHeader from "@/components/ContainerHeader";
import ContainerFooter from "@/components/ContainerFooter";
import Image from "next/image";
import profile_image from "@/images/profile_image.svg";
import location_image from "@/images/location_logo.svg";
import myStyle from "@/app/about/about.module.css";
import Link from "next/link";


export default function Home() {
  return (
      <div className="flex flex-col gap-y-2 w-10/12 mx-auto min-h-screen">
        <ContainerHeader/>
        <div className="mt-10">
            <h1 className="text-2xl font-semibold">About Me</h1>
            <div className="w-100 h-[0.5px] bg-white mt-2 opacity-50"></div>
        </div>
        <div className="flex flex-col gap-6 mt-4">
            <div className="flex gap-y-6 gap-x-6 md:flex-row flex-col items-center">
                <div className="flex justify-center items-center border-2 border-[#1E3A8A] rounded-2xl p-2 bg-[rgba(30,58,138,0.2)] sm:min-w-[150px] md:min-w-[200px]">
                    <Image
                        src={profile_image}
                        alt="profile_image"
                        width={250}
                        height={250}
                        className="rounded-md"
                    />
                </div>

                <div className="flex flex-col border-2 border-[#1E3A8A] rounded-2xl p-5 bg-[rgba(30,58,138,0.2)] gap-y-6">
                    <span className="flex flex-col">
                        <h2 className="text-4xl font-bold">SAMANDAR ABDUG&apos;AFFOROV</h2>
                        <h4 className="text-2xl font-extralight">Software Engineer | Full Stack</h4>
                    </span>
                    <span>
                        <p className="text-md font-light">Tech-loving kid who enjoys making videos, writing codes, build extraordinary products/projects and blogging on YouTube!</p>
                    </span>
                    <span className="flex gap-x-1 items-center">
                        <Image
                            src={location_image}
                            alt="location"
                            width={20}
                            height={20}
                        />
                        <h6>Earth <i className="font-sm font-extralight">(41.311158, 69.279737)</i></h6>
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <Link href="https://github.com/samandareo" className={myStyle.socialItem} target="_blank" rel="noopener noreferrer">
                    Github
                </Link>

                <Link href="https://www.linkedin.com/in/samandareo/" className={myStyle.socialItem} target="_blank" rel="noopener noreferrer">
                    Linkedin
                </Link>

                <Link href="https://x.com/samandareo" className={myStyle.socialItem} target="_blank" rel="noopener noreferrer">
                    ex-Twitter
                </Link>

                <Link href="https://t.me/samandareo7" className={myStyle.socialItem} target="_blank" rel="noopener noreferrer">
                    Telegram <span className="text-xs font-light">[life]</span>
                </Link>

                <Link href="https://t.me/samandareotech" className={`${myStyle.socialItem} md:col-start-2 lg:col-start-auto`} target="_blank" rel="noopener noreferrer">
                    Telegram <span className="text-xs font-light">[work]</span>
                </Link>

                <Link href="https://www.youtube.com/@abdugafforovs" className={myStyle.socialItem} target="_blank" rel="noopener noreferrer">
                    Youtube
                </Link>
            </div>
        </div>
        <ContainerFooter />
      </div>
)
  ;
}
