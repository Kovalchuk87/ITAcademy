const Calculator = require('./calculator');

describe('Calculator', () => {
  describe('adding', () => {
    it('should return the sum of two positive numbers', () => {
      const calculator = new Calculator();
      const result = calculator.add(1, 99);
      expect(result).toBe(100);
    });

    it('should return the sum of multiple positive numbers', () => {
      const calculator = new Calculator();
      const result = calculator.add(1, 2, 3, 4, 100);
      expect(result).toBe(110);
    });

    it('should return the sum of two negative numbers', () => {
      const calculator = new Calculator();
      const result = calculator.add(-1, -99);
      expect(result).toBe(-100);
    });

    it('should return the sum of multiple negative numbers', () => {
      const calculator = new Calculator();
      const result = calculator.add(-1, -2, -3, -4, -100);
      expect(result).toBe(-110);
    });

    it('should return the sum of multiple positive & negative numbers', () => {
      const calculator = new Calculator();
      const result = calculator.add(-1, -11, 13, 10);
      expect(result).toBe(11);
    });

    it('should return the sum of numbers & zero', () => {
      const calculator = new Calculator();
      const result = calculator.add(-13, 0, 14);
      expect(result).toBe(1);
    });

    it('should return the sum of zeroes', () => {
      const calculator = new Calculator();
      const result = calculator.add(0, 0, 0);
      expect(result).toBe(0);
    });
  });

  describe('multiplication', () => {
    it('should return the multiplication of two positive numbers', () => {
      const calculator = new Calculator();
      const result = calculator.multiply(1, 99);
      expect(result).toBe(99);
    });

    it('should return the multiplication of multiple positive numbers', () => {
      const calculator = new Calculator();
      const result = calculator.multiply(1, 2, 3, 4, 100);
      expect(result).toBe(2400);
    });

    it('should return the multiplication of two negative numbers', () => {
      const calculator = new Calculator();
      const result = calculator.multiply(-1, -99);
      expect(result).toBe(-99);
    });

    it('should return the multiplication of multiple negative numbers', () => {
      const calculator = new Calculator();
      const result = calculator.multiply(-1, -2, -3, -4, -100);
      expect(result).toBe(-2400);
    });

    it('should return the multiplication of multiple positive & negative numbers', () => {
      const calculator = new Calculator();
      const result = calculator.multiply(-1, -11, 13, 10);
      expect(result).toBe(1430);
    });

    it('should return the multiplication of numbers & zero', () => {
      const calculator = new Calculator();
      const result = calculator.multiply(-13, 0, 14);
      expect(result).toBe(0);
    });

    it('should return the multiplication of zeroes', () => {
      const calculator = new Calculator();
      const result = calculator.multiply(-0, 0, 0);
      expect(result).toBe(0);
    });
  });

  describe('subtraction', () => {
    it('should return the difference of positive numbers', () => {
      const calculator = new Calculator();
      const result = calculator.subtraction(1, 99);
      expect(result).toBe(-98);
    });

    it('should return the difference of two negative numbers', () => {
      const calculator = new Calculator();
      const result = calculator.subtraction(-1, -99);
      expect(result).toBe(-100);
    });

    it('should return the difference of positive & negative numbers', () => {
      const calculator = new Calculator();
      const result = calculator.subtraction(1, -10);
      expect(result).toBe(11);
    });

    it('should return the difference of number & zero', () => {
      const calculator = new Calculator();
      const result = calculator.subtraction(3, 0);
      expect(result).toBe(3);
    });

    it('should return the difference of zeroes', () => {
      const calculator = new Calculator();
      const result = calculator.subtraction(0, 0);
      expect(result).toBe(0);
    });
  });

  describe('division', () => {
    it('should return the quotient of two positive numbers', () => {
      const calculator = new Calculator();
      const result = calculator.divide(10, 5);
      expect(result).toBe(2);
    });

    it('should return the quotient of two negative numbers', () => {
      const calculator = new Calculator();
      const result = calculator.divide(-10, -5);
      expect(result).toBe(2);
    });

    it('should return the quotient of positive & negative numbers', () => {
      const calculator = new Calculator();
      const result = calculator.divide(10, -5);
      expect(result).toBe(-2);
    });
    it('should return the 0 with zero and positive number', () => {
      const calculator = new Calculator();
      const result = calculator.divide(0, 7);
      expect(result).toBe(0);
    });

    it('should return the 0 with zero and negative number', () => {
      const calculator = new Calculator();
      const result = calculator.divide(0, -5);
      expect(result).toBe(0);
    });

    it('should return Infinity with positive number & zero', () => {
      const calculator = new Calculator();
      const result = calculator.divide(11, 0);
      expect(result).toBe(Infinity);
    });
    it('should return -Infinity with negative number & zero', () => {
      const calculator = new Calculator();
      const result = calculator.divide(-11, 0);
      expect(result).toBe(-Infinity);
    });
  });

  describe('exponentiation', () => {
    it('should return the power of positive number', () => {
      const calculator = new Calculator();
      const result = calculator.exponentiation(5);
      expect(result).toBe(25);
    });

    it('should return 0 after exponentiation of zero', () => {
      const calculator = new Calculator();
      const result = calculator.exponentiation(0);
      expect(result).toBe(0);
    });

    it('should return the power of negative number', () => {
      const calculator = new Calculator();
      const result = calculator.exponentiation(-6);
      expect(result).toBe(36);
    });
  });
});
