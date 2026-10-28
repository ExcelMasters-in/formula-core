import { describe, expect, it } from 'bun:test';
import { tokenize } from '../src/tokenizer';

describe('tokenize', () => {
  it('tokenizes basic arithmetic formulas', () => {
    const tokens = tokenize('=A1 + 10');
    expect(tokens.length).toBe(3);
    expect(tokens[0].type).toBe('CELL');
    expect(tokens[1].type).toBe('OPERATOR');
    expect(tokens[2].type).toBe('NUMBER');
  });

  it('tokenizes function calls with range parameters', () => {
    const tokens = tokenize('=SUM(A1:B10)');
    expect(tokens[0].type).toBe('FUNCTION');
    expect(tokens[0].value).toBe('SUM');
    expect(tokens[2].type).toBe('RANGE');
    expect(tokens[2].value).toBe('A1:B10');
  });
});
