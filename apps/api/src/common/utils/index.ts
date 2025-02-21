export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function generateOTP(length: number = 6): string {
  return Math.floor(
    Math.pow(10, length - 1) + Math.random() * (9 * Math.pow(10, length - 1)),
  ).toString();
}
