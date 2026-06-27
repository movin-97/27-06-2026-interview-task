"use client"


import Image from "next/image"
import { useRouter } from "next/navigation"


const Header = () => {
    const router = useRouter();

    const handleLogoClick = () => {
        router.push("/");
    }
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center py-16">
            <div className="flex flex-col items-center justify-center text-center">
                {/* Logo Container */}
                <div className="flex items-center mb-6">
                    <Image className="cursor-pointer" src="/assert/logo/logo.svg" alt="Logo" width={127} height={59} priority onClick={handleLogoClick} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-center">
                    <h1 className="text-[64px] md:text-[90px] font-bold leading-tight">alkye</h1>
                    <p className="text-[18px] md:text-[24px] text-gray-500 mt-2">
                        The easiest test you will ever do
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header