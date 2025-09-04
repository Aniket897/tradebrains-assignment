import { IStock } from "@/types/stock";
import Link from "next/link";

interface IResultProps {
  stocks: IStock[];
  loading: boolean;
  error: boolean;
}

function Result({ stocks, loading, error }: IResultProps) {
  if (loading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2 px-3 rounded-lg animate-pulse"
          >
            <div className="h-4 w-40 bg-gray-200 rounded-md"></div>
            <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-sm text-red-700 bg-red-100 border border-red-200 rounded-lg">
        ⚠️ Something went wrong. Please try again.
      </div>
    );
  }

  if (!stocks.length) {
    return (
      <div className="p-4 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg text-center">
        No results found 🚫
      </div>
    );
  }

  /**
   * in data some stocks symbol is null
   * so filtering stocks which  has symbol
   */

  const filteredStocks = stocks.filter((stock) => stock.symbol);

  return (
    <>
      {filteredStocks.map((stock) => (
        <Link href={`/stocks/${stock.symbol}`} key={stock.symbol}>
          <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
            <p className="font-medium text-gray-800">{stock.company}</p>
            <p className="bg-green-100 text-green-700 text-xs font-semibold rounded-full px-3 py-1 shadow-sm">
              {stock.symbol}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Result;
