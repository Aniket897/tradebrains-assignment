import { IStock } from "@/hooks/useSearchStock";
import { getStockAPI, searchAPI } from "@/utils/api";

export const getStockUsingSymbol = async (
  symbol: string
): Promise<{
  error: string;
  stock: IStock | null;
}> => {
  try {
    console.log(symbol);
    const searchResponse = await getStockAPI(symbol);
    // const [searchResponse] = await Promise.all([searchAPI(symbol)]);

    console.log("searchdata :" , searchResponse.data.stock)

    if (!searchResponse.data.stock.length) {
      return {
        error: "Stock not found!",
        stock: null,
      };
    }
    return {
      stock: searchResponse.data.stock[0],
      error: "",
    };
  } catch {
    return {
      error: "Something went wrong while fetching details!",
      stock: null,
    };
  }
};
