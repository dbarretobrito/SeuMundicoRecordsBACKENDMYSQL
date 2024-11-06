// utils/formatProductName.ts
export function formatProductName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-');
}
