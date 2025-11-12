type InitiativeItem = {
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

type CtaType = {
  ctaText: string;
};

type NavigationType = {
  home: string;
  about: string;
  blog: string;
};

type FooterItemType = {
  title: string;
};

type ContactItemType = FooterItemType & {
  email: string;
  location: string;
};

type FooterType = {
  description: string;
  navigation: FooterItemType;
  social: FooterItemType;
  contact: ContactItemType;
  copyright: string;
  logoAlt: string;
  logoAriaLabel: string;
};

type HeroType = CtaType & {
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

type WhyOlafutFeaturesType = {
  needsMoreThanPromises: string;
  imagineAPlace: string;
  womenAreTheProtagonists: string;
  passionAndPurpose: string;
};

type WhyOlafutType = CtaType & {
  title: string;
  features: WhyOlafutFeaturesType;
};

type InitiativesType = CtaType & {
  title: string;
  items: Record<string, InitiativeItem>;
  comingSoon: string;
};

export type Translations = {
  Layout: {
    Navigation: NavigationType;
    Footer: FooterType;
  };
  Home: {
    Hero: HeroType;
    WhyOlafut: WhyOlafutType;
    Initiatives: InitiativesType;
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
    btnText: string;
  };
};
