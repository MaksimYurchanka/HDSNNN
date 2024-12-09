import React from "react";
import { ArrowDownUp } from "lucide-react";

interface ExchangeRateProps {
  rate: number;
  fromSymbol: string;
  toSymbol: string;
}

export const ExchangeRate: React.FC<ExchangeRateProps> = ({
  rate,
  fromSymbol,
  toSymbol,
}) => {
  return (
    <div className="flex items-center justify-center space-x-2 text-gray-600 my-4">
      <span>1 {fromSymbol}</span>
      <ArrowDownUp size={16} />
      <span>
        {rate} {toSymbol}
      </span>
    </div>
  );
};
