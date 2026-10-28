export function ifCondition<T, F>(condition: boolean, trueVal: T, falseVal: F): T | F {
  return condition ? trueVal : falseVal;
}

export function and(...conditions: boolean[]): boolean {
  return conditions.every(Boolean);
}

export function or(...conditions: boolean[]): boolean {
  return conditions.some(Boolean);
}

export function not(condition: boolean): boolean {
  return !condition;
}
