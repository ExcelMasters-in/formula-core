import { tokenize } from './tokenizer';
import type { ASTNode, Token } from './types';

export class FormulaParser {
  private tokens: Token[];
  private current = 0;

  constructor(formula: string) {
    this.tokens = tokenize(formula);
  }

  public parse(): ASTNode {
    return this.parseExpression();
  }

  private parseExpression(): ASTNode {
    let node = this.parsePrimary();
    while (this.current < this.tokens.length && this.tokens[this.current].type === 'OPERATOR') {
      const op = this.tokens[this.current].value;
      this.current++;
      const right = this.parsePrimary();
      node = { type: 'BinaryOp', operator: op, left: node, right };
    }
    return node;
  }

  private parsePrimary(): ASTNode {
    const token = this.tokens[this.current];
    if (!token) throw new Error('Unexpected end of formula');

    if (token.type === 'NUMBER') {
      this.current++;
      return { type: 'Literal', value: parseFloat(token.value) };
    }
    if (token.type === 'CELL') {
      this.current++;
      return { type: 'Cell', address: token.value };
    }
    if (token.type === 'RANGE') {
      this.current++;
      const [start, end] = token.value.split(':');
      return { type: 'Range', start, end };
    }
    if (token.type === 'FUNCTION') {
      const name = token.value;
      this.current++; // consume function name
      this.current++; // consume LPAREN
      const args: ASTNode[] = [];
      while (this.current < this.tokens.length && this.tokens[this.current].type !== 'RPAREN') {
        args.push(this.parseExpression());
        if (this.current < this.tokens.length && this.tokens[this.current].type === 'COMMA') {
          this.current++;
        }
      }
      this.current++; // consume RPAREN
      return { type: 'FunctionCall', name, args };
    }
    throw new Error(`Unexpected token: ${token.value}`);
  }
}
