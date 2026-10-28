import { describe, expect, it } from 'bun:test';
import { sum, average, min, max, product, round } from '../src/functions/math';

describe('Math Functions', () => {
  it('calculates sum, average, min, max correctly', () => {
    expect(sum(10, 20, 30)).toBe(60);
    expect(average(10, 20, 30)).toBe(20);
    expect(min(5, 10, 2)).toBe(2);
    expect(max(5, 10, 2)).toBe(10);
    expect(product(2, 3, 4)).toBe(24);
    expect(round(3.14159, 2)).toBe(3.14);
  });
});
