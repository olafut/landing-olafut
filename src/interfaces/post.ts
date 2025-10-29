import type { Author } from './author';

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImageMobile: string;
  coverImageTablet: string;
  coverImageDesktop: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
