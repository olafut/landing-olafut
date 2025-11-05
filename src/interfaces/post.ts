import type { Author } from './author';

export type Post = {
  id: string;
  title: string;
  slug: string;
  coverImage?: string;
  summary: string;
  date: string;
  content: string;
  author: Author;
  tags?: string[];
  category?: string;
};
