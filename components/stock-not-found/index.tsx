import { CircleAlert } from "lucide-react";
import React from "react";

function StockNotFound() {
  return (
    <div className="min-h-[100px] flex items-center justify-center flex-col gap-3">
      <CircleAlert />
      <p>Stock Not found!</p>
    </div>
  );
}

export default StockNotFound;
