import { getStockUsingSymbol } from "@/actions/stock";
import ErrorComponent from "@/components/error-component";
import StockDetailes from "@/components/stock-details";
import StockNotFound from "@/components/stock-not-found";

async function page({
  params,
}: {
  params: {
    symbol: string;
  };
}) {
  const { error, stock } = await getStockUsingSymbol(params.symbol);

  if (error) return <ErrorComponent error={error} />;
  if (!stock) return <StockNotFound />;

  return <StockDetailes stock={stock} />;
}

export default page;
