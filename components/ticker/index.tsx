"use client";

import { getTickerData } from "@/utils/api";
import { TrendingDown, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface TickerItem {
  change: number;
  close: number;
  comp_name: string;
  company_id: number;
  date: string;
  high: number;
  id: number;
  low: number;
  mcap: number;
  open: number;
  pe: number;
  percent: number;
  prev_close: number;
  roce_ttm: number;
  roe_ttm: number;
  scripcode: number;
  symbol: string;
  volume: number;
}

function Ticker() {
  const [gainers, setGainers] = useState<TickerItem[]>([]);

  const handleGetTickerData = async () => {
    try {
      const response = await getTickerData();
      console.log(response);
      setGainers([...response?.data?.gainers, ...response?.data?.losers]);
    } catch (error) {
      console.error("Error fetching ticker data:", error);
    }
  };

  useEffect(() => {
    handleGetTickerData();
  }, []);

  return (
    <div className="sticky top-0 left-0 w-screen overflow-hidden bg-black text-white h-[40px] flex items-center">
      <div className="relative w-full whitespace-nowrap overflow-hidden">
        <div className="marquee-content py-2">
          {gainers.map((stock) => (
            <Link href={`/stocks/${stock.symbol}`} key={stock.id}>
              <div className="flex items-center mx-6 w-fit text-xs">
                <p className="font-semibold">{stock.symbol}</p>
                <p className="ml-2">{stock.close.toFixed(2)}</p>
                <p
                  className={`ml-2 ${
                    stock.change >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {stock.change >= 0
                    ? `+${stock.change.toFixed(2)}`
                    : stock.change.toFixed(2)}{" "}
                  ({stock.percent.toFixed(2)}%)
                </p>
                {stock.change >= 0 ? (
                  <TrendingUp size={15} className="ml-2" color="green" />
                ) : (
                  <TrendingDown color="red" size={15} className="ml-2" />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ticker;
