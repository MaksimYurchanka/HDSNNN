import React from "react";
import { ArrowDown } from "lucide-react";
import { TokenInput } from "./TokenInput.tsx";
import { ExchangeRate } from "./ExchangeRate.tsx";
import { useTokenExchange } from "../hooks/useTokenExchange";

export const TokenExchange: React.FC = () => {
  const { amount, setAmount, loading, handleExchange, calculateOutputAmount } =
    useTokenExchange();

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Token Exchange</h2>

      <TokenInput
        label="You Pay"
        value={amount}
        onChange={setAmount}
        symbol="USDT"
      />

      <div className="flex justify-center my-4">
        <div className="bg-gray-100 p-2 rounded-full">
          <ArrowDown className="text-gray-600" size={20} />
        </div>
      </div>

      <TokenInput
        label="You Receive"
        value={calculateOutputAmount(amount)}
        symbol="HDSN"
        disabled
      />

      <ExchangeRate rate={50} fromSymbol="USDT" toSymbol="HDSN" />

      <button
        onClick={handleExchange}
        disabled={loading || !amount || parseFloat(amount) <= 0}
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? "Processing..." : "Exchange"}
      </button>

      <div className="mt-4 text-sm text-gray-600">
        <p>Network Fee: 0.1%</p>
        <p>Minimum Exchange: 1 USDT</p>
      </div>
    </div>
  );
};
