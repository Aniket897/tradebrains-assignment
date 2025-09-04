"use client";

import useBookmark from "@/hooks/useBookmark";
import { Bookmark } from "lucide-react";
import Link from "next/link";

function Bookmarks() {
  const { bookmarks } = useBookmark();

  return (
    <div className="max-w-md mx-auto space-y-7 py-[100px]">
      <div>
        <h1 className="font-bold flex items-center gap-2 text-xl">
          <Bookmark fill="black" />
          Your Bookmarks
        </h1>
      </div>
      <div className="h-[500px] flex flex-col gap-1 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-sm p-3">
        {!bookmarks.length && (
          <div className="p-4 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg text-center">
            You haven{"'"}t bookmarked anything 🚫
          </div>
        )}
        {bookmarks.map((bookmark) => {
          return (
            <Link href={`/stocks/${bookmark.symbol}`} key={bookmark.symbol}>
              <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <p className="font-medium text-gray-800">{bookmark.company}</p>
                <p className="bg-green-100 text-green-700 text-xs font-semibold rounded-full px-3 py-1 shadow-sm">
                  {bookmark.symbol}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Bookmarks;
