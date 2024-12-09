export interface Token {
  symbol: string;
  name: string;
  balance: string;
  decimals: number;
}

export interface ExchangeRate {
  rate: number;
  lastUpdated: Date;
}
