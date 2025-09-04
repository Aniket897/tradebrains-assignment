"use client";

import { useEffect, useState } from "react";

const useDebounce = (initialText: string, debouceTimer: number) => {
  const [debouncedText, setDebouncedText] = useState(initialText);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(initialText);
    }, debouceTimer);

    return () => {
      clearTimeout(timer);
    };
  }, [initialText, debouceTimer]);


  return debouncedText;
};

export default useDebounce;
