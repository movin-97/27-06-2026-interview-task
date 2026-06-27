'use client';

import { use } from "react";
import { useGetItemsQuery } from "@/services/itemApi";
import { CartItem } from "@/types/cart-type";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function ItemDetailsPage({ params }: PageProps) {
    // Unwrap the params promise safely in Next.js
    const { id } = use(params);
    const { data: items, error, isLoading } = useGetItemsQuery(undefined);
    const item = items?.find((candidate: CartItem) => String(candidate.id) === id);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-pulse text-lg">Loading details...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white">
                <div className="text-red-400">Failed to load item.</div>
            </div>
        );
    }

    if (!item) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white">
                <div className="text-red-400">Item not found.</div>
            </div>
        );
    }

    return (
        <main className="mt-10">
            <section className="">
                <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-[42vh] object-cover sm:h-[48vh] lg:h-250"
                />
            </section>

            <section className="mx-auto max-w-6xl px-10 md:px-16 py-10 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                    <span className="inline-flex rounded-full bg-slate-900/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-sm shadow-black/20">
                        {item.prompt}
                    </span>

                    <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                        {item.title}
                    </h1>

                    <p className="mt-6 text-base leading-8 sm:text-lg">
                        {item.short_description}
                    </p>
                </div>


            </section>
        </main>
    );
}
