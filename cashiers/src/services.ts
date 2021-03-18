import { BaseCashier, Cashier, Cashiers } from './interfaces.ts';
import { cashiers } from './db.ts';

export const findAll = async (): Promise<Cashier[]> => { return Object.values(cashiers) };

export const findTargetCashiers1 = async (): Promise<Cashier[]> => {
   let query = Object.values(cashiers).filter(el =>
     el.shopsOfExperience.filter(element => element.name === "Arsen" || element.name === "Silpo").length > 0
     && el.yearsOfExperience > 5);
  return  query;
 };

export const findTargetCashiers2 = async (): Promise<Cashier[]> => {
   return Object.values(cashiers).filter(el => el.shop.address === "Shevenka, 100, Lviv Oblast" && el.schedule[0][1] === "23:00 - 07:00");  
 };

export const find = async (id: number): Promise<Cashier> => { return cashiers[id] };

export const create = async (newCashier: BaseCashier): Promise<Cashier> => { return newCashier };

export const update = async (
  id: number,
  cashierUpdate: BaseCashier
): Promise<Cashier | null> => {
  const cashier = await find(id);

  if (!cashier) {
    return null;
  }

  cashiers[id] = { id, ...cashierUpdate };

  return cashiers[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const cashier = await find(id);

  if (!cashier) {
    return null;
  }

delete cashiers[id];
};
