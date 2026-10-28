import { describe, expect, it } from 'bun:test';
import { parseCellAddress, evaluateSimpleSum } from '../src/evaluator';

describe('Evaluator', () => {
  it('parses alphanumeric cell coordinates', () => {
    const coord = parseCellAddress('B12');
    expect(coord.col).toBe('B');
    expect(coord.row).toBe(12);
  });

  it('evaluates grid values', () => {
    const grid = { A1: 10, A2: 25, A3: 5 };
    expect(evaluateSimpleSum('A1:A3', grid)).toBe(40);
  });
});
