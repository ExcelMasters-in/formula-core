export type TokenType = 'FUNCTION' | 'CELL' | 'RANGE' | 'NUMBER' | 'STRING' | 'OPERATOR' | 'LPAREN' | 'RPAREN' | 'COMMA';

export interface Token {
  type: TokenType;
  value: string;
  position: number;
}

export type ASTNode =
  | { type: 'Literal'; value: number | string }
  | { type: 'Cell'; address: string }
  | { type: 'Range'; start: string; end: string }
  | { type: 'BinaryOp'; operator: string; left: ASTNode; right: ASTNode }
  | { type: 'FunctionCall'; name: string; args: ASTNode[] };
