import { describe, expect, it } from 'bun:test';
import { FormulaParser } from '../src/parser';

describe('FormulaParser', () => {
  it('parses function calls with cell and number arguments into AST', () => {
    const parser = new FormulaParser('=SUM(A1, 10)');
    const ast = parser.parse();
    expect(ast.type).toBe('FunctionCall');
    if (ast.type === 'FunctionCall') {
      expect(ast.name).toBe('SUM');
      expect(ast.args.length).toBe(2);
      expect(ast.args[0].type).toBe('Cell');
      expect(ast.args[1].type).toBe('Literal');
    }
  });
});
