import { Router } from "express";
import { getFunFact } from "../services/funFact";
import { properties } from "../utils/properties";
import mathHelper from "../utils/mathHelper";

const numberRouter = Router();

numberRouter.get("/", async (req, res, next) => {
  try {
    const number = req.query.number as string;
    const val = Number(number);

    const isPrime = mathHelper.isPrime(val);
    const isPerfect = mathHelper.isPerfect(val);
    const isArmstrong = mathHelper.isArmstrong(val);
    const isEven = mathHelper.isEven(val);
    const digitSum = mathHelper.digitSum(val);
    const fun_fact = await getFunFact(val);

    res.json({
      number: val,
      is_prime: isPrime,
      is_perfect: isPerfect,
      properties: properties(isArmstrong, isEven),
      digit_sum: digitSum,
      fun_fact: fun_fact,
    });
  } catch (error) {
    next(error);
  }
});

export default numberRouter;
