import { IStock } from "@/hooks/useSearchStock";
import BookmarkButton from "../bookmark-button";
import StockPriceGraph from "../stock-price-graph";

interface IStockDetailsProps {
  stock: IStock;
}

function StockDetailes({ stock }: IStockDetailsProps) {
  return (
    <div>
      <div className="flex items-center justify-between p-5 border-b border-gray-200">
        <div>
          <h1 className="text-xl font-bold">{stock.company}</h1>
        </div>
        <div>
          <BookmarkButton stock={stock} />
        </div>
      </div>
      <div className="flex-1 w-full py-[100px]">
        <StockPriceGraph stock={stock} />
      </div>
    </div>
  );
}

export default StockDetailes;
