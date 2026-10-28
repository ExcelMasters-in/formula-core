export function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

export function average(...numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return sum(...numbers) / numbers.length;
}

export function min(...numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return Math.min(...numbers);
}

export function max(...numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return Math.max(...numbers);
}

export function product(...numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return numbers.reduce((a, b) => a * b, 1);
}

export function round(value: number, decimals = 0): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}
