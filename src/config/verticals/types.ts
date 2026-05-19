export interface StatPillConfig {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroSubheadlineConfig {
  before: string;
  teamHighlight: string;
  after: string;
  callout: string;
}

export interface HeroConfig {
  eyebrow: string;
  headline: {
    line1Words: string[];
    line2Words: string[];
    line3: string;
    line4: string;
  };
  subheadline: HeroSubheadlineConfig;
  bannerText: string;
  stats: [StatPillConfig, StatPillConfig, StatPillConfig];
}

export interface ProblemCardConfig {
  title: string;
  body: string;
}

export interface ProblemConfig {
  headline: string;
  cards: [ProblemCardConfig, ProblemCardConfig, ProblemCardConfig];
}

export interface HowItWorksConfig {
  steps: [
    { title: string; body: string },
    { title: string; body: string },
    { title: string; body: string },
  ];
}

export interface FeatureItemConfig {
  title: string;
  body: string;
  badge?: string;
}

export interface FeaturesConfig {
  headline: string;
  items: FeatureItemConfig[];
}

export interface SalesOSSystemConfig {
  name: string;
  desc: string;
}

export interface SalesOSConfig {
  eyebrow: string;
  headline: string;
  subheadline: string;
  systems: SalesOSSystemConfig[];
}

export interface FinalCTAConfig {
  statPills: [string, string, string];
  headlinePrefix: string;
  headlineAccent: string;
  headlineSuffix: string;
  subheadline: string;
}

export interface ROIConfig {
  repsLabel: string;
  leadsPerRepLabel: string;
  costPerLeadLabel: string;
  costPerLeadHint: string;
  closeRateLabel: string;
  closeRateHint: string;
  revenueLabel: string;
  revenueHint: string;
  nounSingular: string;
  nounPlural: string;
  verbPastTense: string;
  adjective: string;
  previewDefaultsLabel: string;
  previewSubheadline: string;
}

export interface FooterConfig {
  tagline: string;
  copyrightEntity: string;
}

export interface AnnouncementBannerConfig {
  primaryText: string;
}

export interface MetaConfig {
  title: string;
  description: string;
  metadataBase: string;
}

export interface UseCaseProblemCard {
  iconKey: string;
  title: string;
  body: string;
}

export interface UseCaseFeature {
  iconKey: string;
  title: string;
  body: string;
}

export interface UseCaseData {
  hero: { headline: string; subheadline: string };
  problem: { headline: string; cards: UseCaseProblemCard[] };
  solution: { headline: string; features: UseCaseFeature[] };
  outcome: { statement: string };
}

export interface VerticalConfig {
  id: string;
  domain: string;
  meta: MetaConfig;
  announcementBanner: AnnouncementBannerConfig;
  hero: HeroConfig;
  problem: ProblemConfig;
  howItWorks: HowItWorksConfig;
  features: FeaturesConfig;
  salesOS: SalesOSConfig;
  finalCTA: FinalCTAConfig;
  roi: ROIConfig;
  footer: FooterConfig;
  useCases: Record<string, UseCaseData>;
}
