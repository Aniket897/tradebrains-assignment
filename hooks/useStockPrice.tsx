import { getStockPriceApi } from "@/utils/api";
import { useCallback, useEffect, useState } from "react";

export interface IStockPrice {
  open: number;
  high: number;
  low: number;
  close: number;
  date: string;
  volume: number;
}

const useStockPrice = (symbol: string) => {
  const [data, setData] = useState<IStockPrice[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleFetchStockPricing();
  }, []);

  const handleFetchStockPricing = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getStockPriceApi(symbol);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [symbol]);

  return {
    loading,
    data,
  };
};

export default useStockPrice;
