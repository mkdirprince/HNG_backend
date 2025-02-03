import { describe, test } from "node:test";
import assert from "node:assert";
import mathHelper from "../utils/mathHelper";

describe("Math helper functions", () => {
  describe("isPrime", () => {
    test("1 or any number less than it is not a prime number", () => {
      const res = mathHelper.isPrime(0);

      assert.equal(res, false);
    });

    test("2 is a prime number", () => {
      assert.equal(mathHelper.isPrime(2), true);
    });

    test("works for correct prime numbers", () => {
      assert.equal(mathHelper.isPrime(5), true);
      assert.equal(mathHelper.isPrime(7), true);
      assert.equal(mathHelper.isPrime(11), true);
      assert.equal(mathHelper.isPrime(13), true);
    });

    test("fails for non-prime numbers", () => {
      assert.equal(mathHelper.isPrime(6), false);
      assert.equal(mathHelper.isPrime(9), false);
      assert.equal(mathHelper.isPrime(15), false);
    });
  });

  describe("isEven", () => {
    test("should work for 0", () => {
      assert.equal(mathHelper.isEven(0), true);
    });
    test("works for all even numbers", () => {
      assert.equal(mathHelper.isEven(2), true);
      assert.equal(mathHelper.isEven(4), true);
      assert.equal(mathHelper.isEven(120), true);
      assert.equal(mathHelper.isEven(180), true);
    });

    test("fails for all odd numbers", () => {
      assert.equal(mathHelper.isEven(1), false);
      assert.equal(mathHelper.isEven(3), false);
      assert.equal(mathHelper.isEven(123), false);
      assert.equal(mathHelper.isEven(181), false);
    });
  });

  describe("isPerfect", () => {
    test("should not work for odd numbers", () => {
      assert.equal(mathHelper.isPerfect(1), false);
      assert.equal(mathHelper.isPerfect(133), false);
      assert.equal(mathHelper.isPerfect(357), false);
    });

    test("should work for correct even perfect numbers", () => {
      assert.equal(mathHelper.isPerfect(6), true);
      assert.equal(mathHelper.isPerfect(28), true);
      assert.equal(mathHelper.isPerfect(496), true);
      assert.equal(mathHelper.isPerfect(8128), true);
    });
  });

  describe("isArmstrong", () => {
    test("works all for proper Armstrong numbers", () => {
      assert.equal(mathHelper.isArmstrong(0), true);
      assert.equal(mathHelper.isArmstrong(1), true);
      assert.equal(mathHelper.isArmstrong(5), true);
      assert.equal(mathHelper.isArmstrong(153), true);
      assert.equal(mathHelper.isArmstrong(1741725), true);
    });
  });

  describe("digitSum", () => {
    test("should work for 1 digit number", () => {
      assert.equal(mathHelper.digitSum(1), 1);
    });
    test("should work for 2-digit numbers", () => {
      assert.equal(mathHelper.digitSum(12), 3);
    });
    test("should work for 6-digit numbers", () => {
      assert.equal(mathHelper.digitSum(123456), 21);
    });
    test("should work for 9-digit numbers", () => {
      assert.equal(mathHelper.digitSum(123456789), 45);
    });
  });
});
