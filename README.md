# @excelmasters/formula-core

[![CI](https://github.com/ExcelMasters-in/formula-core/actions/workflows/ci.yml/badge.svg)](https://github.com/ExcelMasters-in/formula-core/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Bun](https://img.shields.io/badge/Bun-1.4+-black.svg)](https://bun.sh)

High-performance abstract syntax tree (AST) formula parser, tokenizer, and calculation engine for spreadsheet intelligence.

## Installation

```bash
bun add @excelmasters/formula-core
# or
npm install @excelmasters/formula-core
```

## Quick Start

```typescript
import { FormulaParser, tokenize } from '@excelmasters/formula-core';

const parser = new FormulaParser('=SUM(A1:B10) + 10');
const ast = parser.parse();
console.log(ast);
```

## Architecture
- **Tokenizer**: Sub-millisecond regular expression lexer.
- **AST Parser**: Recursive descent parser yielding strongly-typed AST trees.
- **Math & Logic Engine**: High-precision spreadsheet function implementations.
