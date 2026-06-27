'use client';

import { use } from "react";
import { useGetItemByIdQuery } from "@/services/itemApi";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default function ItemDetailsPage({ params }: PageProps) {
    // Unwrap the params promise safely in Next.js
    const { id } = use(params);
    const { data: item, error, isLoading } = useGetItemByIdQuery(id);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white">
                <div className="animate-pulse text-lg">Loading details...</div>
            </div>
        );
    }

    if (error || !item) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white">
                <div className="text-red-400">Failed to load item or item not found.</div>
            </div>
        );
    }

    return (
        <div
            className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-end p-8 md:p-16"
            style={{ backgroundImage: `url('${item.backgroundImageUrl}')` }}
        >
            {/* Absolute Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-0" />

            {/* Main Details Wrapper */}
            <div className="relative z-10 max-w-4xl space-y-6">
                <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md text-white border border-white/20 uppercase tracking-wide"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
                    {item.title}
                </h1>

                <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
                    {item.description}
                </p>
            </div>
        </div>
    );
}

function useGetItemByIdQuery(id: string): { data: any; error: any; isLoading: any; } {
    throw new Error("Function not implemented.");
}
