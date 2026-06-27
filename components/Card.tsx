'use client';

import { CartItem } from '@/types/cart-type'

import { useRouter } from 'next/navigation'


type Props = {
    data: CartItem
}

const Card = ({ data }: Props) => {
    const router = useRouter();
    return (
        <div className="cursor-pointer hover:bg-amber-50/20 hover:backdrop-blur-sm transition-all duration-300 p-2 rounded-lg" onClick={() => router.push(`/${data.id}`)}>
            <div
                className="relative w-[384px] h-[561px] md:w-250 md:h-250 rounded-3xl p-5 md:p-16  bg-red-300 overflow-hidden group flex flex-col justify-top bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url('${data?.image_url}')` }}
            >

                {/* Text Details */}
                <div className="">
                    <span className="inline-flex rounded-full bg-slate-900/90 text-[8.58px] md:text-[24px] px-4 py-2 text-white">
                        {data.prompt}
                    </span>
                    <p className="text-[7px] md:text-xl text-white leading-relaxed font-bold pt-5">
                        {data?.short_description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card