export function concatenate(...parts: string[]): string {
  return parts.join('');
}

export function upper(text: string): string {
  return text.toUpperCase();
}

export function lower(text: string): string {
  return text.toLowerCase();
}

export function trim(text: string): string {
  return text.trim();
}

export function len(text: string): number {
  return text.length;
}
