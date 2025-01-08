// 定义 NavigationLink 类型
export interface NavigationLink {
  id: number;
  title: string;
  image: string;
}

// 定义 Transaction 类型
export interface Transaction {
  id: number;
  name: string;
  image: string;
  date: string;
  amount: number;
}
// 定义 ReportData 类型
export interface ReportData {
  id: number;
  title: string;
  value: number;
}

// 定义 Budget 类型
export interface Budget {
  id: number;
  category: string;
  amount: number;
}

// 定义 Subscription 类型
export interface Subscription {
  id: number;
  name: string;
  cost: number;
  renewalDate: string;
}

// 定义 Savings 类型
export interface Savings {
  id: number;
  goal: string;
  amount: number;
}
