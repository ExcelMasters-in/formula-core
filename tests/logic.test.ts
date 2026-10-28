import { describe, expect, it } from 'bun:test';
import { ifCondition, and, or, not } from '../src/functions/logic';

describe('Logic Functions', () => {
  it('evaluates boolean logic properly', () => {
    expect(ifCondition(true, 'yes', 'no')).toBe('yes');
    expect(ifCondition(false, 'yes', 'no')).toBe('no');
    expect(and(true, true, true)).toBe(true);
    expect(and(true, false)).toBe(false);
    expect(or(false, true)).toBe(true);
    expect(not(true)).toBe(false);
  });
});
