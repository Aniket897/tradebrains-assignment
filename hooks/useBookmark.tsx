"use client";

import { useEffect, useState } from "react";
import { IStock } from "./useSearchStock";

const useBookmark = () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [bookmarks, setBookmarks] = useState<IStock[]>([]);

  useEffect(() => {
    setBookmarks(JSON.parse(localStorage.getItem("stock-bookmarks") || "[]"));
    setIsInitializing(false);
  }, []);

  const handleBookmark = (stock: IStock) => {
    const isBookmarked = bookmarks.some(
      (bookmark) => bookmark.symbol === stock.symbol
    );

    if (isBookmarked) {
      const newBookmarks = bookmarks.filter(
        (bookmark) => bookmark.symbol !== stock.symbol
      );
      localStorage.setItem("stock-bookmarks", JSON.stringify(newBookmarks));
      setBookmarks(newBookmarks);
    } else {
      const newBookmarks = [...bookmarks, { ...stock }];
      localStorage.setItem("stock-bookmarks", JSON.stringify(newBookmarks));
      setBookmarks(newBookmarks);
    }
  };

  return {
    bookmarks,
    handleBookmark,
    isInitializing,
  };
};

export default useBookmark;
