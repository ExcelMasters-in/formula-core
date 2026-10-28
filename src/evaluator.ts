export type CellGrid = Record<string, number | string>;

export function evaluateSimpleSum(range: string, grid: CellGrid): number {
  return Object.values(grid).reduce<number>((acc, val) => {
    return acc + (typeof val === 'number' ? val : 0);
  }, 0);
}

export function parseCellAddress(address: string): { col: string; row: number } {
  const match = address.match(/^([A-Z]+)(\d+)$/);
  if (!match) throw new Error(`Invalid cell address: ${address}`);
  return { col: match[1], row: parseInt(match[2], 10) };
}
