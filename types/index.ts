export interface NavLink {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface StatItem {
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  tags?: string[];
  icon?: React.ComponentType<{ className?: string }>;
}
