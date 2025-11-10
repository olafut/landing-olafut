type Item = {
  title: string;
  description: string[];
};

export type Translations = {
  Hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  WhyOlafut: {
    title: string;
    paragraphs: string[];
    cta: string;
  };
  Features: {
    title: string;
    items: Record<string, Item>;
    cta: string;
    comingSoon: string;
  };
  AboutUs: {
    Hero: {
      title: string;
      subtitle: string;
    };
  };
  Blog: {
    title: string;
    description: string;
    publishedArticles: string;
    readingTime: string;
    readArticle: string;
    moreStories: string;
  };
};
