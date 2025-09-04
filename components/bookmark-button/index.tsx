"use client";

import { BookmarkMinus, BookmarkPlus } from "lucide-react";
import { useState } from "react";

interface IBookmarkButtonProps {
  symbol: string;
}

function BookmarkButton({ symbol }: IBookmarkButtonProps) {
  const [bookmarks, setBookmarks] = useState<string[]>(
    JSON.parse(window.localStorage.getItem("stocks-bookmarks") || "[]")
  );

  console.log(bookmarks);
  const isBookmarked = bookmarks.includes(symbol);
  console.log(isBookmarked);

  const handleBookmark = () => {
    if (isBookmarked) {
      const newBookmarks = bookmarks.filter((bookmark) => bookmark !== symbol);
      window.localStorage.setItem(
        "stocks-bookmarks",
        JSON.stringify(newBookmarks)
      );
      setBookmarks(newBookmarks);
    } else {
      const newBookmarks = [...bookmarks, symbol];
      window.localStorage.setItem(
        "stocks-bookmarks",
        JSON.stringify(newBookmarks)
      );
      setBookmarks(newBookmarks);
    }
  };
  return (
    <div>
      <button
        onClick={handleBookmark}
        className={` text-white flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-bold cursor-pointer text-xs ${
          !isBookmarked
            ? "bg-green-500 hover:bg-green-500/90"
            : "bg-red-500 hover:bg-red-500/90"
        }`}
      >
        {!isBookmarked ? (
          <>
            <BookmarkPlus size={15} />
            Mark as favorite
          </>
        ) : (
          <>
            <BookmarkMinus size={15} />
            Remove from favorites
          </>
        )}
      </button>
    </div>
  );
}

export default BookmarkButton;
