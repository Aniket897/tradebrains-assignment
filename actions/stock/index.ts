import { IStock } from "@/hooks/useSearchStock";
import { searchAPI } from "@/utils/api";

export const getStockUsingSymbol = async (
  symbol: string
): Promise<{
  error: string;
  stock: IStock | null;
}> => {
  try {
    const [searchResponse] = await Promise.all([searchAPI(symbol)]);

    if (!searchResponse.data.length) {
      return {
        error: "Stock not found!",
        stock: null,
      };
    }
    return {
      stock: searchResponse.data[0],
      error: "",
    };
  } catch {
    return {
      error: "Something went wrong while fetching details!",
      stock: null,
    };
  }
};
