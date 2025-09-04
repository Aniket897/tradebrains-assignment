"use client";

import SearchComponent from "@/components/search";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="py-2 px-4 flex justify-end">
        <Link href={"/bookmarks"}>
          <div className="flex items-center gap-2 border border-gray-200 py-2 px-4 w-fit rounded-md text-xs hover:bg-gray-300">
            Your Bookmarks
            <ArrowRight size={15} />
          </div>
        </Link>
      </div>
      <SearchComponent />
    </div>
  );
}
