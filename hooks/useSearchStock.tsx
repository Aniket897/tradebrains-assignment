"use client";

import { useEffect, useState } from "react";
import useDebounce from "./useDebouce";
import { searchAPI } from "@/utils/api";

export interface IStock {
  type: "stock";
  symbol: string;
  company: string;
}

const useSearchStock = () => {
  const [stocks, setStocks] = useState<IStock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  const search = (text: string) => {
    console.log("new search");
    setText(text);
  };

  console.log(debouncedText);
  useEffect(() => {
    console.log("searching for :", debouncedText);
    handleFetchStocks(debouncedText);
  }, [debouncedText]);

  const handleFetchStocks = async (text: string) => {
    try {
      setLoading(true);
      setError(false);
      const response = await searchAPI(text);
      setStocks(response.data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    search,
    stocks,
  };
};

export default useSearchStock;
