import { useState, useCallback } from "react";

export const useTokenExchange = () => {
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // Mocked exchange rate for demo
  const exchangeRate = 50;

  const calculateOutputAmount = useCallback((inputAmount: string) => {
    const parsed = parseFloat(inputAmount);
    if (isNaN(parsed)) return "0";
    return (parsed * exchangeRate).toFixed(6);
  }, []);

  const handleExchange = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Here you would typically make the actual exchange call
      console.log("Exchange successful");
    } catch (error) {
      console.error("Exchange failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    amount,
    setAmount,
    loading,
    handleExchange,
    calculateOutputAmount,
  };
};
