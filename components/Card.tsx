'use client';

import { Item } from '@/types/cart-type'

import { useRouter } from 'next/navigation'


type Props = {
    data: Item
}

const Card = ({ data }: Props) => {
    const router = useRouter();
    return (
        <div className="cursor-pointer hover:bg-amber-50/20 hover:backdrop-blur-sm transition-all duration-300 p-6 rounded-lg" onClick={() => router.push(`/${data.id}`)}>
            <div
                className="relative w-[1000px] h-[700px] rounded-3xl p-12  bg-red-300 overflow-hidden group flex flex-col justify-top bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url('${data?.image_url}')` }}
            >

                {/* Text Details - Enlarged for 1000px layout */}
                <div className="">
                    <h3 className=" font-extrabold bg-black p-2 text-white tracking-tight leading-none rounded-full">
                        {data?.title}
                    </h3>
                    <p className="text-xl text-slate-200 leading-relaxed font-medium pt-5">
                        {data?.short_description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card