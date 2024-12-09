import React from "react";

interface TokenInputProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  symbol: string;
  disabled?: boolean;
}

export const TokenInput: React.FC<TokenInputProps> = ({
  label,
  value,
  onChange,
  symbol,
  disabled = false,
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <label className="text-sm text-gray-600 mb-2 block">{label}</label>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder="0.0"
          disabled={disabled}
          min="0"
        />
        <span className="text-gray-700 font-medium">{symbol}</span>
      </div>
    </div>
  );
};
