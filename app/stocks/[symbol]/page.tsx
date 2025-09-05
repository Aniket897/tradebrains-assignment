import { getStockUsingSymbol } from "@/actions/stock";
import ErrorComponent from "@/components/error-component";
import StockDetailes from "@/components/stock-details";
import StockNotFound from "@/components/stock-not-found";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{
    symbol: string;
  }>;
}): Promise<Metadata> => {
  const { symbol } = await params;
  const { stock } = await getStockUsingSymbol(symbol);
  console.log(stock)

  if (!stock) {
    return {
      title: `Stock Not Found ! ${symbol}`,
      description: `No data available for stock symbol ${symbol}.`,
    };
  }

  return {
    title: `${stock.company} (${symbol}) | Stock Tracker`,
    description: `View real-time price charts, performance, and analysis for ${stock.company} (${symbol}).`,
  };
};

async function Page({
  params,
}: {
  params: Promise<{
    symbol: string;
  }>;
}) {
  const { symbol } = await params;
  const { error, stock } = await getStockUsingSymbol(symbol);

  if (error) return <ErrorComponent error={error} />;
  if (!stock) return <StockNotFound />;

  return <StockDetailes stock={stock} />;
}

export default Page;
