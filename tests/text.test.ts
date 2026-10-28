import { describe, expect, it } from 'bun:test';
import { concatenate, upper, lower, trim, len } from '../src/functions/text';

describe('Text Functions', () => {
  it('performs text formatting operations', () => {
    expect(concatenate('Hello', ' ', 'World')).toBe('Hello World');
    expect(upper('excel')).toBe('EXCEL');
    expect(lower('MASTERS')).toBe('masters');
    expect(trim('  data  ')).toBe('data');
    expect(len('spreadsheet')).toBe(11);
  });
});
