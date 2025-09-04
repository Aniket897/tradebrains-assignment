import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const searchAPI = async (search: string) => {
  const response = await api.get(
    `/api/assignment/search?keyword=${search}&length=50`
  );
  return response;
};

export const getStockPriceApi = async (symbol: string) => {
  const response = await api.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/assignment/stock/${symbol}/prices?days=1&type=INTRADAY&limit=15`
  );
  return response;
};

export const getTickerData = async () => {
  const response = await api.get("/api/assignment/index/NIFTY/movers/");
  return response;
};
