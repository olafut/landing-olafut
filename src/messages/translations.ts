type Item = {
  title: string;
  description: string[];
};

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

type Value = {
  title: string;
  description: string;
};

type Stat = {
  number: string;
  label: string;
};

export type Translations = {
  Common: {
    Navigation: {
      home: string;
      about: string;
      blog: string;
    };
    Cta: {
      join: string;
      joinTheCommunity: string;
      backToHome: string;
      bePartOfChange: string;
      dontMissOut: string;
    };
  };
  Hero: {
    badge: string;
    title: string;
    subtitle: string;
    trustBadges: {
      activeCommunity: string;
      weeklyPodcast: string;
      everyoneCounts: string;
    };
    floatingCard: {
      title: string;
      subtitle: string;
    };
    buildingHistory: string;
  };
  WhyOlafut: {
    title: string;
    paragraphs: string[];
  };
  Features: {
    title: string;
    items: Record<string, Item>;
    comingSoon: string;
  };
  AboutUs: {
    Hero: {
      title: string;
      subtitle: string;
    };
    Mission: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      hubNote: string;
    };
    Stats: {
      title: string;
      subtitle: string;
      items: Stat[];
    };
    Timeline: {
      title: string;
      subtitle: string;
      items: TimelineItem[];
    };
    Values: {
      title: string;
      subtitle: string;
      items: Value[];
    };
    Cta: {
      title: string;
      description: string;
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
  NotFound: {
    error: string;
    title: string;
    description: string;
  };
  Footer: {
    description: string;
    navigation: {
      title: string;
    };
    social: {
      title: string;
    };
    contact: {
      title: string;
      email: string;
      location: string;
    };
    copyright: string;
    logoAlt: string;
    logoAriaLabel: string;
  };
};
