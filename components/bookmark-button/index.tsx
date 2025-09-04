"use client";

import useBookmark from "@/hooks/useBookmark";
import { IStock } from "@/hooks/useSearchStock";
import { BookmarkMinus, BookmarkPlus } from "lucide-react";

interface IBookmarkButtonProps {
  stock: IStock;
}

function BookmarkButton({ stock }: IBookmarkButtonProps) {
  const { isInitializing, bookmarks, handleBookmark } = useBookmark();
  const isBookmarked = bookmarks.some(
    (bookmark) => bookmark.symbol === stock.symbol
  );

  if (isInitializing) return null;
  return (
    <div>
      <button
        onClick={() => handleBookmark(stock)}
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
