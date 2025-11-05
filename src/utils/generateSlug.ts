export function generateSlug(title: string, maxLength = 100): string {
  const slug = title
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '') // \w incluye a-z, 0-9, _
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');

  return slug.slice(0, maxLength);
}
