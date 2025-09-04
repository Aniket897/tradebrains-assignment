"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IStock } from "@/hooks/useSearchStock";
import useStockPrice from "@/hooks/useStockPrice";

interface IStockPriceGraphProps {
  stock: IStock;
}

function StockPriceGraph({ stock }: IStockPriceGraphProps) {
  const { loading, data } = useStockPrice(stock.symbol);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto h-64 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
        <div className="text-gray-500">Loading chart...</div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-gray-500">No data available</div>
      </div>
    );
  }

  const chartData = [...data]
    .map((item) => ({
      date: item.date,
      time: new Date(item.date).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      price: item.close,
      open: item.open,
      high: item.high,
      low: item.low,
      volume: item.volume,
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const priceChange =
    chartData.length > 1
      ? chartData[chartData.length - 1].price - chartData[0].price
      : 0;

  const prices = chartData.map((item) => item.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const padding = (maxPrice - minPrice) * 0.1;

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl border border-gray-200">
      <div className="flex justify-between items-center mb-4 p-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{stock.symbol}</h2>
          <p className="text-gray-600">{stock.company}</p>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <XAxis dataKey="time" hide={true} />
            <YAxis
              hide={true}
              domain={[minPrice - padding, maxPrice + padding]}
            />

            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
                      <p className="text-gray-700 text-xs">{`${payload[0].payload.time}`}</p>
                      <p className="text-gray-900 text-xs">{`₹${payload[0].value?.toFixed(
                        2
                      )}`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />

            <defs>
              <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="price"
              stroke={priceChange >= 0 ? "#10b981" : "#ef4444"}
              fill={priceChange >= 0 ? "url(#colorGreen)" : "url(#colorRed)"}
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                fill: priceChange >= 0 ? "#10b981" : "#ef4444",
                strokeWidth: 0,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default StockPriceGraph;
