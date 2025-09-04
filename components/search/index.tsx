"use client";


import useSearchStock from "@/hooks/useSearchStock";
import { Search } from "lucide-react";
import Result from "./result";

function SearchComponent() {
  const { loading, search, stocks, error } = useSearchStock();
  return (
    <div className="py-[100px]">
      <div className="max-w-md mx-auto space-y-3">
        <div className="relative  w-full">
          <input
            placeholder="Search stock"
            onChange={(e) => search(e.target.value)}
            className="w-full bg-white py-3 pl-12 pr-4 border border-gray-200 rounded-full shadow-sm focus:border-green-500 outline-none transition-all duration-200 placeholder-gray-400 text-gray-700"
          />
          <Search className="text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
        </div>
        <div className="h-[500px] flex flex-col gap-1 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-sm p-3">
          <Result stocks={stocks} error={error} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
