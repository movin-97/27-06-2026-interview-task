"use client";
import Card from "@/components/Card";
import { useGetItemsQuery } from "@/services/itemApi";
import { Item } from "@/types/cart-type";

export default function Home() {

  const { data: items, isLoading, error } = useGetItemsQuery(undefined);

  if
    (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching items.</div>;
  }

  return (

    <div className="container mx-auto p-4">

      {/* Horizontal Scroll Wrapper */}
      <div className="flex overflow-x-auto gap-6 pb-4 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items?.map((item: Item) => (
          <div key={item.id} className="snap-start shrink-0">
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}