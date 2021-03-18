interface CashRegister {
  id: number;
}

interface Shop {  
  name: string;
  address: string;
}

export interface BaseCashier {
  name: string;
  age: number;
  sex: string;
  shop: Shop[];
  yearsOfExperience: number;
  shopsOfExperience: Shop[];
  cashRegister: CashRegister;
  schedule: [number, string][];
}

export interface Cashier extends BaseCashier {
  id: number;
}

export interface Cashiers {
  [key: number]: Cashier;
}
