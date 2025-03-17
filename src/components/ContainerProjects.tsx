import githubLogo from '@/images/github_logo.svg';
import liveLogo from '@/images/live_logo.svg';

import Image from 'next/image';

export default function ContainerProjects() {
    return (
        <div className="flex flex-col gap-y-2 border-2 border-[#1E3A8A] rounded-lg p-4 bg-[rgba(30,58,138,0.2)]">
            <div className="flex flex-row justify-between items-center">
                <span className="flex flex-row gap-x-2 items-center flex-wrap">
                    <h2 className="text-xl font-semibold">Fake projects</h2>
                </span>
                <span className="flex gap-x-2">
                    <a href="">
                        <Image
                            src={liveLogo}
                            alt="live"
                            width={25}
                            height={25}
                            className="hover:scale-110 hover:cursor-pointer transition"
                        />
                    </a>
                    <a href="#github">
                        <Image
                            src={githubLogo}
                            alt="github"
                            width={25}
                            height={25}
                            className="hover:scale-110 hover:cursor-pointer transition"
                        />
                    </a>
                </span>
            </div>
            <p className="text-sm font-light">Lorem ipsum dolor, dolor is color, so we need to go to folor, you know and me know color. Lorem ipsum dolor, dolor is color, so we need to go to folor, you know and me know color. Lorem ipsum dolor, dolor is color, so we need to go to folor, you know and me know color.</p>
        </div>
    )
}