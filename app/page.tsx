"use client";
import Card from "@/components/Card";
import { useGetItemsQuery } from "@/services/itemApi";
import { CartItem } from "@/types/cart-type";

export default function Home() {

  const { data: items, isLoading, error } = useGetItemsQuery(undefined);

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

  if (!items) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white">
        <div className="text-red-400">Item not found.</div>
      </div>
    );
  }

  return (

    <div className="container mx-auto p-4">

      {/* Horizontal Scroll Wrapper */}
      <section className="mt-2 overflow-hidden">

        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-10">

          {items?.map((item: CartItem) => (
            <Card key={item.id} data={item} />
          ))}

        </div>
      </section>
    </div>
  );
}