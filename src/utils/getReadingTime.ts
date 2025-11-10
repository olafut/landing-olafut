/**
 * Calculate estimated reading time based on word count
 * Average reading speed: 200 words per minute
 * @param content - The content to calculate reading time for
 * @returns Reading time in minutes
 */
export function getReadingTime(content: string): number {
  const WORDS_PER_MINUTE = 200;

  const cleanText = content
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const wordCount = cleanText.split(' ').length;
  const minutes = Math.ceil(wordCount / WORDS_PER_MINUTE);

  return Math.max(1, minutes); // Minimum 1 minute
}
