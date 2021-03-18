import express, { Request, Response } from "express";
import * as CashierService from "./services";
import { BaseCashier, Cashier } from "./interfaces";
const winston = require('./winston');

export const cashierRouter = express.Router();

cashierRouter.get("/", async (req: Request, res: Response) => {
  try {
    const cashiers: Cashier[] = await CashierService.findAll();
    res.status(200).send(cashiers);
    console.log(cashiers);
    winston.info(JSON.stringify(cashiers));
  } catch (e) {
    res.status(500).send(e.message);
  }
});

cashierRouter.get("/TargetCashiers1", async (req: Request, res: Response) => {
  try {
    const cashiers: Cashier[] = await CashierService.findTargetCashiers1();
    res.status(200).send(cashiers);
    console.log(cashiers);
    winston.info(JSON.stringify(cashiers));
  } catch (e) {
    res.status(500).send(e.message);
  }
});

cashierRouter.get("/TargetCashiers2", async (req: Request, res: Response) => {
  try {
    const cashiers: Cashier[] = await CashierService.findTargetCashiers2();
    res.status(200).send(cashiers);
    console.log(cashiers);
    winston.info(JSON.stringify(cashiers));
  } catch (e) {
    res.status(500).send(e.message);
  }
});

cashierRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const cashier: Cashier = await CashierService.find(id);

    if (cashier) {
      return res.status(200).send(cashier);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

cashierRouter.post("/", async (req: Request, res: Response) => {
  try {
    const cashier: BaseCashier = req.body;

    const newCashier = await CashierService.create(cashier);

    res.status(201).json(newCashier);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

cashierRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const cashierUpdate: Cashier = req.body;

    const existingCashier: Cashier = await CashierService.find(id);

    if (existingCashier) {
      const updatedCashier = await CashierService.update(id, cashierUpdate);
      return res.status(200).json(updatedCashier);
    }

  const newCashier = await CashierService.create(cashierUpdate);

  res.status(201).json(newCashier);
} catch (e) {
  res.status(500).send(e.message);
}
});

cashierRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await CashierService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
