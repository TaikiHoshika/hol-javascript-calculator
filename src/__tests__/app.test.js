import { add, subtract, multiply, divide } from '../app';

describe('Calculator Functions', () => {
    test('add function adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 1)).toBe(0);
        expect(add(-1, -1)).toBe(-2);
    });

    test('subtract function subtracts two numbers', () => {
        expect(subtract(2, 1)).toBe(1);
        expect(subtract(1, 1)).toBe(0);
        expect(subtract(-1, -1)).toBe(0);
    });

    test('multiply function multiplies two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-1, 1)).toBe(-1);
        expect(multiply(-1, -1)).toBe(1);
    });

    test('divide function divides two numbers', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(-1, 1)).toBe(-1);
        expect(divide(-1, -1)).toBe(1);
    });

    test('divide function handles division by zero', () => {
        expect(() => divide(1, 0)).toThrow("Division by zero");
    });
});