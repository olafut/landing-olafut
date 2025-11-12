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

type FooterItemType = {
  title: string;
};

type ContactItemType = FooterItemType & {
  email: string;
  location: string;
};

type InitiativesType = CtaType & {
  title: string;
  items: Record<string, InitiativeItem>;
  comingSoon: string;
};

type LayoutType = {
  Navigation: {
    home: string;
    about: string;
    blog: string;
  };
  Footer: {
    description: string;
    navigation: FooterItemType;
    social: FooterItemType;
    contact: ContactItemType;
    copyright: string;
    logoAlt: string;
    logoAriaLabel: string;
  };
};

type HomeType = {
  Hero: CtaType & {
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
  WhyOlafut: CtaType & {
    title: string;
    features: {
      needsMoreThanPromises: string;
      imagineAPlace: string;
      womenAreTheProtagonists: string;
      passionAndPurpose: string;
    };
  };
  Initiatives: InitiativesType;
};

type AboutUsItemType<T = unknown> = {
  title: string;
  subtitle: string;
  items: T[];
};

type AboutUsType = {
  Hero: {
    title: string;
    subtitle: string;
  };
  Mission: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  Stats: AboutUsItemType<Stat>;
  Timeline: AboutUsItemType<TimelineItem>;
  Values: AboutUsItemType<Value>;
  Cta: {
    title: string;
    description: string;
    btnText: string;
  };
};

type BlogType = {
  title: string;
  description: string;
  publishedArticles: string;
  readingTime: string;
  readArticle: string;
  moreStories: string;
};

type NotFoundType = {
  error: string;
  title: string;
  description: string;
  btnText: string;
};

export type Translations = {
  Layout: LayoutType;
  Home: HomeType;
  AboutUs: AboutUsType;
  Blog: BlogType;
  NotFound: NotFoundType;
};
