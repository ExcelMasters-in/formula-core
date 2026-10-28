import type { Token, TokenType } from './types';

export function tokenize(formula: string): Token[] {
  const clean = formula.startsWith('=') ? formula.slice(1).trim() : formula.trim();
  const tokens: Token[] = [];
  let i = 0;

  while (i < clean.length) {
    const char = clean[i];
    if (/\s/.test(char)) {
      i++;
      continue;
    }
    if (char === '(') {
      tokens.push({ type: 'LPAREN', value: '(', position: i });
      i++;
    } else if (char === ')') {
      tokens.push({ type: 'RPAREN', value: ')', position: i });
      i++;
    } else if (char === ',') {
      tokens.push({ type: 'COMMA', value: ',', position: i });
      i++;
    } else if (['+', '-', '*', '/', '>', '<', '='].includes(char)) {
      tokens.push({ type: 'OPERATOR', value: char, position: i });
      i++;
    } else if (/\d/.test(char)) {
      let num = '';
      const start = i;
      while (i < clean.length && /[\d.]/.test(clean[i])) {
        num += clean[i];
        i++;
      }
      tokens.push({ type: 'NUMBER', value: num, position: start });
    } else if (/[A-Za-z]/.test(char)) {
      let word = '';
      const start = i;
      while (i < clean.length && /[A-Za-z0-9_:]/.test(clean[i])) {
        word += clean[i];
        i++;
      }
      if (word.includes(':')) {
        tokens.push({ type: 'RANGE', value: word.toUpperCase(), position: start });
      } else if (i < clean.length && clean[i] === '(') {
        tokens.push({ type: 'FUNCTION', value: word.toUpperCase(), position: start });
      } else {
        tokens.push({ type: 'CELL', value: word.toUpperCase(), position: start });
      }
    } else {
      i++;
    }
  }
  return tokens;
}
